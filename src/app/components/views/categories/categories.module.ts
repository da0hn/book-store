import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CategoriesRoutingModule } from './categories-routing.module';
import { CategoriaListComponent } from './category-list/categoria-list.component';


@NgModule({
  declarations: [
    CategoriaListComponent,
  ],
  imports: [
    CommonModule,
    CategoriesRoutingModule,
  ],
})
export class CategoriesModule {
}
