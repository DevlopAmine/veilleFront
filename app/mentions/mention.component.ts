import { Component, OnInit } from '@angular/core';
import { Mention } from './mention';
import {MentionService} from './mention.service';
import { Router,Routes,ActivatedRoute,Params } from '@angular/router';
import {Alert} from '../alert/alert';
@Component({
  selector:'mentions',
  templateUrl: 'app/mentions/mentions.component.html',
  styleUrls: [ 'app/mentions/mentions.component.css' ]
    /*template: `<h1>{{title}}</h1>
                <table class="table responsive">
                    <tr>
                        <th>Ids</th>
                        <th>Text</th>
                        <th>Link</th> 
                        
                    </tr>
                    <tr *ngFor="let mention of mentions">
                        <td>{{mention.ids}}</td>
                        <td>{{mention.text}}</td>
                        <td>{{mention.link}}</td>
                    </tr>
                </table>`*/
})

export class MentionComponent  implements OnInit
{
   
   title = 'Les Mentions';
   public mentions : Mention[];
   selectedMention: Mention;
   selectedAlert:boolean=false;
   constructor(private router: Router,private mentionService: MentionService,private route: ActivatedRoute) 
   {}
      /*getMentions(): void {
        //this.heroes = this.heroService.getHeroes();
        this.mentionService.getMentions().then(mentions => this.mentions = mentions);//Act on Promise
      }*/
      
getMentions() {
        this.mentionService.getMentions()
           .subscribe(res=>{
            this.mentions=res;
            console.log(this.mentions); // make sure you get data here.
         },
         (err)=>console.log(err),
         ()=>console.log("Done")
         );
 }
     
    ngOnInit(): void {
       //this.getMentions();
       
    }
    anotherfunct(page:any):void
    {
        this.selectedAlert=true;
 this.mentionService._getMentions(page)
      .subscribe(ms =>
      {
            this.mentions = ms;
            console.log(ms); // make sure you get data here.
         });
      
    }

    onSelect(mention: Mention): void {
      this.selectedMention = mention;
      
    }

    gotoDetail():void
    {
     this.router.navigate(['/mention', this.selectedMention.ids]);
    }
    
}
