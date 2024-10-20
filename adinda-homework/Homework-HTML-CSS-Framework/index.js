// Smooth scroll for navigation page
document.querySelectorAll('a.nav-link').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute('href'));
        target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
});

// Flip Card for navigation card description
function flipCard(button) {
    const card = button.closest('.flip-card');
    card.classList.add('flipped');
}

function closeFlip(button) {
    const card = button.closest('.flip-card');
    card.classList.remove('flipped');
}