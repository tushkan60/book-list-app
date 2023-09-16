import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { BooksEditComponent } from '../books-edit/books-edit.component';
import { Book } from '../book.model';
import { Subscription } from 'rxjs';
import { BooksService } from '../books.service';

@Component({
  selector: 'app-books-list',
  templateUrl: './books-list.component.html',
  styleUrls: ['./books-list.component.css'],
})
export class BooksListComponent implements OnInit, OnDestroy {
  books: Book[] = [];
  bookSubscription: Subscription;

  constructor(
    private dialog: MatDialog,
    public bookService: BooksService,
  ) {}

  ngOnInit() {
    this.bookSubscription = this.bookService
      .getBookUpdateListener()
      .subscribe((books) => {
        this.books = books;
      });
    this.bookService.getBooks();
  }

  openDialog(book: Book) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.data = book;
    // dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;

    this.dialog.open(BooksEditComponent, dialogConfig);
  }

  onDelete(id: number) {
    this.bookService.deleteBook(id);
  }

  ngOnDestroy() {
    this.bookSubscription.unsubscribe();
  }
}
