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
    threshold: 0.15,
    rootMargin: '0px 0px -40px 0px'
});

revealElements.forEach(el => revealObserver.observe(el));


// ── Audio Bars Visualizer ─────────────────────────────
const audioPlayer = document.getElementById('audio-player');
const audioBars = document.querySelector('.audio-bars');

if (audioPlayer && audioBars) {
    audioPlayer.addEventListener('play', () => {
        audioBars.classList.add('playing');
    });

    audioPlayer.addEventListener('pause', () => {
        audioBars.classList.remove('playing');
    });

    audioPlayer.addEventListener('ended', () => {
        audioBars.classList.remove('playing');
    });
}
