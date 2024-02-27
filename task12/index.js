document.addEventListener("DOMContentLoaded", function () {
  loadUserDetails();
});

function handleFormSubmit(event) {
  event.preventDefault();

  const username = document.getElementById("username").value;
  const email = document.getElementById("email").value;
  const phone = document.getElementById("phone").value;

  if (username.trim() === "" || email.trim() === "" || phone.trim() === "") {
    alert("Please fill in all fields");
    return;
  }

  const userDetails = {
    username,
    email,
    phone,
  };

  saveUserDetails(userDetails);
  clearFormFields();
  loadUserDetails();
}

function saveUserDetails(userDetails) {
  localStorage.setItem("userDetails", JSON.stringify(userDetails));
}

function loadUserDetails() {
  const userDetailsString = localStorage.getItem("userDetails");
  if (userDetailsString) {
    const userDetails = JSON.parse(userDetailsString);
    displayUserDetails(userDetails);
  }
}

function displayUserDetails(userDetails) {
  const ul = document.querySelector("ul");
  ul.innerHTML = `
    <li>Username: ${userDetails.username} | Email: ${userDetails.email} | Phone: ${userDetails.phone} 
    <button onclick="editUserDetails()">Edit</button> <button onclick="deleteUserDetails()">Delete</button></li>
  `;
}

function clearFormFields() {
  document.getElementById("username").value = "";
  document.getElementById("email").value = "";
  document.getElementById("phone").value = "";
}

function deleteUserDetails() {
  localStorage.removeItem("userDetails");
  const ul = document.querySelector("ul");
  ul.innerHTML = "";
}

function editUserDetails() {
  deleteUserDetails(); // Remove current details from storage and screen
  const userDetailsString = localStorage.getItem("userDetails");
  if (userDetailsString) {
    const userDetails = JSON.parse(userDetailsString);
    document.getElementById("username").value = userDetails.username;
    document.getElementById("email").value = userDetails.email;
    document.getElementById("phone").value = userDetails.phone;
  }
}
module.exports = handleFormSubmit;