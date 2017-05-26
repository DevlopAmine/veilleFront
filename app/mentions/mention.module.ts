import { NgModule } from '@angular/core';
import { RouterModule} from '@angular/router';
import {MentionComponent} from './mention.component';
import { MentionService } from './mention.service';
import {AlertModule} from '../alert/alert.module';
import {BrowserModule} from '@angular/platform-browser';
//import { HttpModule } from '@angular/http';
import {MentionDetailComponent} from './mention-detail.component';
import{SharedModule} from '../shared/shared.module';
import {MenuComponent} from '../shared/menu.component';


@NgModule({
  imports: [
    AlertModule,
    BrowserModule,
    SharedModule,
    RouterModule.forChild([
      { path: 'mentions', component: MentionComponent },
      { path: 'mention/:ids',
          component: MentionComponent
      },
       {path: 'alert/:page', component: MentionComponent}
    ])
  ],
  declarations: [
    MentionComponent,MentionDetailComponent,
  ],
  providers: [
    MentionService,
  ],
  bootstrap: [MentionComponent]
  
})
export class MentionModule {}
