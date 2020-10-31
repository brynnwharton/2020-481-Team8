import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

function getActivity(name: string) {
  console.log(name)

  const newRow = document.createElement("tr")
  newRow.className = "row"

  const column1 = document.createElement("td")
  const fig = document.createElement("figure")
  const figCap = document.createElement("figcaption")
  figCap.textContent = name

  const newImg = document.createElement("img")
  newImg.src = "../../assets/img/blankAvatar.jpg"
  newImg.className = "avatar"
  newImg.setAttribute("style", "height: 20px")
  newRow.appendChild(newImg)

  fig.appendChild(newImg)
  fig.appendChild(figCap)
  column1.appendChild(fig)

  newRow.appendChild(column1)

  const column2 = document.createElement("td")
  const location = document.createElement("p")
  location.textContent = "the store"
  column2.appendChild(location)

  newRow.appendChild(column2)

  return newRow
}

@Component({
  selector: 'app-activity-feed',
  templateUrl: './activity-feed.component.html',
  styleUrls: ['./activity-feed.component.css']
})
export class ActivityFeedComponent implements OnInit {
  public $data: any;
  public $state:any;

  constructor(
    private dataService: ApiService
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
    //this.$state = $event["state-abbr"];
    this.$data.forEach(function(state){
      if(state["state"] == $event["state-abbr"]){
        console.log(state);
      }
    })
  }

}
