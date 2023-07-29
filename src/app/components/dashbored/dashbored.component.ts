import { Component, ViewChild } from '@angular/core';
import { Product } from 'src/app/core/models/product.modal';
import { ProductServiceService } from 'src/app/core/services/product-service.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
@Component({
  selector: 'app-dashbored',
  templateUrl: './dashbored.component.html',
  styleUrls: ['./dashbored.component.scss']
})
export class DashboredComponent {
  @ViewChild(MatPaginator, { static: true }) paginator!: MatPaginator;


  constructor(public productService: ProductServiceService) { }
  allProducts!: MatTableDataSource<Product>;
  loading!: boolean;
  displayedColumns: string[] = ['name', 'id', 'price', 'category', 'delete'];

  ngAfterViewInit() {
    this.loading = true;
    this.productService
      .getProducts()
      .subscribe((data) => {
        this.allProducts = new MatTableDataSource<Product>(data);
        this.allProducts.paginator = this.paginator;
        this.loading = false;
      });
  }


  deleteItem(product: Product){
    this.productService
      .deleteProduct(product.id)
      .subscribe(() => {
        alert('Item Deleted')
        this.removeProduct(product)
      });

  }

  removeProduct(product: Product): void {
    const index = this.allProducts.data.indexOf(product);
    if (index !== -1) {
      this.allProducts.data.splice(index, 1);
      this.allProducts._updateChangeSubscription();
    }
  }
  
}


