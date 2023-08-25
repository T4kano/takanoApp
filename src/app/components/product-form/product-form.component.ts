import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Product } from 'src/app/Product';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css'],
})
export class ProductFormComponent implements OnInit {
  @Output() onSubmit = new EventEmitter<Product>();
  @Input() btnText!: string;
  @Input() productData: Product | null = null;

  productForm!: FormGroup;

  constructor() {}

  ngOnInit(): void {
    this.productForm = new FormGroup({
      id: new FormControl(this.productData ? this.productData.id : ''),
      name: new FormControl(this.productData ? this.productData.name : '', [
        Validators.required,
        Validators.maxLength(50),
      ]),
      unit: new FormControl(this.productData ? this.productData.unit : 'lt'),
      quantity: new FormControl(
        this.productData ? this.productData.quantity : '',
        [Validators.required, Validators.min(0.1),]
      ),
      price: new FormControl(this.productData ? this.productData.price : '', [
        Validators.required,
        Validators.min(0.1),
      ]),
      expiration_date: new FormControl(
        this.productData ? this.productData.expiration_date : '',
        [Validators.required]
      ),
      manufacturing_date: new FormControl(
        this.productData ? this.productData.manufacturing_date : '',
        [Validators.required]
      ),
      perishable: new FormControl(
        this.productData ? this.productData.perishable : ''
      ),
    });

    // Data de validade dinâmica
    this.isPerishable();
  }

  get name() {
    return this.productForm.get('name')!;
  }
  // get unit() {
  //   return this.productForm.get('unit')!;
  // }
  get quantity() {
    return this.productForm.get('quantity')!;
  }
  get price() {
    return this.productForm.get('price')!;
  }
  get expiration_date() {
    return this.productForm.get('expiration_date')!;
  }
  get manufacturing_date() {
    return this.productForm.get('manufacturing_date')!;
  }

  // Máscara dinâmica para a quantidade
  quantityMask() {
    let ut = this.productForm.value.unit;

    if (ut == 'un') {
      return 'separator.0';
    } else {
      return 'separator.3';
    }
  }

  // Teste de produto perecível
  isPerishable() {

    if (this.productForm.value.perishable) {
      this.productForm.controls['expiration_date'].enable(); // enable input.

      this.productForm.controls['expiration_date'].setValidators([
        Validators.required, // set form control validators required
      ]);
      
      this.productForm.controls['expiration_date'].setErrors({ 'incorrect': true })
    } else {
      this.productForm.controls['expiration_date'].setValue(''); // clear input value
      this.productForm.controls['expiration_date'].disable(); // disable input

      this.productForm.controls['expiration_date'].setValidators([
        Validators.nullValidator, // set form control validators to null
      ]);
    }
  }

  // Testar se o produto está vencido
  expiredProduct() {
    let data_validade = this.productForm.value.expiration_date;
    let data_fabricação = this.productForm.value.manufacturing_date;
    let expired = false;

    // Comparando a data de validade com a data de fabricação
    if (data_validade && data_fabricação) {
      if (data_validade <= data_fabricação) {
        expired = true;
      }
    }

    return expired;
  }

  // Enviar formulário
  submit() {

    // Retornar caso o produto esteja vencido
    if (this.expiredProduct()) {
      return;
    }

    // Retornar caso haja algum problema de validação    
    if (this.productForm.invalid) {
      console.log('Formulário inválido');
      return;
    }

    this.onSubmit.emit(this.productForm.value);
  }
}
