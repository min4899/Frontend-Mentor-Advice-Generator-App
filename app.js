"use strict";

const adviceId = document.getElementById("adviceId")
const adviceMsg = document.getElementById("adviceMsg");

async function getAdvice() {
  let response = await fetch('https://api.adviceslip.com/advice');  
  let data = await response.json();
  return data;
}

function printAdvice() {
  getAdvice().then(data => {
    //console.log(data.slip.advice);
    adviceId.textContent = `Advice #${data.slip.id}`;
    adviceMsg.textContent = `"${data.slip.advice}"`;
  });
}