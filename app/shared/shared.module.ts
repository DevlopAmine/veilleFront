import { NgModule }  from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule} from '@angular/router';
import { StarComponent } from './star.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MdMenuModule,MdButtonModule,MdIconModule} from '@angular/material';
import {MenuComponent} from './menu.component';
import { Ng2DropdownModule } from 'ng2-material-dropdown';
@NgModule({
  imports: [ CommonModule,BrowserModule,MdMenuModule,MdButtonModule,MdIconModule,BrowserAnimationsModule,
           Ng2DropdownModule,
   /*RouterModule.forChild([
      { path: 'menu', component: MenuComponent },
  
    ])*/
    
    ],
 
  exports : [
    CommonModule,
    FormsModule,
    StarComponent,
    MenuComponent
    
  ],
  declarations: [StarComponent,MenuComponent 
  ]
  ,
})
export class SharedModule { }
