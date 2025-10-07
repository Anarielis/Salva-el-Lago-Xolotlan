document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('contactForm');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = form.name.value.trim();
      const email = form.email.value.trim();
      const message = form.message.value.trim();

      if (!name || !email || !message) {
        alert('Por favor completa todos los campos.');
        return;
      }

      alert(`Gracias ${name}, tu mensaje ha sido enviado correctamente.`);
      form.reset();
    });
  }
});
