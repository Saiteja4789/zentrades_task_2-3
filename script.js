document.getElementById("loginForm").addEventListener("submit", function(event)
 {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    // Email format validation
    if (!isValidEmail(username)) {
      alert("Please enter a valid email address.");
      event.preventDefault();
      return;
    }

    // Password complexity validation
    var passwordRegex = /^(?=.*[A-Z])(?=.*\d)[A-Za-z\d@]{8,}$/;
    if (!passwordRegex.test(password)) {
      alert("Password must be at least 8 characters long, contain at least one uppercase letter, one number, and can only contain letters, numbers, or '@'.");
      event.preventDefault();
      return;
    }
    // Check if the password is correct
    if (password === "ZenTradesTest@123") {
        // Redirect to the dashboard page
        window.location.href = "dashboard.html";
    } else {
        // Display an error message
        alert("Incorrect password. Please try again.");
        event.preventDefault();
    }
    

});

function validatePassword() {
    var password = document.getElementById("password").value;
    
    if (password === "ZenTradesTest@123") {
      window.location.href = "dashboard2.html";
    } else {
      alert("Incorrect password. Please try again.");
    }
  }

function isValidEmail(email) {
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}
