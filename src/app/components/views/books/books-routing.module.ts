import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookFormComponent, BookListComponent } from '@book-store/views/books';
import { BookDeleteComponent } from '@book-store/views/book-delete/book-delete.component';

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
];

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ],
})
export class BooksRoutingModule {
}
