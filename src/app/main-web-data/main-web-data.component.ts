import { Component, OnInit, Input } from '@angular/core';
import { GetProductsService } from '../get-products.service';
import { Product } from '../Entity/Product';
import { ProductPriceList } from '../Entity/ProductPriceList';
import { ActivatedRoute, Router } from '@angular/router';



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
  name!: string;

  constructor(private api:GetProductsService, private route: ActivatedRoute, private router:Router) { }

  ngOnInit(): void {
    this.name = this.route.snapshot.params.name;
      this.api.apiCallProduct(this.name).subscribe((data : Product[]) => {
        console.log("get api data" , data);
        this.products = data;

        this.products.forEach(
          product => (product.dateOfActualization = new Date(product.dateOfActualization))
        );
      })
    }



    onSearchPhraze(){
      this.api.apiPostFindPhraze(this.searchPhraze).subscribe();
      this.api.apiCallProduct(this.searchPhraze).subscribe((data : Product[]) => {
        console.log("get api data" , data);
        this.products = data;

        this.products.forEach(
          product => (product.dateOfActualization = new Date(product.dateOfActualization))
        );
      })
      this.router.navigateByUrl("search/" + this.searchPhraze);
    }

    
  onProductSelected(product:Product){
    this.api.apiCallProductPriceList(product.id).subscribe((data : ProductPriceList[]) => {
      console.log("get api data" , product.id);
      product.productPriceList = data;
    })
  }


  }

