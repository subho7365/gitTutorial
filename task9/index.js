// Function to handle form submission
function handleFormSubmit(event) {
    event.preventDefault(); // Prevent default form submission
    
    // Get form input values
    const username = event.target.username.value;
      const email = event.target.email.value;
      const phone = event.target.phone.value;
     
    // Create user object
    const userDetails = {
      username: username,
      email: email,
      phone: phone
    };
    
    // Store user details object in local storage
   // Store user details object in local storage
    localStorage.setItem("User Details", JSON.stringify(userDetails));
    
    // Retrieve user details from local storage for verification
    const storedUserDetails = JSON.parse(localStorage.getItem("User Details"));
    console.log(storedUserDetails);
  
    
        };
  module.exports = handleFormSubmit;