// script.js
const burger = document.querySelector('.burger');
const navLinks = document.querySelector('.nav-links');
const nav = document.querySelector('nav');

// Mobile navigation toggle (hamburger menu)
burger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    burger.classList.toggle('toggle');
});

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - nav.offsetHeight,
                behavior: 'smooth'
            });

            // Close mobile menu on click if screen width is small
            if (window.innerWidth <= 768) {
                navLinks.classList.remove('active');
                burger.classList.remove('toggle');
            }
        }
    });
});

// Sticky nav on scroll
window.addEventListener('scroll', () => {
    if (window.scrollY > 0) {
        nav.classList.add('sticky');
    } else {
        nav.classList.remove('sticky');
    }
});

// Dark mode toggle
const toggleButton = document.getElementById('dark-mode-toggle');
toggleButton.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    localStorage.setItem('dark-mode', document.body.classList.contains('dark-mode'));
});

// Check saved preference
if (localStorage.getItem('dark-mode') === 'true') {
    document.body.classList.add('dark-mode');
}
