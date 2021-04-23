import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { GetProductsService } from '../get-products.service';
import { Product } from '../Entity/Product';
import { TableModule } from 'primeng/table';


@Component({
  selector: 'app-main-web-data',
  templateUrl: './main-web-data.component.html',
  styleUrls: ['./main-web-data.component.css']
})
export class MainWebDataComponent implements OnInit {
  title = 'first';
  products : Product[] = [];
  product1!: Product;
  product2!: Product;
  product3!: Product;


  constructor(private api:GetProductsService) { }

  ngOnInit(): void {
      this.api.apiCall().subscribe((data : Product[]) => {
        console.log("get api data" , data);
    
        this.products = data;
        // this.product1 = this.products[0];
        // this.product2 = this.products[1];
        // this.product3 = this.products[2];
    
      })
    }
    onProductSelected(product:Product){

      console.log("zwracam product");
      console.table(product);


    }
  }

