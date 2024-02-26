// Write your code below:
function handleFormSubmit(event) {
    event.preventDefault();
  
    // Get form values
    const username = event.target.username.value;
    const email = event.target.email.value;
    const phone = event.target.phone.value;
  
    // Create user object
    const user = {
      username: username,
      email: email,
      phone: phone
    };
  
    // Get existing users from local storage or initialize an empty array
    let users = JSON.parse(localStorage.getItem('users')) || [];
  
    // Add new user to the array
    users.push(user);
  
    // Update local storage with the new array of users
    localStorage.setItem('users', JSON.stringify(users));
  
    // Update the user list on the page
    updateUserList(users);
  
    // Reset form
    
  
  }
  
  function updateUserList(users) {
    const userList = document.getElementById('userList');
    // Clear existing list items
    userList.innerHTML = '';
  
    // Loop through the users and add them as list items to the unordered list
    users.forEach(user => {
      const listItem = document.createElement('li');
      listItem.textContent = `Username: ${user.username}, Email: ${user.email}, Phone: ${user.phone}`;
      userList.appendChild(listItem);
    });
  } 
  
  // Load existing users on page load
  window.onload = function() {
    const users = JSON.parse(localStorage.getItem('users')) || [];
    updateUserList(users);
  };
  module.exports = handleFormSubmit;       