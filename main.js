// ─── FAQ ACCORDION ───────────────────────────────────────────────────────────
function toggleFaq(item) {
  const isOpen = item.classList.contains('open');
  // Close all open items
  document.querySelectorAll('.faq-item').forEach(i => i.classList.remove('open'));
  // If the clicked item wasn't open, open it
  if (!isOpen) item.classList.add('open');
}

// ─── SCROLL FADE-UP OBSERVER ─────────────────────────────────────────────────
const fadeObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.animation = 'fadeUp 0.6s ease forwards';
      fadeObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.feature-card, .step-item, .stat-item, .undetect-card')
  .forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    fadeObserver.observe(el);
  });