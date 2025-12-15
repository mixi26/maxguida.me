// Initialize ScrollReveal
const sr = ScrollReveal({
    distance: '50px',
    duration: 1000,
    easing: 'ease-out',
    reset: false // If true, animations repeat every time you scroll up/down
});

// Target elements
sr.reveal('.headline', { delay: 200, origin: 'bottom' });
sr.reveal('.sub-headline', { delay: 400, origin: 'bottom' });
sr.reveal('.section-title', { delay: 200, origin: 'left' });
sr.reveal('.card', { interval: 200, origin: 'bottom' }); // 'interval' cascades the cards one by one
