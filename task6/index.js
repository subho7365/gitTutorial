// Add the Edit Button:


// Implement the code as in video but with one extra 'Edit' button in 'li'
const editButton = document.createElement('button')
const editButtonText = document.createTextNode('Edit')
editButton.className = 'edit-btn'
editButton.appendChild(editButtonText)

const form = document.querySelector('form')
const fruits = document.querySelector('.fruits')
form.addEventListener('submit',function(event){
  event.preventDefault()

  const fruitToAdd = document.getElementById('fruit-to-add')

  const newLi = document.createElement('li')
  newLi.innerHTML = fruitToAdd.value + '<button class="delete-btn">x</button>'
  newLi.appendChild(editButton)

  newLi.className= 'fruit'
  fruits.appendChild(newLi)
  })

  fruits.addEventListener('click', function(event){
    if(event.target.classList.contains('delete-btn')){
      const fruitsToDelete = event.target.parentElement
      fruits.removeChild(fruitsToDelete)
    };
  });