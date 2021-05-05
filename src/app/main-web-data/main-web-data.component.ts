import { Component, OnInit, Input } from '@angular/core';
import { GetProductsService } from '../get-products.service';
import { Product } from '../Entity/Product';
import { ProductPriceList } from '../Entity/ProductPriceList';
import { ActivatedRoute } from '@angular/router';



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


  constructor(private api:GetProductsService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    let name = this.route.snapshot.params.name;
    console.log('name in main component' , name)
      this.api.apiCallProduct(name).subscribe((data : Product[]) => {
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

