// Toggle the Contact Me overlay
function toggleContactMe(action) {
    const pane = document.getElementById('contact-me-pane');
    if (action === 'show') {
        pane.classList.remove('hidden');
        document.body.style.overflow = 'hidden'; // Stop background scrolling
    } else {
        pane.classList.add('hidden');
        document.body.style.overflow = 'auto';
    }
}

// Toggle Mobile Navigation
function toggleMobileNav() {
    const nav = document.getElementById('mobile-nav');
    if (nav.classList.contains('hidden')) {
        nav.classList.remove('hidden');
        nav.classList.add('flex');
    } else {
        nav.classList.add('hidden');
        nav.classList.remove('flex');
    }
}
