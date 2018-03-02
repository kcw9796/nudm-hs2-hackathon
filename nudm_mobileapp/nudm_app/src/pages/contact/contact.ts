import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Observable } from 'rxjs/Observable';
import { RemoteServiceProvider } from '../../providers/remote-service/remote-service';
import { AlertController } from 'ionic-angular';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {
 
  volunteers: any[];
  opportunities: any[];
  volunteer:bool = false;
  id:any=0;

  constructor(public navCtrl: NavController, public api:RemoteServiceProvider, public alertCtrl: AlertController) {
    if(localStorage.getItem("User_type") == "Volunteer") {
      this.volunteer = true;
    }
    this.id = JSON.parse(localStorage.getItem("Entity")).id;
  }

  ionViewDidEnter() {
    this.fill_data();
  }
  
  fill_data() {
  	if(this.volunteer) {
	  	this.api.getOpportunities('').subscribe(
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

  signup_opportunity(opportunity_id) {
    this.api.signup_opportunity(opportunity_id,this.id);
    this.remove_opp_card(opportunity_id);
  }

  remove_opp_card(opportunity_id) {
    let alert = this.alertCtrl.create({
      title: 'Signed Up!',
      subTitle: 'You have contacted the agency to confirm your signup!',
      buttons: ['OK']
    });
    alert.present();
    document.getElementById(opportunity_id).style.display = 'none';
  }

  remove_vol_card(volunteer_id) {
    let alert = this.alertCtrl.create({
      title: 'Contact!',
      subTitle: 'You have contacted this volunteer to see if they are interested!',
      buttons: ['OK']
    });
    alert.present();
    document.getElementById(volunteer_id).style.display = 'none';
  }
    


}


