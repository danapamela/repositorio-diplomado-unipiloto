import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import {Observable} from 'rxjs/Rx';
import { Page2 } from '../pages/page2/page2';
import { Page3 } from '../pages/page3/page3';


/*
  Generated class for the Service provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class Service {
	

	private servicesURI = 'http://138.68.0.83:7070';
	private headers = new Headers({'Content-Type': 'application/json'});

  constructor(private http: Http) { }

  getClients(): Observable<Page2[]> {
        return this.http.get(`${this.servicesURI}/api/v1/user/list`)
            .map(response => response.json() as Page2[])
            .catch(this.handleError);
    }


 
    getProducts(): Observable<Page3[]> {
        return this.http.get(`${this.servicesURI}/api/v1/product/list`)
            .map(response => response.json() as Page3[])
            .catch(this.handleError);
    }

 } 