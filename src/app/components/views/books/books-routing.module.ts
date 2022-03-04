import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookFormComponent, BookListComponent } from '@book-store/views/books';

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
];

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ],
})
export class BooksRoutingModule {
}
