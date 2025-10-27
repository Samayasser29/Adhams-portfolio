console.log("✅ JS loaded");

// Select all navbar links
const navLinks = document.querySelectorAll('.navbar-nav .nav-link');

// Add click event to make the clicked link active
navLinks.forEach(link => {
  link.addEventListener('click', function () {
    navLinks.forEach(l => l.classList.remove('active'));
    this.classList.add('active');
  });
});

// Highlight active section when scrolling
window.addEventListener('scroll', () => {
  const fromTop = window.scrollY + 120; // adjust based on navbar height
  navLinks.forEach(link => {
    const section = document.querySelector(link.getAttribute('href'));
    if (section &&
        section.offsetTop <= fromTop &&
        section.offsetTop + section.offsetHeight > fromTop) {
      navLinks.forEach(l => l.classList.remove('active'));
      link.classList.add('active');
    }
  });
});

// Close menu on link click (mobile view)
const navbarCollapse = document.querySelector('.navbar-collapse');
navLinks.forEach(link => {
  link.addEventListener('click', () => {
    const bsCollapse = new bootstrap.Collapse(navbarCollapse, {
      toggle: false
    });
    bsCollapse.hide();
  });
});
