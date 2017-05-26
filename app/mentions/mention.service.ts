import { Injectable } from '@angular/core';
import { Mention } from './mention';
import { Headers, Http,Response } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { Observable }     from 'rxjs/Observable';
import 'rxjs/add/operator/map';


@Injectable()
export class MentionService 
{
  private mentionsUrl = 'http://localhost:8080/view/mentions';  // URL to web api
  private headers = new Headers({'Content-Type': 'application/json'});
  constructor(private http: Http) { }
  
  
/*getMentions(): Promise<Mention[]> {
    return this.http.get(this.mentionsUrl)
               .toPromise()
               .then(response => response.json().data as Mention[])
               .catch(this.handleError);
  }
 
  }*/
 getMentions() {
        return this.http.get(this.mentionsUrl)
            .map(res => <Mention[]>res.json())
            .catch(this.handleError);
    }

private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
   _getMentions(page: string): Observable<Mention[]> {
    const url = `${this.mentionsUrl}/${page}`;
    return this.http.get(url)
      .map(res => <Mention[]>res.json());
  }
  
  /*
getMention(ids: string): Promise<Mention> {
  return this.getMentions()
             .then(mentions => mentions.find(mention => mention.ids === ids));
}*/

}
