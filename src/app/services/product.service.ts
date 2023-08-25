import { Injectable } from '@angular/core';
import { Init } from '../components/product-init';

@Injectable({
  providedIn: 'root',
})
export class ProductService extends Init {
  constructor() {
    super();
    console.log('ProductService Works');
    this.load();
  }

  // List Products
  getProducts() {
    let prods = JSON.parse(localStorage.getItem('products') || '{}');
    return prods;
  }

  // Create Product
  addProduct(newProd: any) {
    let prods = JSON.parse(localStorage.getItem('products') || '{}');
    prods.push(newProd);
    localStorage.setItem('products', JSON.stringify(prods));
  }

  // Delete Product
  deleteProduct(id: string) {
    let prods = JSON.parse(localStorage.getItem('products') || '{}');
    for (let i = 0; i < prods.length; i++) {
      if (prods[i].id == id) {
        prods.splice(i, 1);
      }
    }
    localStorage.setItem('products', JSON.stringify(prods));
  }

  // Update Product
  updateProduct(oldProd: any, newProd: any) {
    let prods = JSON.parse(localStorage.getItem('products') || '{}');

     for(let i = 0; i <prods.length; i++) {
      if(prods[i].id == oldProd.id) {
        prods[i] = newProd;
      }
   }
      localStorage.setItem('products', JSON.stringify(prods));
   }
}
