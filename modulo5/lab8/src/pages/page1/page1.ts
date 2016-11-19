import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import { Page2 } from '../page2/page2';
import { Page3 } from '../page3/page3';

@Component({
  selector: 'page-page1',
  templateUrl: 'page1.html'
})
export class Page1 {

  selected:any = false;	

  constructor(public navCtrl: NavController) {
    
  }

  loadPage2() {
  	this.navCtrl.push(Page2);
  }

  loadPage3() {
  	this.navCtrl.push(Page3);
  }

}
