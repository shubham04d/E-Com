import { Component, OnInit } from '@angular/core';
import { product } from '../ProductInterface';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent implements OnInit {
  constructor(private productService: ProductService) {}

  all_products!: product['products'];

  ngOnInit(): void {
    this.productService
      .getAllProducts()
      .subscribe((data) => (this.all_products = data.products));
  }
}
