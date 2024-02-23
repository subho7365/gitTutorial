const mainheading = document.querySelector("#main-heading");
mainheading.style.textAlign="right";

const fruitsList = document.querySelector(".fruits");
fruitsList.style.backgroundColor ="grey";
fruitsList.style.padding="30px";
fruitsList.style.margin="30px";
fruitsList.style.width="50%";
fruitsList.style.borderRadius="5px";
fruitsList.style.listStyleType="none";

const basketHeading = document.querySelector("h2");
basketHeading.style.color= "brown";
basketHeading.style.marginLeft="30px";

const fruitItems = document.querySelectorAll(".fruit");
for(let i=0;i<fruitItems.length;i++){
  fruitItems[i].style.fontWeight="bold";
  fruitItems[i].style.padding="30px";
  fruitItems[i].style.margin="10px";
  fruitItems[i].style.borderRadius="5px";
  
}

const evenFruits = document.querySelectorAll(".fruit:nth-child(even)");
for(let i=0; i<evenFruits.length; i++){
  evenFruits[i].style.backgroundColor = "red";
  evenFruits[i].style.color = "white";
}

const secondListItem = document.querySelector(".fruit:nth-child(2)");
secondListItem.style.backgroundColor = "brown";
secondListItem.style.color = "white";

const fourthListItem = document.querySelector(".fruit:nth-child(4)");
fourthListItem.style.backgroundColor = "brown";
fourthListItem.style.color = "white";
