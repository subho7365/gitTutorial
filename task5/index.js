const para= document.createElement("h3");

const paraText = document.createTextNode("Buy high quality organic fruits online");
para.style.fontStyle="italic";
para.appendChild(paraText);

const subHeading = document.getElementById("main-heading");
subHeading.appendChild(para);

const divs = document.getElementsByTagName("div");
const secondDiv = divs[1];

const paraNew = document.createElement("p");
const paraNewText = document.createTextNode("Total ruits: 4");
paraNew.id = "fruits-total";
paraNew.appendChild(paraNewText);


const fruits = document.querySelector(".fruits");
secondDiv.insertBefore(paraNew,fruits);
console.log(paraNew);