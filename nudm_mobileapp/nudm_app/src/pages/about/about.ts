import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

  volunteer:bool = false;
  login:bool = false;

  constructor(public navCtrl: NavController) {

  }

}
