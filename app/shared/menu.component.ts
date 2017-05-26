import {Component,Input,Output,EventEmitter} from '@angular/core';
import { Router } from '@angular/router';
@Component
({
selector:'menu',
templateUrl:'app/shared/menu.component.html',
styles :[
 `.selected {
  background-color: #CFD8DC !important;
  color: white;
}`]

})

export class MenuComponent
{

//@Input() 
page:string;
selectedPage: string;
private pages:Array<string>=["summer","Jacket","three"];

constructor( private router: Router){
console.log("fine");
}
/*onSelect(p: string): void {
    this.selectedPage = p;
    this.router.navigate(['/alert', this.selectedPage]);
  }*/

getValueFromSelect(value:any)
{  console.log(value+"heyy");
}

 @Output() 
 myEvent = new EventEmitter();

  onSelect(p: string){
    this.selectedPage = p;
    this.myEvent.emit(this.selectedPage);
  }



}