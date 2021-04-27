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

  apiCallProduct(){
    return this.http.get<Product[]>('http://localhost:8080/product');
  }
  apiCallProductPriceList(id: string){
    return this.http.get<ProductPriceList[]>('http://localhost:8080/productPriceList/id/' + id);
  }
  apiPostFindPhraze(phraze: string){
    console.log("wyszukuje frazę ", phraze)
    console.log("http://localhost:8080/find/'" + phraze)
    return this.http.post('http://localhost:8080/find/' + phraze , undefined)
  }
}
