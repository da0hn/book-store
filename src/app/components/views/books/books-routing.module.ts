import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookFormComponent, BookListComponent } from '@book-store/views/books';
import { BookDeleteComponent } from '@book-store/views/book-delete/book-delete.component';
import { BookReadComponent } from '@book-store/views/book-read/book-read.component';

const routes: Routes = [
  {
    path: '',
    component: BookListComponent,
  },
  {
    path: 'new',
    component: BookFormComponent,
  },
  {
    path: ':id/edit',
    component: BookFormComponent,
  },
  {
    path: ':id/delete',
    component: BookDeleteComponent,
  },
  {
    path: ':id',
    component: BookReadComponent,
  },
];

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ],
})
export class BooksRoutingModule {
}
