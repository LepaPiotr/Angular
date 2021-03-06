 import{ProductPriceList} from './ProductPriceList'

export interface Product {
    id: string;
    name: string;
    shop: string;
    dateOfActualization: Date;
    lastKnowPrice: number;
    productPriceList: ProductPriceList[]
    link: string;
  }