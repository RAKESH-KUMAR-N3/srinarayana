/**
 * Sri Narayana Coaching Institute
 * Global Script File
 * Handles interactions and form validation
 */

document.addEventListener('DOMContentLoaded', () => {
    console.log('Sri Narayana Website Loaded');

    // Handle Lead Generation Form on Index Page
    const leadForm = document.getElementById('leadForm');
    if (leadForm) {
        leadForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            const name = document.getElementById('fullName').value;
            const mobile = document.getElementById('mobileNumber').value;
            const feedback = document.getElementById('formFeedback');

            // Simple Mobile Number Validation (Basic)
            const mobileRegex = /^[0-9]{10,12}$/;
            if (!mobileRegex.test(mobile)) {
                alert('Please enter a valid mobile number.');
                return;
            }

            console.log('Lead Submission:', { name, mobile });

            // Show Success Message
            feedback.textContent = `Thank you, ${name}! Our counselors will contact you shortly at ${mobile}.`;
            feedback.style.display = 'block';
            
            // Clear Form
            leadForm.reset();
        });
    }

    // Handle Contact Page Form
    const contactPageForm = document.getElementById('contactPageForm');
    if (contactPageForm) {
        contactPageForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            const name = document.getElementById('pName').value;
            const feedback = document.getElementById('contactFeedback');

            console.log('Contact Message Sent by:', name);

            // Show Success Message
            feedback.textContent = `Thank you, ${name}! Your message has been sent successfully.`;
            feedback.style.display = 'block';
            
            // Clear Form
            contactPageForm.reset();
        });
    }

    // Mobile Menu Toggle
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');

    if (menuToggle && navLinks) {
        menuToggle.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            menuToggle.classList.toggle('active');
        });

        // Close menu when clicking a link
        navLinks.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('active');
                menuToggle.classList.remove('active');
            });
        });
    }

    // Sticky Header on Scroll
    const header = document.querySelector('header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('sticky');
        } else {
            header.classList.remove('sticky');
        }
    });

    // Navigation Active Link Highlighting
    const currentPath = window.location.pathname.split('/').pop() || 'index.html';
    document.querySelectorAll('.nav-links a').forEach(link => {
        if (link.getAttribute('href') === currentPath) {
            link.classList.add('active');
        }
    });
});
