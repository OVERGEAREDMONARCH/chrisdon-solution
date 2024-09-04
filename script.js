document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting the traditional way

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Simple form validation
    if (name && email && message) {
        alert('Thank you for your message, ' + name + '! We will get back to you shortly.');
        // Here you would normally send the data to a server
        this.reset(); // Clear the form
    } else {
        alert('Please fill out all fields.');
    }
});
