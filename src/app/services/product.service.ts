import { Injectable } from '@angular/core';
import { Init } from '../components/product-init';

@Injectable({
  providedIn: 'root'
})
export class ProductService extends Init {

  constructor() {
    super();
    console.log('ProductService Works');
    this.load();
  }

  getProducts() {
    let prods = JSON.parse(localStorage.getItem('products') || '{}');
    return prods;
  }
}
