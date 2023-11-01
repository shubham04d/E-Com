import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { product } from './ProductInterface';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor(private httpClient: HttpClient) {}

  getAllProducts() {
    return this.httpClient.get<product>('https://dummyjson.com/products');
  }
}
  