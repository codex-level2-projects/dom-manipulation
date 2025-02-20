"use strict";

const h1 = document.getElementById("h1");
h1.textContent = "This Page Shows Dom Manipulation Examples";

const p = document.querySelector("#form-text");
p.style.backgroundColor = "Green";
p.style.color = "White";

const button = document.getElementById("button");
button.addEventListener("click", function (event) {
  alert("Form Submitted!");
});

const googleLink = document.querySelector("#link");
googleLink.addEventListener("click", function (event) {
  event.preventDefault();
  console.log("Website Blocked");
});
