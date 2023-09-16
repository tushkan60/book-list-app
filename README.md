# Angular Book List App

This is a simple Angular application that allows you to manage a list of books. The main page displays a list of books, and you can add, edit, and remove books using a modal window.

## Features

- Display a list of books on the main page
- Add a new book using a modal window with a form
- Edit existing books using a modal window with a pre-filled form
- Remove books from the list
- Data persistence using localStorage

## Prerequisites

Before running the application, make sure you have the following installed:

- Node.js
- Angular CLI

## Installation

1. Clone this repository to your local machine.
2. Navigate to the project directory in your terminal.
3. Run `npm install` to install the project dependencies.

## Usage

1. Run `ng serve` to start the development server.
2. Open your browser and navigate to `http://localhost:4200` to access the application.

## Functionality Details

### Main Page

The main page displays a list of books. Each book in the list shows the author and the title.

### Add Book

To add a new book, click on the "Add New Book" button. This will open a modal window with a form. The form has the following fields:

- Author: Enter the name of the author.
- Year of Publication: Enter the year the book was published.
- Title: Enter the title of the book.
- Number of Pages: Enter the number of pages in the book.

Click the "Save" button to add the book to the list. The modal will close, and the new book will be displayed in the list.

### Edit Book

To edit a book, click on the "Edit" button next to the book in the list. This will open a modal window with a form pre-filled with the book's details. You can make changes to the author, year of publication, title, and number of pages.

Click the "Save" button to update the book in the list. The modal will close, and the updated book will be displayed in the list.

### Remove Book

To remove a book from the list, click on the "Delete" button next to the book. The book will be permanently deleted from the list.

### Data Persistence

The application uses localStorage to store the book list. When you close the browser window and reopen it, the data will be restored, and you will see the previously added books.
