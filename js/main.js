/* =========================================================
   Arrive Aruba — HTML5 Edition
   JavaScript mínimo: el sitio funciona sin él; solo añade mejoras.
   ========================================================= */

document.documentElement.classList.add('js');

/* 1. Revelado suave de secciones al desplazarse. */
const revealTargets = document.querySelectorAll('.section, .story, .product-detail');
if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });
  revealTargets.forEach((element) => {
    element.classList.add('reveal');
    observer.observe(element);
  });
}

/* 2. Muestra en pantalla la pista <track> de descripciones del video. */
const video = document.getElementById('video-llegada');
const descriptionOutput = document.getElementById('descripcion-video');
if (video && descriptionOutput && video.textTracks.length > 0) {
  const track = video.textTracks[0];
  track.mode = 'hidden';
  track.addEventListener('cuechange', () => {
    const cue = track.activeCues && track.activeCues[0];
    if (cue) {
      descriptionOutput.textContent = cue.text;
    }
  });
}

/* 3. Formulario de demostración: la validación es nativa de HTML5.
      El evento submit solo se dispara si todos los campos son válidos;
      en ese caso se evita el envío y se informa de que no se ha enviado nada. */
const form = document.getElementById('formulario-contacto');
const status = document.getElementById('estado-formulario');
if (form && status) {
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    status.textContent = 'Los datos son válidos. Como se trata de una demostración, el mensaje no se ha enviado ni guardado.';
  });
  form.addEventListener('reset', () => {
    status.textContent = '';
  });
}
