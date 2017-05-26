import { Component,Input,OnInit,ViewContainerRef, ViewEncapsulation } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Alert }    from './alert';
import {Router} from '@angular/router';
import {Instance} from './instance';
import {AlertCritereService} from './alert-critere.service';
import {AlertSearchService} from './alert-search.service';
import { Observable }        from 'rxjs/Observable';


@Component({
  selector: 'alert-form',
  templateUrl: 'app/alert/alert-form.component.html',
  styleUrls: ['app/alert/alert-form.component.css'],
  
  providers : [AlertCritereService,AlertSearchService]
})
export class AlertFormComponent  implements OnInit{
 
  
  private instances: Instance[];
  private errorMessage: string='';
  model :Alert=new Alert("","","","","","","");

  constructor( private alertCritereService: AlertCritereService,private alertSearchService:AlertSearchService,private router: Router){}
    
  ngOnInit() { 
      this.getMentions();
      console.log(this.instances);
}
 
  
    getMentions() {
        this.alertSearchService.getS()
           .subscribe(res=>{
            this.instances=res;
            console.log(this.instances); // make sure you get data here.
         },
         (err)=>console.log(err),
         ()=>console.log("Done")
         );
 }   

  submitted = false;
  onSubmit() { 
    this.submitted = true;
    console.log(this.model.descA+" "+this.model.optKeywords+" "+this.model.forbidenKeywords+" "+
    this.model.srcAutorises+" "+this.model.srcBloques+" "+this.model.langue); 
    this.add(new Alert(this.model.descA,this.model.optKeywords,this.model.forbidenKeywords,
    this.model.srcAutorises,this.model.srcBloques,this.model.langue,this.model.descI));
  }
add(alert: Alert) {
    if (!alert) { return; }
    this.alertCritereService.creat(alert)
                     .subscribe(
                       error =>  this.errorMessage = <any>error,
                       log=> console.log(alert))
                       ;
  }

  openCustom():void
  {
     this.router.navigate(['/newinstance']);
  }

  
 get  registerData()
  {
      return JSON.stringify(this.model);
  }
  

  // TODO: Remove this when we're done
  //get diagnostic() { return JSON.stringify(NgForm); }
}
