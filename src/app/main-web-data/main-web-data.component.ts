import { Component, OnInit, Input } from '@angular/core';
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
  searchPhraze!: string;


  constructor(private api:GetProductsService) { }

  ngOnInit(): void {
      this.api.apiCallProduct().subscribe((data : Product[]) => {
        console.log("get api data" , data);
        this.products = data;

        this.products.forEach(
          product => (product.dateOfActualization = new Date(product.dateOfActualization))
        );
      })
    }



    onSearchPhraze(){
      this.api.apiPostFindPhraze(this.searchPhraze).subscribe();
    }

    
  onProductSelected(product:Product){
    this.api.apiCallProductPriceList(product.id).subscribe((data : ProductPriceList[]) => {
      console.log("get api data" , product.id);
      product.productPriceList = data;
    })
  }
  }

