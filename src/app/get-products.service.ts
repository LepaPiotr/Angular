import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from './Entity/Product';
import { ProductPriceList } from './Entity/ProductPriceList';

@Injectable({
  providedIn: 'root'
})
export class GetProductsService {

  constructor(
    private http:HttpClient
  ) { }

  apiCallProduct(phraze: string){
    console.log('phare jest rowne ' , phraze);
    if(phraze != undefined){
      return this.http.get<Product[]>('http://localhost:8080/product/name/' + phraze);
    }
    else{
      return this.http.get<Product[]>('http://localhost:8080/product');
    }
  }
  apiCallProductPriceList(id: string){
    return this.http.get<ProductPriceList[]>('http://localhost:8080/productPriceList/id/' + id);
  }
  apiPostFindPhraze(phraze: string){
    if(phraze != undefined && phraze.trim() != ""){
    console.log("http://localhost:8080/find/'" + phraze)
    return this.http.post('http://localhost:8080/find/' + phraze , undefined)
    }
    else
   return this.http.post('http://localhost:8080/find/' , undefined);
  }
}
