import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Observable } from 'rxjs/Observable';
import { RemoteServiceProvider } from '../../providers/remote-service/remote-service';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  email:string = '';
  entity: any;
  login: bool = false;
  volunteer: bool = false;

  constructor(public navCtrl: NavController, public api:RemoteServiceProvider) {

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
    		this.api.setLoginBool(true);
    		this.api.setVolunteerBool(true);
    		this.volunteer = true;
    		console.log(this.entity);
    	}
    	else {
	    	this.api.getAgency(this.email).subscribe(
	    	(data:any[]) => {
	    	if(data.length) {
	    		this.entity = data[0];
	    		this.login = true;
	    		this.volunteer = false;
	    		this.api.setLoginBool(true);
    			this.api.setVolunteerBool(false);
	    		console.log(this.entity);
	    	}
    		})
    	}
    });
  } 

  logout() {
  	this.login = false;
  	this.volunteer = null;
  	this.api.setLoginBool(false);
  }

}
