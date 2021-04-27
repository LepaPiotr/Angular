import { Component, OnInit, Input } from '@angular/core';
import { GetProductsService } from '../get-products.service';
import { Product } from '../Entity/Product';
import { ProductPriceList } from '../Entity/ProductPriceList';

@Component({
  selector: 'expand-data-table-for-product',
  templateUrl: './expand-data-table-for-product.component.html',
  styleUrls: ['./expand-data-table-for-product.component.css']
})
export class ExpandDataTableForProductComponent implements OnInit {
  
  @Input()
  products !: Product[];


  constructor(private api:GetProductsService) { }

  ngOnInit(): void {
  }

  onProductSelected(product:Product){
    this.api.apiCallProductPriceList(product.id).subscribe((data : ProductPriceList[]) => {
      console.log("get api data" , product.id);
      product.productPriceList = data;
    })
  }

}
