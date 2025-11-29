document.addEventListener('DOMContentLoaded', () => {
    // Select all elements targeted for the scroll-in animation
    const animatedElements = document.querySelectorAll(
        '.section-title, .timeline-item, .experience-card, .skill-card, .cert-card, .education-card, .contact-section'
    );

    // Set up the Intersection Observer
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // When element enters viewport, add the CSS class 'scroll-in'
                entry.target.classList.add('scroll-in');
                
                // Stop observing the element after it has animated once
                observer.unobserve(entry.target);
            }
        });
    }, {
        // Options for the observer
        root: null, // relative to the viewport
        rootMargin: '0px',
        threshold: 0.1 // trigger when 10% of the item is visible
    });

    // Start observing each selected element
    animatedElements.forEach(element => {
        observer.observe(element);
    });
});