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
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ],
})
export class AppRoutingModule {
}
