/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  let misc = ["♠", "♣", "♥", "♦"];
  let cardNumber = [
    "A",
    "K",
    "Q",
    "J",
    "10",
    "9",
    "8",
    "7",
    "6",
    "5",
    "4",
    "3",
    "2"
  ];
  const top = document.querySelector("#top");
  const bottom = document.querySelector("#bottom");
  const number = document.querySelector("#number");
  const card = document.querySelector(".card");

  number.innerHTML = cardNumber[numberAleatorio(cardNumber)];

  let miscAleatorio = misc[numberAleatorio(misc)];

  if (miscAleatorio === "♣" || miscAleatorio === "♠") {
    if (card.classList.contains("red")) {
      card.classList.remove("red");
    } else {
      card.classList.add("black");
      top.innerHTML = miscAleatorio;
      bottom.innerHTML = top.innerHTML;
    }
  } else if (miscAleatorio === "♥" || miscAleatorio === "♦") {
    if (card.classList.contains("black")) {
      card.classList.remove("black");
    } else {
      card.classList.add("red");
      top.innerHTML = miscAleatorio;
      bottom.innerHTML = top.innerHTML;
    }
  }
};

function numberAleatorio(arr) {
  let number = Math.floor(Math.random() * arr.length);

  return number;
}
