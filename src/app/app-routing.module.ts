import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./components/views/home/home.module').then(mod => mod.HomeModule),
  },
  {
    path: 'categories',
    loadChildren: () => import('./components/views/categories/categories.module').then(mod => mod.CategoriesModule),
  },
  {
    path: 'categories/:idCategory/books',
    loadChildren: () => import('./components/views/books/books.module').then(mod => mod.BooksModule),
  },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ],
})
export class AppRoutingModule {
}
