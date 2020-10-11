import { Component, OnInit } from '@angular/core';

function displayPerson(name: string) {
  console.log(name)

  const newDiv = document.createElement("div")
  newDiv.appendChild(document.createTextNode(name))

  return newDiv
}

@Component({
  selector: 'app-friends',
  templateUrl: './friends.component.html',
  styleUrls: ['./friends.component.css']
})
export class FriendsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    let friendsList = ["sally", "bob"]
    friendsList.forEach((value)=>{
      let parentDiv = document.getElementById("wrapper")
      let beforeDiv = document.getElementById("add")
      let newDiv = displayPerson(value)
      parentDiv.insertBefore(newDiv, beforeDiv)
    })

  }

}
