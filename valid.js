function printError(elemId, hintMsg) {
  document.getElementById(elemId).innerHTML = hintMsg;
}

// Defining a function to validate form 
function validateForm() {
  // Retrieving the values of form elements 
  var name = document.contactForm.name.value;
  var email = document.contactForm.email.value;
  var phone = document.contactForm.phone.value;

// Defining error variables with a default value
  var errorname = erroremail = errorphone = true;
  
  // Validate name
  if(name == "") {
      printError("errorname", "**Please enter your name**");
  } else {
      var regex = /^[a-zA-Z\s]+$/;                
      if(regex.test(name) === false) {
          printError("errorname", "**Please enter a valid name**");
      } else {
          printError("errorname", "");
          errorname = false;
      }
  }
  
  // Validate email address
  if(email == "") {
      printError("erroremail", "**Please enter your email address**");
  } else {
      // Regular expression for basic email validation
      var regex = /^\S+@\S+\.\S+$/;
      if(regex.test(email) === false) {
          printError("erroremail", "**Please enter a valid email address**");
      } else{
          printError("erroremail", "");
          erroremail = false;
      }
  }
  
  // Validate phone number
  if(phone == "") {
      printError("errorphone", "**Please enter your phone number**");
  } else {
      var regex = /^[1-9]\d{9}$/;
      if(regex.test(phone) === false) {
          printError("errorphone", "**Please enter a valid 10 digit phone number**");
      } else{
          printError("errorphone", "");
          mobileErr = false;
      }
  }
  // Prevent the form from being submitted if there are any errors
  if((errorname || erroremail || mobileErr) == true) {
     return false;
  } else {
      // Creating a string from input data for preview
      var dataPreview = "You've entered the following details: \n" +
          "Full Name: " + name + "\n" +
          "Email Address: " + email + "\n" +
          "Mobile Number: " + mobile + "\n" +
      // Display input data in a dialog box before submitting the form
      alert(dataPreview);
  }
  return alert('Registered Successfully');
};