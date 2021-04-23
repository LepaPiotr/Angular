import { Component, Input, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { Product } from '../Entity/Product';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent implements OnInit {
  
  @Input()
  product!: Product;
  
  @Input()
  prodIndex!: number;

  @Output("productSelected") //można tutaj nadać nazwe inną niż mienna
  productSelected = new EventEmitter<Product>();

  constructor() { }

  onProductViewed(){
    this.productSelected.emit(this.product);
  }

  ngOnInit(): void {
  }

  isImagaVisable(){
    return this.product 
  }

  onLogoClicked() {
    alert("Hello word");
  }

}
