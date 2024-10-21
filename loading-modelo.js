window.addEventListener('load', function() {
  // Espera 3 segundos antes de ocultar la pantalla de carga
  setTimeout(function() {
      document.getElementById('loader').style.display = 'none';
      document.getElementById('content').style.display = 'block';
      document.body.style.overflow = 'auto'; // Permite el desplazamiento una vez que se carga el contenido
  }, 1500); // Cambia el tiempo de espera según lo necesites (3000 ms = 3 segundos)
});


window.onload = function(){
  document.body.classList.remove('hidden'); // Elimina la clase 'hidden' del body.
}