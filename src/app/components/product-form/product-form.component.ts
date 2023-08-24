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
  @Input() productData: Product | null = null;

  productForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private productService: ProductService,
  ) {}

  ngOnInit(): void {
    this.productForm = new FormGroup({
      id: new FormControl(this.productData ? this.productData.id : ''),
      name: new FormControl(this.productData ? this.productData.name : '', [Validators.required]),
      unit: new FormControl(this.productData ? this.productData.unit : '', [Validators.required]),
      quantity: new FormControl(this.productData ? this.productData.quantity : '', [Validators.required]),
      price: new FormControl(this.productData ? this.productData.price : '', [Validators.required]),
      expiration_date: new FormControl(this.productData ? this.productData.expiration_date : ''),
      manufacturing_date: new FormControl(this.productData ? this.productData.manufacturing_date : '', [Validators.required]),
      perishable: new FormControl(this.productData ? this.productData.perishable : '', [Validators.required]),
    })
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
