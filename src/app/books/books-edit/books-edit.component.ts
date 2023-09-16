import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { BooksService } from '../books.service';
import { Book } from '../book.model';

@Component({
  selector: 'app-books-edit',
  templateUrl: './books-edit.component.html',
  styleUrls: ['./books-edit.component.css'],
})
export class BooksEditComponent implements OnInit {
  bookForm: FormGroup;
  private isEdit: boolean = false;
  private id: number;
  book = {
    title: null,
    author: null,
    year: null,
    pages: null,
  };
  constructor(
    private dialogRef: MatDialogRef<BooksEditComponent>,
    public bookService: BooksService,
    @Inject(MAT_DIALOG_DATA) public data: Book,
  ) {}

  ngOnInit() {
    this.bookForm = this.createForm(null, null, null, null);
    if (this.data) {
      this.bookForm = this.createForm(
        this.data.title,
        this.data.author,
        this.data.year,
        this.data.pages,
      );
      this.isEdit = true;
    }
  }

  save() {
    if (this.bookForm.invalid) {
      return;
    }
    if (!this.isEdit) {
      this.bookService.addBook({
        ...this.bookForm.value,
        id: new Date().getTime(),
      });
    } else {
      this.bookService.updateBook({ ...this.bookForm.value, id: this.data.id });
    }
    this.dialogRef.close();
  }

  close() {
    this.dialogRef.close();
  }

  createForm(title: string, author: string, year: number, pages: number) {
    return new FormGroup({
      title: new FormControl(title),
      author: new FormControl(author),
      year: new FormControl(year, [Validators.min(0), Validators.max(2050)]),
      pages: new FormControl(pages, [Validators.min(0)]),
    });
  }

  getBookProperties() {
    return Object.keys(this.book);
  }
}
