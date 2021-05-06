import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MainWebDataComponent } from '../app/main-web-data/main-web-data.component';

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
// export const routingComponets = [MainWebDataComponent]
