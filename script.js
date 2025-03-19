const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');
const navItems = document.querySelectorAll('.nav-links a');

// Toggle the dropdown menu
navToggle.addEventListener('click', () => {
    navLinks.classList.toggle('show'); // Toggle the 'show' class
});

// Close the dropdown menu and scroll to the section
navItems.forEach(link => {
    link.addEventListener('click', event => {
        navLinks.classList.remove('show'); // Close the dropdown menu
        
        event.preventDefault(); // Prevent the default anchor behavior
        const targetId = link.getAttribute('href').substring(1); // Get the target section ID
        const targetElement = document.getElementById(targetId);

        // Scroll to the target section
        targetElement.scrollIntoView({
            behavior: 'smooth', // Smooth scrolling
            block: 'start' // Align to the top of the section
        });

        // Remove focus from the link to prevent underline
        link.blur();
    });
});