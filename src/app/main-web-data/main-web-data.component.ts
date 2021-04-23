import { Component, OnInit } from '@angular/core';
import { GetProductsService } from '../get-products.service';
import { Product } from '../Entity/Product';
import { ProductPriceList } from '../Entity/ProductPriceList';



@Component({
  selector: 'app-main-web-data',
  templateUrl: './main-web-data.component.html',
  styleUrls: ['./main-web-data.component.css']
})
export class MainWebDataComponent implements OnInit {
  title = 'first';
  products : Product[] = [];
  productsPriceList : ProductPriceList[] = [];


  constructor(private api:GetProductsService) { }

  ngOnInit(): void {
      this.api.apiCallProduct().subscribe((data : Product[]) => {
        console.log("get api data" , data);
        this.products = data;
    
      })
    }
    onProductSelected(product:Product): ProductPriceList[]{
      this.api.apiCallProductPriceList(product.id).subscribe((data : ProductPriceList[]) => {
        console.log("get api data" , product.id);
        this.productsPriceList = data;
      })
      return this.productsPriceList;
    }
  }

