import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { v4 as uuidv4 } from 'uuid';

import { MessagesService } from 'src/app/services/messages.service';
import { ProductService } from 'src/app/services/product.service';

import { Product } from 'src/app/Product';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css'],
})
export class ProductCreateComponent implements OnInit {
  btnText = 'Cadastrar';

  prods: ProductService | any;

  constructor(
    private productService: ProductService,
    private messageService: MessagesService,
    private router: Router,
  ) {}

  ngOnInit(): void {
    this.prods = this.productService.getProducts();
  }

  // Create Product
  createHandler(product: Product) {

    if (product) {
      // console.log(product);

      let newProduct = {
        id: uuidv4(),
        name: product.name,
        unit: product.unit,
        quantity: product.quantity,
        price: product.price,
        expiration_date: product.expiration_date,
        manufacturing_date: product.manufacturing_date,
        perishable: product.perishable,
      };

      try {
        this.prods.push(newProduct);
        this.productService.addProduct(newProduct);
        this.messageService.add('Produto cadastrado com sucesso!')
        this.router.navigate(['/']); // Redirect to home
      } catch (err) {
        console.log(err);
      }

    } else {
      console.log('Erro!');
    }
  }
}
