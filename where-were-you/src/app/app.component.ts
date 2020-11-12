import { Component } from '@angular/core';
import { UserService } from './userService';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'where-were-you';
  us = new UserService();
  isLoggedIn = this.us.getUserLoggedIn();
  constructor(
  ){
    console.log(this.isLoggedIn);
  }

}
