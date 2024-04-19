// Created by: Niko
// Created on: april 2024
// This file contains the JS functions for index.html


"use strict"

let userInput = document.getElementById("degrees").value;
// if statement to decide what message to display, depending on if the user guessed correctly or not
if (userInput < 15) {
  document.getElementById("user-info").innerHTML = "It is cold outside. Dont go out. They come out when it is cold. you dont want them to find you. Stay inside, dont make any noise. Good luck my friend.";
} else {
  document.getElementById("user-info").innerHTML = "It is hot outside.";
}
