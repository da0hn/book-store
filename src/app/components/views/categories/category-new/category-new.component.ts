import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Category, CategoryService } from '../shared';
import { Router } from '@angular/router';
import { SnackService } from '../../../shared';

@Component({
  selector: 'app-category-new',
  templateUrl: './category-new.component.html',
  styleUrls: [ './category-new.component.scss' ],
})
export class CategoryNewComponent implements OnInit {

  categoryForm!: FormGroup;

  constructor(
    private service: CategoryService,
    private snackbarService: SnackService,
    private formBuilder: FormBuilder,
    private router: Router,
  ) {
  }

  ngOnInit(): void {
    this.initForm();
  }

  create(newCategory: Category) {
    this.service.create(newCategory)
      .subscribe(async _ => {
        this.snackbarService.message({ message: 'Categoria criada com sucesso!' });
        await this.router.navigate(['categorias']);
      });
  }

  initForm() {
    this.categoryForm = this.formBuilder.group({
      name: [ null, [ Validators.required ] ],
      description: [ null, [ Validators.required ] ],
    });
  }

  submitForm() {
    this.create({ ...this.categoryForm.value });
  }
}
