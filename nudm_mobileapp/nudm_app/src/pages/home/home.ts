import { Component } from '@angular/core';
import { NavController, App } from 'ionic-angular';
import { Observable } from 'rxjs/Observable';
import { RemoteServiceProvider } from '../../providers/remote-service/remote-service';
import { LoginPage } from '../login/login';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  entity: any;
  volunteer: bool = false;

  constructor(public navCtrl: NavController, public api:RemoteServiceProvider, public app:App) {
    if(localStorage.getItem("User_type") == "Volunteer") {
      this.volunteer = true;
    }
    this.entity = JSON.parse(localStorage.getItem("Entity"));
  }

  logout() {
  	localStorage.removeItem("Entity");
  	this.app.getRootNav().setRoot(LoginPage);
  }

}
