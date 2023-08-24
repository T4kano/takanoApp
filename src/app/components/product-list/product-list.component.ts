import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { MessagesService } from 'src/app/services/messages.service';


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  prods: any;

  constructor(
    private productService: ProductService,
    private messageService: MessagesService,
    ) {}

  ngOnInit(): void {
    this.prods = this.productService.getProducts();
  }

  deleteProduct(id: string) {
    for(let i = 0; i < this.prods.length; i++) {
      if(this.prods[i].id == id) {
          this.prods.splice(i, 1);
      }
    }

    try {
      this.productService.deleteProduct(id);
      this.messageService.add("Produto deletado com sucesso!");
    } catch(err) {
      console.log(err);
    }
  }
}
