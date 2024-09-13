document.getElementById("myForm").addEventListener("submit", function (event) {
  // Prevent form submission
  event.preventDefault();

  // Clear previous errors
  clearErrors();

  // Get form values
  const username = document.getElementById("username").value.trim();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();

  // Validate form fields
  let isValid = true;

  if (username === "") {
    showError("usernameError", "Username is required.");
    isValid = false;
  }

  if (email === "") {
    showError("emailError", "Email is required.");
    isValid = false;
  } else if (!validateEmail(email)) {
    showError("emailError", "Invalid email format.");
    isValid = false;
  }

  if (password === "") {
    showError("passwordError", "Password is required.");
    isValid = false;
  } else if (password.length < 6) {
    showError("passwordError", "Password must be at least 6 characters long.");
    isValid = false;
  }

  if (isValid) {
    // Form is valid, you can submit it or process it further
    alert("Form submitted successfully!");
    // Uncomment the line below to actually submit the form
    // this.submit();
  }
});

function showError(elementId, message) {
  document.getElementById(elementId).textContent = message;
}

function clearErrors() {
  const errors = document.querySelectorAll(".error");
  errors.forEach((error) => (error.textContent = ""));
}

function validateEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
}
