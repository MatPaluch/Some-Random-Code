"use strict";

console.log(Math.floor(Math.random() * (10 - 1) + 1));

function doSmth() {
  const what = confirm("Please confirm hotel reservation");
  console.log(what);
  if (what == true) {
    alert("Reservation comfirmed");
  } else {
    alert("Reservation declined");
    document.getElementById("anchor").innerHTML = "Sadge :(";
  }
}
