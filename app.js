document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM Content Loaded. app.js is running!');

    // --- Hamburger Menu Logic ---
    const hamburger = document.querySelector('.hamburger');
    const navLinksList = document.querySelector('.nav-links ul');

    console.log('Hamburger element found:', hamburger);
    console.log('Nav Links UL element found:', navLinksList);

    if (hamburger && navLinksList) {
        hamburger.addEventListener('click', () => {
            console.log('Hamburger button clicked!');
            navLinksList.classList.toggle('active');
            hamburger.classList.toggle('active');
            console.log('Nav links active state:', navLinksList.classList.contains('active'));
        });

        navLinksList.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                if (navLinksList.classList.contains('active')) {
                    navLinksList.classList.remove('active');
                    hamburger.classList.remove('active');
                    console.log('Nav link clicked. Mobile menu closed.');
                }
            });
        });
    } else {
        console.error('Error: Hamburger button or navigation links (UL) not found. Check your HTML class names and structure.');
    }

    // --- Intersection Observer for Scroll Animations ---
    const observerOptions = {
        root: null, // viewport as the observing root
        rootMargin: '0px',
        threshold: 0.1 // Trigger when 10% of the element is visible
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                // observer.unobserve(entry.target); // Uncomment if animation should play only once
            }
        });
    }, observerOptions);

    document.querySelectorAll('.animate-on-scroll').forEach(element => {
        observer.observe(element);
        console.log('Observing element for scroll animation:', element);
    });

    // --- Animate hero content immediately on load ---
    document.querySelectorAll('.hero-content .animate-fade-in').forEach(element => {
        element.classList.add('visible');
        console.log('Hero element immediately animated:', element);
    });

    const heroContentContainer = document.querySelector('.hero-content.animate-fade-in');
    if (heroContentContainer) {
        heroContentContainer.classList.add('visible');
        console.log('Hero content container immediately animated.');
    }
});
