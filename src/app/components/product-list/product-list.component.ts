import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  prods: any;

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.prods = this.productService.getProducts();
    this.prods.unity
  }
}
