import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Observable } from 'rxjs/Observable';
import { RemoteServiceProvider } from '../../providers/remote-service/remote-service';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {
 
  volunteers: any[];
  opportunities: any[];
  volunteer:bool = false;
  login:bool = false;

  constructor(public navCtrl: NavController, public api:RemoteServiceProvider) {
    
  }

  ionViewDidEnter() {
    this.volunteer = this.api.getVolunteerBool();
    this.login = this.api.getLoginBool();
    console.log(this.volunteer);
    this.fill_data();
  }
  
  fill_data() {
  	if(this.volunteer) {
	  	this.api.getOpportunities().subscribe(
	    	(data:any[]) => {
	    	if(data.length) {
	    		this.opportunities = data;
	    		console.log(this.opportunities);
	    	}
	    });
  	}
  	else {
	  	this.api.getVolunteers().subscribe(
	    	(data:any[]) => {
	    	if(data.length) {
	    		this.volunteers = data;
	    		console.log(this.volunteers);
	    	}
	    });
  	}
    
  }

}

