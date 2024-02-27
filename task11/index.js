function handleFormSubmit(event) {
    event.preventDefault();
  
    // Get form values
    const username = event.target.username.value;
    const email = event.target.email.value;
    const phone = event.target.phone.value;
  
    // Create user object
    const user = {
       username: username ,
       email: email,
      phone: phone ,
    };
  
    // Get existing users from local storage or initialize an empty array
    let users = JSON.parse(localStorage.getItem('users')) || [];
  
    // Add new user to the array
    users.push(user);
  
    // Update local storage with the new array of users
    localStorage.setItem('users', JSON.stringify(users));
  
    // Update the user list on the page
    updateUserList(users);
  
    
    
  }
  
  function updateUserList(users) {
    const userList = document.getElementById('userList');
    // Clear existing list items
    userList.innerHTML = '';
  
    // Loop through the users and add them as list items to the unordered list
    users.forEach((user) => {
      const listItem = document.createElement('li');
      listItem.textContent = `${user.username}, ${user.email}, ${user.phone}`;
  
      // Create a delete button
      const deleteButton = document.createElement('button');
      deleteButton.textContent = 'Delete';
      deleteButton.addEventListener('click', () => deleteUser(index));
  
      // Append delete button to the list item
      listItem.appendChild(deleteButton);
  
      // Append list item to the user list
      userList.appendChild(listItem);
    });
  }
  
  // Function to delete a user
  function deleteUser(index) {
    let users = JSON.parse(localStorage.getItem('users')) || [];
  
    // Remove the user at the specified index
    users.splice(index, 1);
  
    // Update local storage with the updated array of users
    localStorage.setItem('users', JSON.stringify(users));
  
    // Update the user list on the page
    updateUserList(users);
  }
  
  // Load existing users on page load
  window.onload = function() {
    const users = JSON.parse(localStorage.getItem('users')) || [];
    updateUserList(users);
  };
  module.exports = handleFormSubmit;