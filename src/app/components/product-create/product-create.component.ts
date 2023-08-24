import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProductService } from 'src/app/services/product.service';
import { Router } from '@angular/router';
// import { v4 as uuid } from 'uuid';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css'],
})
export class ProductCreateComponent implements OnInit {
  productform: FormGroup | any;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private productService: ProductService
  ) {}

  ngOnInit(): void {
    this.productform = this.formBuilder.group({
      name: ['', Validators.required],
      unit: ['', Validators.required],
      quantity: ['', Validators.required],
      price: ['', Validators.required],
      validity: ['', Validators.required],
      manufacture: ['', Validators.required],
      perishable: ['', Validators.required],
    });
  }

  submitProduct() {
    console.log(this.productform.value);
    this.productform.reset();
    this.router.navigate(['/']);
  }
}
