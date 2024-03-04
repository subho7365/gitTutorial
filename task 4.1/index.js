var fruitsList = document.getElementsByClassName("fruit");
  if (fruitsList.length >= 3) {
    fruitsList[2].style.backgroundColor = "yellow";
  }

 for (var i = 0; i < fruitsList.length; i++) {
    fruitsList[i].style.fontWeight = "bold";
  }