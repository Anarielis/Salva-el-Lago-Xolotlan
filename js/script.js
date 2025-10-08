// mostrar año actual
document.getElementById('year').textContent = new Date().getFullYear();

// efecto de aparición al hacer scroll
const elementos = document.querySelectorAll('.cards article, .galeria img, .impacto article');
const mostrarElemento = () => {
  const scrollY = window.scrollY + window.innerHeight;
  elementos.forEach(el=>{
    if(el.offsetTop < scrollY - 50){ el.classList.add('visible'); }
  });
};
window.addEventListener('scroll', mostrarElemento);
mostrarElemento();

// validación básica del formulario
const form = document.getElementById('contactForm');
if(form){
  form.addEventListener('submit', e=>{
    const nombre=form.name.value.trim();
    const correo=form._replyto.value.trim();
    const mensaje=form.message.value.trim();
    if(!nombre||!correo||!mensaje){
      e.preventDefault();
      alert('Por favor completa todos los campos.');
    }else{
      alert(`Gracias ${nombre}, tu mensaje fue enviado correctamente.`);
    }
  });
}
