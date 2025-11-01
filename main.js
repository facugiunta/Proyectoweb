// Inicialización AOS y utilidades simples
window.addEventListener('DOMContentLoaded', () => {
  if (window.AOS) AOS.init({ once: true, duration: 650, easing: 'ease-out' });
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();
  const forms = document.querySelectorAll('form');
  Array.from(forms).forEach(form => {
    form.addEventListener('submit', e => {
      if (!form.checkValidity()) { e.preventDefault(); e.stopPropagation(); }
      else {
        e.preventDefault();
        const ok = form.querySelector('#turno-ok, #contacto-ok');
        if (ok) ok.classList.remove('d-none');
        form.classList.remove('was-validated');
        form.reset();
      }
      form.classList.add('was-validated');
    });
  });
});