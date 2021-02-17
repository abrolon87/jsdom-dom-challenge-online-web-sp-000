const plus = document.getElementById("plus");
const minus = document.getElementById("minus");
const counter = document.getElementById("counter");
const pause = document.getElementById("pause");
let count = counter.innerText

// document.addEventListener("DOMContentLoaded", (e) => {

// })

plus.addEventListener("click", () => {
  counter.innerText = parseInt(counter.innerText) + 1
})

