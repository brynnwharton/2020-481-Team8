import { Injectable } from '@angular/core';
import { Console } from 'console';

@Injectable({
  providedIn: 'root'
})
export class UserService {

   public firstname;
   public lastname;
   public address;
   public city;
   public state;
   public zipcode;
   public email;

  public isUserLoggedIn;
  public matricula;
  constructor() {
    
  }

  setUserLoggedIn() {
    this.isUserLoggedIn = true;
    sessionStorage.setItem('login',this.isUserLoggedIn);
  }
  getUserLoggedIn() {
    return (sessionStorage.getItem('login') != null ? sessionStorage.getItem('login') : false);
  }
  setUserLoggedOut() {
    this.isUserLoggedIn = false;
    this.firstname = '';
    this.lastname = '';
    this.address = '';
    this.city = '';
    this.state = '';
    this.zipcode = '';
    this.email = '';
    sessionStorage.setItem('login',this.isUserLoggedIn);
    sessionStorage.setItem('firstname', this.firstname);
    sessionStorage.setItem('lastname', this.lastname);
    sessionStorage.setItem('address', this.address);
    sessionStorage.setItem('city', this.city);
    sessionStorage.setItem('state', this.state);
    sessionStorage.setItem('zipcode', this.zipcode);
    sessionStorage.setItem('email', this.email);
  }

  setFirstName(fname){
    this.firstname = fname;
    sessionStorage.setItem('firstname', this.firstname);
  }

  getFirstName(){
    return (sessionStorage.getItem('login') != null ? sessionStorage.getItem('firstname') : '');
  }

  setLastName(lname){
    this.lastname = lname;
    sessionStorage.setItem('lastname', this.lastname);
  }

  getLastName(){
    return (sessionStorage.getItem('login') != null ? sessionStorage.getItem('lastname') : '');
  }

  setAddress(address){
    this.address = address;
    sessionStorage.setItem('address', this.address);
  }

  getAddress(){
    return (sessionStorage.getItem('login') != null ? sessionStorage.getItem('address') : '');
  }

  setCity(city){
    this.city = city;
    sessionStorage.setItem('city', this.city);
  }

  getCity(){
    return (sessionStorage.getItem('login') != null ? sessionStorage.getItem('city') : '');
  }

  setState(state){
    this.state = state;
    sessionStorage.setItem('state', this.state);
  }

  getState(){
    return (sessionStorage.getItem('login') != null ? sessionStorage.getItem('state') : '');
  }

  setZip(zip){
    this.zipcode = zip;
    sessionStorage.setItem('zipcode', this.zipcode);
  }

  getZip(){
    return (sessionStorage.getItem('login') != null ? sessionStorage.getItem('zipcode') : '');
  }

  setEmail(email){
    this.email = email;
    sessionStorage.setItem('email', this.email);
  }

  getEmail(){
    return (sessionStorage.getItem('login') != null ? sessionStorage.getItem('email') : '');
  }
}