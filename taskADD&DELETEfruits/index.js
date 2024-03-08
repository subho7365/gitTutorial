// Add the Edit Button:
document.querySelectorAll('.fruit').forEach(item => {
    const editButton = document.createElement('button');
    editButton.className = 'edit-btn';
    editButton.innerText = 'Edit';
    item.appendChild(editButton);
});

// Implement the add and delete functionality:
document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault();
    const fruitToAdd = document.getElementById('fruit-to-add').value;
    if (fruitToAdd.trim() !== '') {
        const newListItem = document.createElement('li');
        newListItem.className = 'fruit';
        newListItem.innerHTML = `${fruitToAdd}<button class="delete-btn">x</button><button class="edit-btn">Edit</button>`;
        document.querySelector('.fruits').appendChild(newListItem);
        document.getElementById('fruit-to-add').value = ''; // Clear input field
    }
});

document.querySelectorAll('.delete-btn').forEach(button => {
    button.addEventListener('click', function() {
        this.parentNode.remove();
    });
});
