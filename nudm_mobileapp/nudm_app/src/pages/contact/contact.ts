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

  constructor(public navCtrl: NavController, public api:RemoteServiceProvider) {
    if(localStorage.getItem("User_type") == "Volunteer") {
      this.volunteer = true;
    }
  }

  ionViewDidEnter() {
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

