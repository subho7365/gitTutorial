// Add input element inside form, before button, to take fruit description
const form = document.querySelector('form');
const fruitInput = document.getElementById('fruit-to-add');
const descriptionInput = document.createElement('input');
descriptionInput.type = 'text';
descriptionInput.id = 'description';
descriptionInput.placeholder = 'Enter fruit description';

form.insertBefore(descriptionInput, fruitInput);

// Function to show fruit description and handle filtering
function handleFruitSubmission(event) {
  event.preventDefault(); // Prevent default form submission behavior

  const fruitName = fruitInput.value.toLowerCase();
  const fruitDescription = descriptionInput.value.toLowerCase();
  const filterText = document.getElementById('filter').value.toLowerCase();

  const fruitList = document.querySelectorAll('.fruit');

  fruitList.forEach(fruit => {
    const fruitNameElement = fruit.querySelector('strong'); // Assuming fruit name is wrapped in a <strong> tag
    const fruitDescriptionElement = document.createElement('p');
    fruitDescriptionElement.textContent = fruit.textContent.slice(fruitName.length).trim() + ' (' + fruitDescription + ')'; // Extract description and append it in italics
    fruitDescriptionElement.style.fontStyle = 'italic';

    fruit.textContent = fruitName; // Reset fruit text content

    // Filter based on fruit name or description or both
    if (fruitName.includes(filterText) || fruitDescription.includes(filterText)) {
      fruit.appendChild(fruitDescriptionElement);
      fruit.style.display = 'block';
    } else {
      fruit.style.display = 'none';
    }
  });

  // Reset form after submission
  fruitInput.value = '';
  descriptionInput.value = '';
}

// Attach event listener to form submission
const formElement = document.querySelector('form');
formElement.addEventListener('submit', handleFruitSubmission);
module.exports = handleFruitSubmission;