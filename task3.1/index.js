const header = document.getElementById("main-heading");
header.textContent = "Fruit World";

header.style.color = "orange";

var headerDiv = document.getElementById("header");
  headerDiv.style.backgroundColor = "green";

headerDiv.style.borderBottom = "2px solid orange";

var basketHeading = document.getElementById("basket-heading");
  basketHeading.style.color = "green";

 var thanksDiv = document.getElementById("thanks");
  var thanksParagraph = document.createElement("p");
  thanksParagraph.textContent = "Please visit us again";
 thanksDiv.appendChild(thanksParagraph);