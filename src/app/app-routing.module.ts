import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AppComponent } from '../app/app.component';
import { MainWebDataComponent } from '../app/main-web-data/main-web-data.component';
import { ExpandDataTableForProductComponent } from '../app/expand-data-table-for-product/expand-data-table-for-product.component';
import { ProductCardComponent } from '../app/product-card/product-card.component';

const routes: Routes = [
  {
      path: '',
      component: MainWebDataComponent
  },
  {
    path: 'search/:name',
    component: MainWebDataComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes),
    CommonModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
