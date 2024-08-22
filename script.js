function validateForm() {
    // Get form elements
    var firstname = document.getElementById('firstname').value;
    var lastname = document.getElementById('lastname').value;
    var email = document.getElementById('email').value;
    var contact = document.getElementById('contact').value;
    var message = document.getElementById('message');

    // Validate fields
    if (firstname === "" || lastname === "" || email === "" || contact === "") {
        message.style.color = "red";
        message.textContent = "All fields are required!";
        return false;
    }

    // Simple email format validation
    var emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (!email.match(emailPattern)) {
        message.style.color = "red";
        message.textContent = "Please enter a valid email address!";
        return false;
    }

    // If validation passes, show success message
    message.style.color = "green";
    message.textContent = "Registration complete!";
    return false;  // Prevent actual form submission for demo
}
