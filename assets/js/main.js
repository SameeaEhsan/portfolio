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
});
