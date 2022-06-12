"use strict";

const adviceMsg = document.getElementById("advice");

async function getAdvice() {
  let response = await fetch('https://api.adviceslip.com/advice');  
  let data = await response.json();
  return data;
}

function printAdvice() {
  getAdvice().then(data => {
    //console.log(data.slip.advice);
    adviceMsg.textContent = `"${data.slip.advice}"`;
  });
}