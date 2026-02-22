/* ══════════════════════════════════════════════════════
   Portfolio — Script
   ══════════════════════════════════════════════════════ */

// ── Scroll Reveal ─────────────────────────────────────
const revealElements = document.querySelectorAll('.reveal');

const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            revealObserver.unobserve(entry.target);
        }
    });
}, {
    threshold: 0.12,
    rootMargin: '0px 0px -30px 0px'
});

revealElements.forEach(el => revealObserver.observe(el));


// ── Mobile Nav Toggle ─────────────────────────────────
const navToggle = document.getElementById('nav-toggle');
const navLinks = document.getElementById('nav-links');

if (navToggle && navLinks) {
    navToggle.addEventListener('click', () => {
        navLinks.classList.toggle('open');
    });

    // Close menu when a link is clicked
    navLinks.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('open');
        });
    });
}


// ── Audio Bars Visualizer ─────────────────────────────
const audioPlayer = document.getElementById('audio-player');
const audioBars = document.querySelector('.audio-bars');

if (audioPlayer && audioBars) {
    audioPlayer.addEventListener('play', () => audioBars.classList.add('playing'));
    audioPlayer.addEventListener('pause', () => audioBars.classList.remove('playing'));
    audioPlayer.addEventListener('ended', () => audioBars.classList.remove('playing'));
}


// ── Active Nav Highlighting ───────────────────────────
const sections = document.querySelectorAll('.section, .hero');
const navAnchors = document.querySelectorAll('.nav-links a');

const navObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const id = entry.target.id;
            navAnchors.forEach(a => {
                a.style.color = a.getAttribute('href') === `#${id}`
                    ? 'var(--white)'
                    : '';
            });
        }
    });
}, {
    threshold: 0.3
});

sections.forEach(s => navObserver.observe(s));
