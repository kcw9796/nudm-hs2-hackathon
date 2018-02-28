import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { RemoteServiceProvider } from '../../providers/remote-service/remote-service';
import { TabsPage } from '../tabs/tabs';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  entity: any;
  volunteer: bool = false;

  constructor(public navCtrl: NavController, public navParams: NavParams, public api:RemoteServiceProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  onNameKeyUp(event:any) {
  	this.email = event.target.value;
  }

  getuser() {
  	console.log(this.email);
  	this.api.getVolunteer(this.email).subscribe(
    	(data:any[]) => {
    	if(data.length) {
    		this.entity = data[0];
    		this.login = true;
            this.volunteer = true;
            localStorage.setItem("User_type","Volunteer");
            localStorage.setItem("Entity",JSON.stringify(this.entity));
    	    console.log(this.entity);
    	    this.navCtrl.setRoot(TabsPage,{})
    	}
    	else {
	    	this.api.getAgency(this.email).subscribe(
	    	(data:any[]) => {
	    	if(data.length) {
	    		this.entity = data[0];
	    		this.login = true;
	    		this.volunteer = false;
	            localStorage.setItem("User_type","Agency");
              localStorage.setItem("Entity",JSON.stringify(this.entity));
		        console.log(this.entity);
		        this.navCtrl.setRoot(TabsPage,{})
	    	}
    		})
    	}
    });
  } 

}
