// Smooth Scrolling for navigation links
document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        document.getElementById(targetId).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Navbar Toggle for smaller screens
const navToggle = document.createElement('div');
navToggle.innerHTML = '<span>&#9776;</span>';
navToggle.style.fontSize = '2rem';
navToggle.style.color = 'white';
navToggle.style.cursor = 'pointer';
document.querySelector('nav').prepend(navToggle);

navToggle.addEventListener('click', () => {
    const navList = document.querySelector('nav ul');
    navList.style.display = (navList.style.display === 'flex') ? 'none' : 'flex';
});

// Contact form validation
document.querySelector('form').addEventListener('submit', function (e) {
    e.preventDefault(); // Prevent the form from submitting

    let isValid = true;

    // Get form inputs
    const name = document.querySelector('input[name="name"]');
    const email = document.querySelector('input[name="email"]');
    const message = document.querySelector('textarea[name="message"]');

    // Clear previous error messages
    document.querySelectorAll('.error-message').forEach(error => error.remove());

    // Name validation (cannot be empty)
    if (name.value.trim() === "") {
        displayError(name, "Name is required.");
        isValid = false;
    }

    // Email validation (simple regex pattern)
    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (!emailPattern.test(email.value)) {
        displayError(email, "Please enter a valid email address.");
        isValid = false;
    }

    // Message validation (cannot be empty)
    if (message.value.trim() === "") {
        displayError(message, "Message cannot be empty.");
        isValid = false;
    }

    // If all validations pass, show success message
    if (isValid) {
        alert('Form submitted successfully!');
        // You can implement form submission here using Fetch API, Ajax, or any other method
    }
});

// Display error message for form validation
function displayError(element, message) {
    const errorMessage = document.createElement('p');
    errorMessage.classList.add('error-message');
    errorMessage.style.color = '#ff0000';
    errorMessage.style.fontSize = '14px';
    errorMessage.textContent = message;
    element.parentNode.appendChild(errorMessage);
}

// Skill hover animation interaction
document.querySelectorAll('.skill-item').forEach(item => {
    item.addEventListener('mouseover', () => {
        item.style.transform = 'translateY(-10px)';
    });
    item.addEventListener('mouseout', () => {
        item.style.transform = 'translateY(0)';
    });
});

// Image hover effects in About section and Hero section
document.querySelectorAll('.about-image img, .hero-image img').forEach(image => {
    image.addEventListener('mouseover', () => {
        image.style.transform = 'scale(1.1)';
        image.style.boxShadow = '0 0 30px #00ff88';
    });
    image.addEventListener('mouseout', () => {
        image.style.transform = 'scale(1)';
        image.style.boxShadow = '0 0 10px #00ff88';
    });
});
