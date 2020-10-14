import { Component, OnInit } from '@angular/core';

function displayPerson(name: string) {
  console.log(name)

  const newDiv = document.createElement("div")
  //newDiv.appendChild(document.createTextNode(name))
  newDiv.className = "friend"

  const fig = document.createElement("figure")
  const figCap = document.createElement("figcaption")
  figCap.textContent = name + " went to walmart"

  const newImg = document.createElement("img")
  newImg.src = "../../assets/img/blankAvatar.jpg"
  newImg.className = "avatar"
  newImg.setAttribute("style", "height: 100px")
  newDiv.appendChild(newImg)

  fig.appendChild(newImg)
  fig.appendChild(figCap)
  newDiv.appendChild(fig)

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
    let friendsList = ["sally", "bob", "bryan", "joe", "sarah"]
    friendsList.forEach((value)=>{
      let parentDiv = document.getElementById("wrapper")
      let beforeDiv = document.getElementById("add")
      let newDiv = displayPerson(value)
      parentDiv.insertBefore(newDiv, beforeDiv)
    })

  }

}
