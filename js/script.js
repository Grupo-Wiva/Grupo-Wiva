document.addEventListener('DOMContentLoaded', () => {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.2 });

  const elements = document.querySelectorAll('.fade-in, .slide-up');
  elements.forEach(el => observer.observe(el));
});

document.querySelector('.contact-form').addEventListener('submit', function(e) {
  const btn = this.querySelector('.submit-btn');
  btn.classList.add('sending');
  btn.disabled = true;
});

// Animación al hacer scroll
window.addEventListener('scroll', () => {
  const navbar = document.querySelector('.navbar');
  if (window.scrollY > 50) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});
