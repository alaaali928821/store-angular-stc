import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../models/product.modal';

@Injectable({
  providedIn: 'root',
})
export class ProductServiceService {
  baseURL: string = 'https://fakestoreapi.com/products'
  constructor(private http: HttpClient) {}

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.baseURL);
  }

  getProductById(productId: number): Observable<Product> {
    return this.http.get<Product>(
      `${this.baseURL}/${productId}`
    );
  }

  getCategories(): Observable<string[]> {
    return this.http.get<string[]>(
      `${this.baseURL}/categories`
    );
  }

  addProduct(product: Product): Observable<any> {
    return this.http.post<any>(this.baseURL, product);
  }

  updateProduct(product: Product): Observable<any> {
    return this.http.put<any>(this.baseURL, product);
  }

  deleteProduct(productId: number): Observable<any> {
    return this.http.delete<Product>(
      `${this.baseURL}/${productId}`
    );
  }
}
