document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if (name && email && message) {
        document.getElementById('formResponse').innerText = 'Thank you, ' + name + ', for your message!';
    } else {
        document.getElementById('formResponse').innerText = 'Please fill in all fields.';
    }

    // Reset form after submission
    document.getElementById('contactForm').reset();
});
