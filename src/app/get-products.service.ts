import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from './Entity/Product';

@Injectable({
  providedIn: 'root'
})
export class GetProductsService {

  constructor(
    private http:HttpClient
  ) { }

  apiCall(){
    return this.http.get<Product[]>('http://localhost:8080/product');
  }
}
