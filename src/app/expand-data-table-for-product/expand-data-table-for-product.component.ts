import { Component, OnInit, Input } from '@angular/core';
import { GetProductsService } from '../get-products.service';
import { Product } from '../Entity/Product';
import { ProductPriceList } from '../Entity/ProductPriceList';
import { PrimeNGConfig } from 'primeng/api';

@Component({
  selector: 'expand-data-table-for-product',
  templateUrl: './expand-data-table-for-product.component.html',
  styleUrls: ['./expand-data-table-for-product.component.css']
})
export class ExpandDataTableForProductComponent implements OnInit {
  
  @Input()
  products !: Product[];
  
  shops !: any[];


  constructor(private api:GetProductsService, private config: PrimeNGConfig) { }

  ngOnInit(): void {
    this.shops = [
      {label: 'X-kom', value: 'X-kom'},
      {label: 'Morele', value: 'Morele'},
      {label: 'Euro', value: 'Euro'}
  ]

  this.config.setTranslation({
    contains: 'Zawiera',
    startsWith: 'Zaczyna się od',
    notContains: 'Nie zawiera',
    endsWith: 'Kończy się na',
    equals: 'Jest równy',
    notEquals: 'Jest różny od',
    noFilter: 'Brak filtra',
    dateIs: 'Data jest równa',
    dateIsNot: 'Data nie jest równa',
    dateBefore: 'Data przed',
    dateAfter: 'Data po',
    lt: 'Mniej niż',
    lte: 'Mniej lub tyle samo',
    gt: 'Więcej niż',
    gte: 'Więcej lub tyle samo'
    
    //translations
});
}

  onProductSelected(product:Product){
    this.api.apiCallProductPriceList(product.id).subscribe((data : ProductPriceList[]) => {
      console.log("get api data" , product.id);
      product.productPriceList = data;
    })
  }


}
