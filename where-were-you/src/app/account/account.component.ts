import { Component, OnInit } from '@angular/core';

function displayAccount(name: string) {
  console.log(name)

  const newDiv = document.createElement("div")
  newDiv.className = "user"

  const fig = document.createElement("figure")
  const figCap = document.createElement("figcaption")
  figCap.textContent = name
  figCap.setAttribute("style", "height: 100px; text-align: center")


  const newImg = document.createElement("img")
  newImg.src = "../../assets/img/blankAvatar.jpg"
  newImg.className = "avatar"
  newImg.setAttribute("style", "height: 100px; display: block; margin-left: auto; margin-right: auto;")
  newDiv.appendChild(newImg)

  fig.appendChild(newImg)
  fig.appendChild(figCap)
  newDiv.appendChild(fig)

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
  }

}
