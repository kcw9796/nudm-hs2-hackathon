import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


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

  getOpportunities() {
  	return this.http.get('http://localhost:8000/opportunities/');
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


}
