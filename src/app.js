/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  let pronoun = ["the", "our"];
  let adj = ["great", "big"];
  let noun = ["jogger", "racoon"];

  for (let i = 0; i < 2; i++) {
    for (let x = 0; x < 2; x++) {
      for (let b = 0; b < 2; b++) {
        console.log(pronoun[i] + adj[x] + noun[b] + ".com");
      }
    }
  }

  console.log("Hello Rigo from the console!");
};
