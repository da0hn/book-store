import { Component, OnInit } from '@angular/core';
import { Category, CategoryService } from '@book-store/views/categories/shared';
import { ActivatedRoute, Router } from '@angular/router';
import { map, switchMap } from 'rxjs';
import { SnackService } from '@book-store/components/shared';

@Component({
  selector: 'app-category-delete',
  templateUrl: './category-delete.component.html',
  styleUrls: [ './category-delete.component.scss' ],
})
export class CategoryDeleteComponent implements OnInit {
  category!: Category;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: CategoryService,
    private snackbarService: SnackService,
  ) {
  }

  ngOnInit(): void {
    this.loadCategory();
  }

  loadCategory() {
    this.route.paramMap.pipe(
      map(param => +param.get('id')!),
      switchMap((idCategory: number) => this.service.findById(idCategory),
      ),
    ).subscribe(category => this.category = category);
  }

  delete() {
    this.service.deleteById(this.category.id!).subscribe(async _ => {
      this.snackbarService.message({ message: 'Categoria deletada com sucesso' });
      await this.router.navigate([ 'categorias' ]);
    });
  }

  async cancel(): Promise<void> {
    await this.router.navigate([ 'categorias' ]);
  }
}
