// Función para controlar el scroll hacia la derecha (galería normal) y hacia la izquierda (galería inversa)
function setupScroll(gallery, reverse = false) {
  gallery.addEventListener('wheel', (event) => {
    event.preventDefault();

    const scrollSpeed = 7; // Ajusta la velocidad aquí
    const scrollAmount = event.deltaY * scrollSpeed;

    if (reverse) {
      gallery.scrollLeft -= scrollAmount;  // Desplazamiento hacia la izquierda
    } else {
      gallery.scrollLeft += scrollAmount;  // Desplazamiento hacia la derecha
    }
  });
}

// Seleccionar las galerías
const gallery1 = document.getElementById('gallery-container-1');  // Primera galería
const gallery2 = document.getElementById('gallery-container-2');  // Segunda galería
const gallery3 = document.getElementById('gallery-container-3');  // Tercera galería
const gallery4 = document.getElementById('gallery-container-4');  // Cuarta galería

// Inicializar las galerías que empiezan desde la derecha
window.addEventListener('load', () => {
  gallery2.scrollLeft = gallery2.scrollWidth;  // Segunda galería: empieza desde la derecha
  gallery4.scrollLeft = gallery4.scrollWidth;  // Cuarta galería: empieza desde la derecha
});

// Configurar el desplazamiento para cada galería
setupScroll(gallery1, false);  // Primera galería (scroll hacia la derecha)
setupScroll(gallery2, true);   // Segunda galería (scroll hacia la izquierda)
setupScroll(gallery3, false);  // Tercera galería (scroll hacia la derecha)
setupScroll(gallery4, true);   // Cuarta galería (scroll hacia la izquierda)
