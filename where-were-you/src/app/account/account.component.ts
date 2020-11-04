import { Component, OnInit } from '@angular/core';

function displayAccount(name: string) {
  console.log(name)

  const newDiv = document.createElement("div")
  newDiv.className = "user"

  const username = document.createElement("h3")
  username.textContent = name
  username.setAttribute("style", "text-align: center")
  newDiv.appendChild(username)

  return newDiv
}

function displayActivity(action: string){
  const newDiv = document.createElement("div")

  const activity = document.createElement("p")
  activity.textContent = action
  activity.setAttribute("style", "text-align: center")
  newDiv.appendChild(activity)

  return newDiv
}

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    let name = "Brynn"
    let parentDiv = document.getElementById("accountInfo")
    let newDiv = displayAccount(name)
    parentDiv.appendChild(newDiv)

    let activityList = ["store", "friend's house", "gym", "mom's house", "gym"]
    activityList.forEach((value)=>{
      let parent = document.getElementById("recentActivity")
      let newActivity = displayActivity(value)
      parent.appendChild(newActivity)
    })
  }

}
