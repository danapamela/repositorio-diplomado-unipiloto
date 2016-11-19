import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import  { ListPage } from '../pages/list/list';
import {}


/*
  Generated class for the Service provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class Service {

  constructor(public http: Http) {
    console.log('Hello Service Provider');
  }

  pushPage(){  
  	this.navCtrl.push(ListPage);
  
  }

}
