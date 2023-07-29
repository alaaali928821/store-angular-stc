import { Component } from '@angular/core';
import { Product } from 'src/app/core/models/product.modal';
import { ProductServiceService } from 'src/app/core/services/product-service.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent {

  allProducts!: Product[];
  constructor(public productService: ProductServiceService){}

  ngOnInit(){
    this.productService
      .getProducts()
      .subscribe((data) => {
        this.allProducts = data;
      });
  }
}
