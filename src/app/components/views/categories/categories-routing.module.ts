import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoryListComponent } from './category-list';
import { CategoryFormComponent } from './category-form/category-form.component';
import { CategoryDeleteComponent } from './category-delete/category-delete.component';

const routes: Routes = [
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
