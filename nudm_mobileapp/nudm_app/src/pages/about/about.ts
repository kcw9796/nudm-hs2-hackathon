import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { RemoteServiceProvider } from '../../providers/remote-service/remote-service';
import { AlertController } from 'ionic-angular';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

  id: any;
  volunteer:bool = false;
  matches: any[] = [];
  opportunities: any[] = [];

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
  		this.api.getVolunteerOpportunity(this.id).subscribe(
	    	(data:any[]) => {
	    	if(data.length) {
	    		this.matches = data;
	    		console.log(this.matches);
	    	}
	    });
  	}
  	else {
  		this.api.getOpportunities(this.id).subscribe(
	    	(data:any[]) => {
	    	if(data.length) {
	    		this.opportunities = data;
	    		for (var index in this.opportunities) {
	    			console.log(this.opportunities[index].id)
	    			this.api.getOpportunityVolunteer(this.opportunities[index].id).subscribe(
	    				(data:any[]) => {
	    				if(data.length) {
	    					this.matches = data;
	    					console.log(this.matches);
	    				}
	    			});
	    		}
	    	}
	    });
  	}
  }

  remove_opp_card(opportunity_id) {
    let alert = this.alertCtrl.create({
      title: 'Removed',
      subTitle: 'This opportunity has been removed from your matches',
      buttons: ['OK']
    });
    alert.present();
    document.getElementById(opportunity_id).style.display = 'none';
  }

  remove_vol_card(volunteer_id) {
    let alert = this.alertCtrl.create({
      title: 'Removed',
      subTitle: 'This volunteer has been removed from your matches',
      buttons: ['OK']
    });
    alert.present();
    document.getElementById(volunteer_id).style.display = 'none';
  }

}
