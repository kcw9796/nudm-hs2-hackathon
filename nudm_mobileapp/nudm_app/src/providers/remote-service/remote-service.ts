import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';


/*
  Generated class for the RemoteServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class RemoteServiceProvider {

  api_url: string = '';

  constructor(public http: HttpClient) {
    
  }

  getVolunteers() {
  	return this.http.get('http://localhost:8000/volunteers/');
  }

  getOpportunities(id) {
    this.api_url = 'http://localhost:8000/opportunities?agency_id='+id;
    console.log(this.api_url);
  	return this.http.get(this.api_url);
  }

  getVolunteer(email) {
  	this.api_url = 'http://localhost:8000/volunteers?email='+email;
  	console.log(this.api_url);
  	return this.http.get(this.api_url);
  }

  getAgency(email) {
  	this.api_url = 'http://localhost:8000/agencies?email='+email;
  	console.log(this.api_url);
  	return this.http.get(this.api_url);
  }

  getVolunteerOpportunity(id) {
    this.api_url = 'http://localhost:8000/volunteer_opportunity?volunteer_id='+id;
    console.log(this.api_url);
    return this.http.get(this.api_url);
  }

  getOpportunityVolunteer(id) {
    this.api_url = 'http://localhost:8000/opportunity_volunteer?opportunity_id='+id;
    console.log(this.api_url);
    return this.http.get(this.api_url);
  }

  signup_opportunity(opp_id,user_id) {
    var date = new Date();
    var obj = {'opportunity':opp_id,'volunteer':user_id};

    this.http.post("http://localhost:8000/volunteer_opportunity",
    {
        "opportunity": opp_id,
        "volunteer": user_id
    })
    .subscribe(
        (val) => {
            console.log("POST call successful value returned in body", 
                        val);
        },
        response => {
            console.log("POST call in error", response);
        },
        () => {
            console.log("The POST observable is now completed.");
        });
  }

}
