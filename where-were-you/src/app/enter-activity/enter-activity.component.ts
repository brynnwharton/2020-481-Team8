import { Component, OnInit } from '@angular/core';
import { UserService } from '../userService';
import { ApiService } from '../api.service';


@Component({
  selector: 'app-enter-activity',
  templateUrl: './enter-activity.component.html',
  styleUrls: ['./enter-activity.component.css']
})
export class EnterActivityComponent implements OnInit {

  faceCovering : boolean;
  socialDistancing : boolean;
  curbside : boolean;

  us = new UserService();
  activity = new activity();

  data: any;

  constructor(
    private dataService: ApiService
  ) {
  }

  ngOnInit(): void {
  }

  submitButtonClicked(){
    let location = (document.getElementById("location")as HTMLInputElement).value
    let faceCovering = this.faceCovering ? 1 : 0
    let socialDistancing = this.socialDistancing ? 1 : 0
    let curbside = this.curbside ? 1 : 0
    let time = (document.getElementById("time")as HTMLInputElement).value
    let today = new Date().toISOString().slice(0, 10)
    let date = time + " " + today
    console.log(location, time, today, faceCovering, socialDistancing, curbside)

    this.activity.email = this.us.getEmail();
    this.activity.location = location;
    this.activity.time = date;
    this.activity.FC = faceCovering;
    this.activity.SD = socialDistancing;
    this.activity.CP = curbside;

    this.dataService.postActivity(this.activity).subscribe(res => {
      this.data = res;
    });

  }


}

export class activity{
  email: any;
  location: any;
  time: any;
  FC: any;
  SD: any;
  CP: any;
}
