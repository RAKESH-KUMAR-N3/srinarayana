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

    // Mobile Menu Toggle with Overlay
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');

    // Create overlay element
    const overlay = document.createElement('div');
    overlay.id = 'nav-overlay';
    overlay.style.cssText = `
        display: none;
        position: fixed;
        inset: 0;
        background: rgba(0,0,0,0.5);
        z-index: 9500;
        transition: opacity 0.3s ease;
    `;
    document.body.appendChild(overlay);

    // Add close (X) button inside nav panel
    const closeBtn = document.createElement('button');
    closeBtn.innerHTML = '&times;';
    closeBtn.setAttribute('aria-label', 'Close menu');
    closeBtn.style.cssText = `
        position: absolute;
        top: 18px;
        right: 20px;
        background: none;
        border: none;
        color: white;
        font-size: 2rem;
        line-height: 1;
        cursor: pointer;
        z-index: 9700;
        padding: 4px 10px;
    `;
    if (navLinks) {
        navLinks.style.position = 'fixed';
        navLinks.appendChild(closeBtn);
    }
    closeBtn.addEventListener('click', closeMenu);

    function openMenu() {
        navLinks.classList.add('active');
        menuToggle.classList.add('active');
        overlay.style.display = 'block';
        document.body.style.overflow = 'hidden';
    }

    function closeMenu() {
        navLinks.classList.remove('active');
        menuToggle.classList.remove('active');
        overlay.style.display = 'none';
        document.body.style.overflow = '';
    }

    if (menuToggle && navLinks) {
        menuToggle.addEventListener('click', () => {
            navLinks.classList.contains('active') ? closeMenu() : openMenu();
        });

        // Close menu when clicking overlay
        overlay.addEventListener('click', closeMenu);

        // Close menu when clicking a link
        navLinks.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', closeMenu);
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
