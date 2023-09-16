import { Injectable } from '@angular/core';
import { Book } from './book.model';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BooksService {
  private books: Book[] = [];
  private bookUpdated = new Subject<Book[]>();

  constructor() {}

  getBookUpdateListener() {
    return this.bookUpdated.asObservable();
  }

  getBooks() {
    const loadedBooks = JSON.parse(localStorage.getItem('books') || '[]');
    console.log(loadedBooks);
    this.books = loadedBooks;
    this.bookUpdated.next([...this.books]);
  }

  addBook(book: Book) {
    this.books.push(book);

    localStorage.setItem('books', JSON.stringify(this.books));

    this.bookUpdated.next([...this.books]);
  }

  updateBook(book: Book) {
    const updatedBooks = this.books.map((storedBook) => {
      if (book.id === storedBook.id) {
        return book;
      } else {
        return storedBook;
      }
    });

    localStorage.setItem('books', JSON.stringify(updatedBooks));
    this.books = updatedBooks;
    this.bookUpdated.next([...this.books]);
  }

  deleteBook(id: number) {
    const updatedBooks = this.books.filter((book) => book.id !== id);

    localStorage.setItem('books', JSON.stringify(updatedBooks));
    this.books = updatedBooks;
    this.bookUpdated.next([...this.books]);
  }
}
