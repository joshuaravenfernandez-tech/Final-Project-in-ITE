// Live Clock
function updateClock() {
    const now = new Date();
    document.getElementById("live-clock").innerText = now.toLocaleString();
}
setInterval(updateClock, 1000);
updateClock();

// Back to Top — instant jump
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'auto'
    });
}

// PAGE SWITCH — no sliding, instant change
const navLinks = document.querySelectorAll('.nav-link');
const sections = document.querySelectorAll('.page-section');

navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault(); // stop the sliding jump
        
        // Hide all sections
        sections.forEach(sec => sec.classList.remove('active'));
        
        // Show the clicked section
        const targetId = this.getAttribute('href').substring(1);
        document.getElementById(targetId).classList.add('active');
        
        // Go to top instantly
        scrollToTop();
    });
});