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
    const headerEl = document.querySelector('header');
    if (headerEl) {
        headerEl.appendChild(overlay);
    } else {
        document.body.appendChild(overlay);
    }

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

        // Event delegation for mobile menu link clicks and accordion
        navLinks.addEventListener('click', (e) => {
            if (window.innerWidth > 1200) return; // Only process custom clicks on mobile
            
            // Find the closest 'a' tag to the click
            const link = e.target.closest('a');
            if (!link) return; // If didn't click on a link, ignore
            
            const li = link.closest('li');
            
            // Is this a dropdown toggle?
            if (li && li.classList.contains('dropdown') && link.parentElement === li) {
                e.preventDefault();
                e.stopPropagation();
                li.classList.toggle('open');
            } else {
                // Else, it's a real link, so close the menu
                closeMenu();
            }
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
    const navAnchors = document.querySelectorAll('.nav-links a');
    let activeFound = false;

    navAnchors.forEach(link => link.classList.remove('active'));

    navAnchors.forEach(link => {
        const href = link.getAttribute('href');
        if (href === currentPath || (currentPath === 'index.html' && href === 'index.html')) {
            link.classList.add('active');
            activeFound = true;

            const dropdownContent = link.closest('.dropdown-content');
            if (dropdownContent) {
                const parentToggle = dropdownContent.previousElementSibling;
                if (parentToggle && parentToggle.tagName === 'A') {
                    parentToggle.classList.add('active');
                }
            }
        }
    });

    if (!activeFound) {
        const homeLink = Array.from(navAnchors).find(link => link.getAttribute('href') === 'index.html');
        if (homeLink) {
            homeLink.classList.add('active');
        }
    }
});
