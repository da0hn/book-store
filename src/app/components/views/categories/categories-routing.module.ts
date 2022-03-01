import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoryListComponent, CategoryFormComponent, CategoryDeleteComponent } from '@book-store/views/categories';

let routes: Routes;
routes = [
  {
    path: '',
    component: CategoryListComponent,
  },
  {
    path: 'new',
    component: CategoryFormComponent,
  },
  {
    path: ':id/edit',
    component: CategoryFormComponent,
  },
  {
    path: ':id/delete',
    component: CategoryDeleteComponent,
  },
];

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ],
})
export class CategoriesRoutingModule {
}
