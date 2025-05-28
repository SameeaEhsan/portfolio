// Utility to load HTML from a file into a section by ID
function loadSection(sectionId, filePath) {
  fetch(filePath)
    .then(response => response.text())
    .then(html => {
      document.getElementById(sectionId).innerHTML = html;
    });
}

document.addEventListener('DOMContentLoaded', function() {
  loadSection('about', 'components/about.html');
  loadSection('skills', 'components/skills.html');
  loadSection('work', 'components/work.html');
  loadSection('contact', 'components/contact.html');

  // Animate cards in when loaded
  setTimeout(() => {
    const cards = document.querySelectorAll('.card');
    if (window.gsap && cards.length) {
      gsap.fromTo(cards, {
        y: 60,
        opacity: 0
      }, {
        y: 0,
        opacity: 1,
        duration: 1.1,
        stagger: 0.18,
        ease: 'power3.out'
      });
    }
  }, 500);
});
