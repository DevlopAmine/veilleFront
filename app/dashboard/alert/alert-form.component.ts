import { Component,Input,OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Alert }    from './alert';
import {FormControl,FormGroup} from '@angular/forms';
import {Router} from '@angular/router';
import {Instance} from './instance';
import {AlertCritereService} from './alert-critere.service';
import {AlertSearchService} from './alert-search.service';
import {FBService} from '../fbSection/fb.service';
import {FBpage} from '../fbSection/fbPage';

import { Observable }        from 'rxjs/Observable';
import {NotificationsComponent} from '../notifications/notifications.component';
import {DialogOverviewExample} from './tstFiles/dialog-tst.component';

@Component({
  selector: 'alert-form',
  templateUrl: 'app/dashboard/alert/alert-form.component.html',
  styleUrls: ['app/dashboard/alert/alert-form.component.css'],
  entryComponents:[NotificationsComponent,DialogOverviewExample],
  
  providers : [AlertCritereService,AlertSearchService,FBService]
})
export class AlertFormComponent  implements OnInit{
 
  
  private instances: Instance[];
  private errorMessage: string='';
  alert:FormGroup = new FormGroup({});
  goodNotif:boolean=false;
  badNotif:boolean=false;
  isLoading = false;
  private username:any;
  pages:FBpage[]=[];
  filtredPages:any;
  
  constructor( private alertCritereService: AlertCritereService,private alertSearchService:AlertSearchService,
  private router: Router,private _fbService:FBService)
  {   
    let user = JSON.parse(localStorage.getItem('currentUser'));
    this.username = user.username;
    
  }
  
    filterPages(val: string) {
    return val ? this.pages.filter(s => s.pageName.toLowerCase().indexOf(val.toLowerCase()) === 0)
               : this.pages;
  }

  ngOnInit() { 
 
    
      console.log("hyyyyyyy  "+this.username);
     this.alert = new FormGroup({
      descA: new FormControl(''),
      descI: new FormControl(''),
      optKeywords: new FormControl(''),
      forbidenKeywords: new FormControl(''),
      srcAutorises: new FormControl(''),
      srcBloques: new FormControl(''),
      langue: new FormControl(''),
      srcAutorisesTw:new FormControl(''), 
      srcBloquesTw:new FormControl(''),
      
      fbPage : new FormControl('')

    });

    this.getPages();

     this.filtredPages = this.alert.get('fbPage').valueChanges
        .startWith(null)
        .map(name => this.filterPages(name));
      this.getInstances();
      console.log(this.instances);
}
 
  
    getInstances() {
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
    let tst:boolean;
    console.log(this.alert.value,this.alert.status); 
   this.add(this.alert.value);
    

  }
add(alert: Alert) :void 
{

    if (!alert) { return; }
    this.isLoading =true;
    this.alertCritereService.creat(alert)
                     .subscribe( () =>{this.isLoading=false;this.goodNotif =true;},
                       error =>  {
                         this.badNotif = true;
                        },
                       ()=>
                       { this.isLoading=false;console.log(alert);  
                      } );

  }

  getPages() {
        this._fbService._getFbPages()
           .subscribe(res=>{
            this.pages=res;
            console.log(this.pages); // make sure you get data here.
         },
         (err)=>console.log(err),
         ()=>console.log("Done")
         );
 } 

  openCustom():void
  {
     this.router.navigate(['/newinstance']);
  }

  
 get  registerData()
  {
    return null;
     // return JSON.stringify(this.model);
  }
  
 onEvent(event) {
   event.stopPropagation();
}
}
