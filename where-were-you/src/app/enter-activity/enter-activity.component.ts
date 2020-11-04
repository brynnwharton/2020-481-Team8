import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-enter-activity',
  templateUrl: './enter-activity.component.html',
  styleUrls: ['./enter-activity.component.css']
})
export class EnterActivityComponent implements OnInit {

  faceCovering : boolean;
  socialDistancing : boolean;
  curbside : boolean;

  constructor() {
  }

  ngOnInit(): void {
  }

  submitButtonClicked(){
    let location = (document.getElementById("location")as HTMLInputElement).value
    let faceCovering = this.faceCovering
    let socialDistancing = this.socialDistancing
    let curbside = this.curbside
    let time = (document.getElementById("time")as HTMLInputElement).value
    console.log(location, time, faceCovering, socialDistancing, curbside)

  }


}
