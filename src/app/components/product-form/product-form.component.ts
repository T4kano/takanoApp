import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ProductService } from 'src/app/services/product.service';
import { Router } from '@angular/router';
import { Product } from 'src/app/Product';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {
  @Output() onSubmit = new EventEmitter<Product>()
  @Input() btnText!: string;

  productForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private productService: ProductService,
  ) {}

  ngOnInit(): void {
    this.productForm = new FormGroup({
      id: new FormControl(''),
      name: new FormControl('', [Validators.required]),
      unit: new FormControl('', [Validators.required]),
      quantity: new FormControl('', [Validators.required]),
      price: new FormControl('', [Validators.required]),
      expiration_date: new FormControl('', [Validators.required]),
      manufacturing_date: new FormControl('', [Validators.required]),
      perishable: new FormControl('', [Validators.required]),
    })

    // Form Control
    // this.productForm = this.formBuilder.group({
    //   name: ['', Validators.required],
    //   unit: ['', Validators.required],
    //   quantity: ['', Validators.required],
    //   price: ['', Validators.required],
    //   validity: ['', Validators.required],
    //   manufacture: ['', Validators.required],
    //   perishable: ['', Validators.required],
    // });

    // Get Products
    // this.prods = this.productService.getProducts();
  }

  get name() {
    return this.productForm.get('name')!;
  }
  get unit() {
    return this.productForm.get('unit')!;
  }
  get quantity() {
    return this.productForm.get('quantity')!;
  }

  // isPerishable(event: any) {

  //   const test: boolean = this.productForm.get('perishable');
  //   console.log(test);

  // }

  submit() {
    // if (this.productForm.invalid) {
    //   return;
    // }
    console.log('submit');

    this.onSubmit.emit(this.productForm.value);
  }
}
