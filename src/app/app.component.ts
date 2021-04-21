import { Component, ComponentFactory } from '@angular/core';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'first';
constructor(){
}
  keyUp(val:string){
    this.title = val;
  }

}
