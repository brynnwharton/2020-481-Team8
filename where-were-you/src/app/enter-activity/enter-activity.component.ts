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
    let faceCovering = this.faceCovering ? true : false
    let socialDistancing = this.socialDistancing ? true : false
    let curbside = this.curbside ? true : false
    let time = (document.getElementById("time")as HTMLInputElement).value
    let today = new Date().toISOString().slice(0, 10)
    console.log(location, time, today, faceCovering, socialDistancing, curbside)

  }


}
