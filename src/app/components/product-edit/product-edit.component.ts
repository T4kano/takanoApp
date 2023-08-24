import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { MessagesService } from 'src/app/services/messages.service';
import { ProductService } from 'src/app/services/product.service';
import { Product } from 'src/app/Product';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {
  prod!: Product;
  id!: string;
  btnText: string = 'Editar';

  constructor(
    private _Activatedroute:ActivatedRoute,
    private router:Router,
    private productService: ProductService,
    private messageService: MessagesService,
  ) { }

  ngOnInit(): void {
    this.id=this._Activatedroute.snapshot.params['id'];
    let prods=this.productService.getProducts();
    this.prod=prods.find((p: { id: string; }) => p.id==this.id);
    console.log(this.prod);
  }

  updateHandler(product: Product) {
    console.log("Edit")
    if (product) {
      console.log(product)
      this.productService.updateProduct(this.prod,product);
      this.messageService.add('Produto atualizado!');
      this.router.navigate(['/']);
    }
  }

}
