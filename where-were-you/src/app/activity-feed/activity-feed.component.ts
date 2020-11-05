import { useAnimation } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { DialogCovidComponent } from '../dialog-covid/dialog-covid.component';

function getActivity(name: string) {
  const newRow = document.createElement("tr")
  newRow.className = "row"

  const column1 = document.createElement("td")
  const pName = document.createElement("p")
  pName.textContent = name
  column1.appendChild(pName)

  newRow.appendChild(column1)

  const column2 = document.createElement("td")
  const location = document.createElement("p")
  location.textContent = "the store"
  column2.appendChild(location)

  newRow.appendChild(column2)

  return newRow
}
import { LoginComponent } from 'src/app/login/login.component';
import { UserService } from '../userService';

@Component({
  selector: 'app-activity-feed',
  templateUrl: './activity-feed.component.html',
  styleUrls: ['./activity-feed.component.css']
})
export class ActivityFeedComponent implements OnInit {
  public $data: any;
  public $state:any;
  public $detail:any;

  us = new UserService();

  isLoggedIn = this.us.getUserLoggedIn();

  constructor(
    private dataService: ApiService,
    public dialog: MatDialog,
  ) {}

  ngOnInit(): void {
    let friendsList = ["sally", "bob", "bryan", "joe", "sarah"]
    friendsList.forEach((value)=>{
      let tableBody = document.getElementById("body")
      let newRow = getActivity(value)
      tableBody.appendChild(newRow)
    }),
    this.getdataCovid()

  }

  getdataCovid(){
    this.dataService.getCovidData().subscribe((Response:any)=>{
      this.$data = Response;
    });
  }

  usMapClick($event){
    this.$state = $event["state-abbr"];
    var dat;
    this.$data.forEach(function(state){
      if(state["state"] == $event["state-abbr"]){
        console.log(state);
        dat = state;
      }
    })
    this.$detail = dat;
    this.openDialog(this.$detail);
  }
  openDialog(detail){
    this.dialog.open(DialogCovidComponent,
      { data:
        {
          state: detail["state"],
          total: detail["totalTestResults"],
          Positive: detail["positive"],
          recovered: detail["recovered"],
          death: detail["death"]

        }

      });
  }
}
