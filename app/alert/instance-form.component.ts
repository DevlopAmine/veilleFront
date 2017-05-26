import {Component} from '@angular/core';
import { Location }               from '@angular/common';
import {Instance} from './instance';
import{InstanceService} from './instance.service';
@Component({
selector:'newInstance',
template:`
<form #instanceForm="ngForm" (ngSubmit)="onSubmit()" class="form-inline">
  <div class="form-group">
    <label class="sr-only" for="instance">Nom de l'instance</label>
    <input type="text" class="form-control" id="descI" name="descI"
     [(ngModel)]="model.descI" placeholder="Nom de l'instance">
  </div>
  <div class="form-group">
    <label class="sr-only" for="Id">Id</label>
    <input type="text" class="form-control" id="customer_id"  name="customer_id"
    [(ngModel)]="model.customer_id" placeholder="Votre Id ">
  </div>

  <button class="btn btn-info" (click)="goBack()">Back</button>
  <button type="submit" class="btn btn-default">Valider</button>
</form>`,
providers:[InstanceService]

})



export class InstanceFormComponent
{
 private model :Instance=new Instance("","");
 private errorMessage: string='';
 constructor(private location:Location,private instanceService:InstanceService)
 {

 }

 onSubmit() { 
    
    console.log(this.model.descI+" "+this.model.customer_id); 
    this.add(new Instance(this.model.descI,this.model.customer_id));
  }

  add(instance: Instance) {
    if (!instance) { return; }
    
    this.instanceService.creat(instance)
                     .subscribe(
                       error =>  this.errorMessage = <any>error,
                       log=> console.log(instance))
                       ;
  }
 goBack(): void {
    this.location.back();
  }

}