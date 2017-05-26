import { Injectable }    from '@angular/core';
import { Headers, Http,RequestOptions,Response  } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

//import 'rxjs/add/operator/toPromise';

import { Alert } from './alert';
import {Instance} from './instance';

@Injectable()
export class AlertCritereService {

  private headers = new Headers({'Content-Type': 'application/json'});
  private baseUrl = 'http://localhost:8080/it/';  // URL to web api
  private viewUrl = 'http://localhost:8080/view/';
  constructor(private http: Http) { }



    creat(alert: Alert): Observable<Alert> {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });

    return this.http.post(this.baseUrl+'critereAlt', JSON.stringify(alert), options)
                    .map(this.extractData)
                    .catch(this.handleError);
  }

  private extractData(res: Response) {
    let body = res.json();
    return body.data || { };
  }
  
 
  getData():Observable<String[]> {
    return this.http.get(this.viewUrl+`instCost`)
        .map(this.extractData)
        .catch(this.handleError);
}

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}

