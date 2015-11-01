// ==UserScript==
// @name       Colorise Contributions on GitHub
// @namespace  http://wave-it.fr/
// @version    1.0
// @description  Change color of rectangles in contribution calendar
// @match      https://github.com/*
// @copyright  nope, go to https://github.com/KenAlin/
// ==/UserScript==

// Wanna some other colors ?
var colorS = "#FAD089";
var colorM = "#FF9C5B";
var colorL = "#F5634A";
var colorXL = "#ED303C";

// Okay, let's change colors !
var rectS = document.querySelectorAll('rect[fill$="d6e685"]');
for (var i = 0; i < rectS.length; i++) {
  rectS[i].setAttribute('fill', colorS);
}

var rectM = document.querySelectorAll('rect[fill$="8cc665"]');
for (var i = 0; i < rectM.length; i++) {
  rectM[i].setAttribute('fill', colorM);
}

var rectL = document.querySelectorAll('rect[fill$="44a340"]');
for (var i = 0; i < rectL.length; i++) {
  rectL[i].setAttribute('fill', colorL);
}

var rectXL = document.querySelectorAll('rect[fill$="1e6823"]');
for (var i = 0; i < rectXL.length; i++) {
  rectXL[i].setAttribute('fill', colorXL);
}

// Don't forget labels below the calendar
var labelS = document.querySelectorAll('li[style$="d6e685"]');
labelS[0].style.backgroundColor = colorS;

var labelM = document.querySelectorAll('li[style$="8cc665"]');
labelM[0].style.backgroundColor = colorM;

var labelL = document.querySelectorAll('li[style$="44a340"]');
labelL[0].style.backgroundColor = colorL;

var labelXL = document.querySelectorAll('li[style$="1e6823"]');
labelXL[0].style.backgroundColor = colorXL;
