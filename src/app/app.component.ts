import { Component, ComponentFactory, ElementRef } from '@angular/core';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'first';
constructor(private elementRef: ElementRef){
}
ngAfterViewInit(){
  this.elementRef.nativeElement.ownerDocument.body.style.backgroundColor = '#191919';
}
  keyUp(val:string){
    this.title = val;
  }

}
