import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CategoriesRoutingModule } from './categories-routing.module';
import { CategoryListComponent } from './category-list';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { CategoryNewComponent } from './category-new/category-new.component';


@NgModule({
  declarations: [
    CategoryListComponent,
    CategoryNewComponent,
  ],
  imports: [
    CommonModule,
    CategoriesRoutingModule,
    MatTableModule,
    MatButtonModule,
  ],
})
export class CategoriesModule {
}
