import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BooksListComponent } from './books/books-list/books-list.component';
import { BooksEditComponent } from './books/books-edit/books-edit.component';

const routes: Routes = [
  {
    path: '',
    component: BooksListComponent,
  },
  {
    path: 'create',
    component: BooksEditComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
