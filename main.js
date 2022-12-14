// Do not change the code below.
const main = document.querySelector("main");
for (let i = 0; i < 100; i++) {
  const div = document.createElement("div");
  div.classList.add("cell");
  main.append(div);
}

// You may write your code here!

// all these items are from 'styles.css' file which we are currently going to update/creat events

// Only one section so we use "selector" without 'All'
const currentColor = document.querySelector("#current-color")

const color = document.querySelectorAll(".color")
// these variable work in together because '#palette' is using the 'color' element
const palette = document.querySelectorAll("#palette .color")

// we are going to manipulate all the cells 
const cell = document.querySelectorAll(".cell")

color.forEach((newColor) => {
  newColor.addEventListener('click',(event) => {
    currentColor.style.backgroundColor = event.target.style.backgroundColor
  })
})