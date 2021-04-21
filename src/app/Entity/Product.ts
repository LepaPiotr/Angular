import{Company} from './Company'

export interface Product {
    productId: number;
    productName: string;
    productPhotoLink: string;
    productManufacturer: Company;
  }