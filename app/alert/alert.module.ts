import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule} from '@angular/router';
import { FormsModule }   from '@angular/forms';
import { HttpModule } from '@angular/http';

import {AlertComponent} from './alert.component';
import { AlertFormComponent } from './alert-form.component';
import{AlertSearchComponent} from './alert-search.component';
import {InstanceFormComponent} from './instance-form.component';
import {AlertCritereService} from './alert-critere.service';
import {AlertSearchService} from './alert-search.service';
import {InstanceService} from './instance.service';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,HttpModule,
    RouterModule.forChild([
      { path: 'alert', component: AlertComponent },
      { path: 'data',  component: AlertFormComponent },
      { path: 'newinstance',  component: InstanceFormComponent }   
    ])
  ],
  //This makes the HeroFormComponent component visible throughout this module.
  declarations: [
    AlertComponent,
    AlertFormComponent,
    AlertSearchComponent,
    InstanceFormComponent
  ],
  exports:[AlertFormComponent],
  providers:[AlertCritereService,AlertSearchService,InstanceService],
  //bootstrap: [ AlertSearchComponent ]
})

export class AlertModule { }


