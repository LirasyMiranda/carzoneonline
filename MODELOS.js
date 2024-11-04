function mostrarElemento1() {
  var elemento1 = document.getElementById("opcion1");
  var elemento2 = document.getElementById("opcion2");
  var elemento3 = document.getElementById("opcion3");
  var elemento4 = document.getElementById("opcion4");
  elemento1.style.display = "block";
  elemento2.style.display = "none";
  elemento3.style.display = "none"; // Cambia a display: block
  elemento4.style.display = "none";
}

  function mostrarElemento2() {
  var elemento2 = document.getElementById("opcion2");
  var elemento3 = document.getElementById("opcion3");
  var elemento4 = document.getElementById("opcion4");
  elemento2.style.display = "block";
  elemento3.style.display = "none"; // Cambia a display: block
  elemento4.style.display = "none";
}

  function mostrarElemento3() {
  var elemento2 = document.getElementById("opcion2");
  var elemento3 = document.getElementById("opcion3");
  var elemento4 = document.getElementById("opcion4");
  elemento2.style.display = "none";
  elemento3.style.display = "block"; // Cambia a display: block
  elemento4.style.display = "none";
}

function mostrarElemento4() {
  var elemento2 = document.getElementById("opcion2");
  var elemento3 = document.getElementById("opcion3");
  var elemento4 = document.getElementById("opcion4");
  elemento2.style.display = "none";
  elemento3.style.display = "none"; // Cambia a display: block
  elemento4.style.display = "block";
}






const parrafos = [
  document.querySelector('.par'),
  document.querySelector('.par2'),
  document.querySelector('.par3'),
  document.querySelector('.par4')
];

parrafos.forEach(parrafo => {
  parrafo.addEventListener('click', function(event) {
    // Eliminar la clase "active" de todos los párrafos
    parrafos.forEach(p => p.classList.remove('active'));
    parrafos.forEach(p => p.classList.add('parrafo'));

    // Agregar la clase "active" solo al párrafo clicado
    parrafo.classList.add('active');
    parrafo.classList.remove('parrafo');
  });
});



//Ocultar Menu Opciones 
function toggleMenu2() {
  const chevronRight = document.getElementById('chevron-right');
  const chevronLeft = document.getElementById('chevron-left');
  const opciones = document.getElementById('div-opciones-f');
  const opciones2 = document.getElementById('div-opciones-f-2');
  const icon = document.getElementById('div-icon-fixed');
  const width2 = document.getElementById('nashee');


  if (chevronRight.style.display === 'none') {
      chevronRight.style.display = 'block';
      chevronLeft.style.display = 'none';
      opciones.style.width = '0px';
      opciones2.style.display = 'none';
      icon.style.borderBottomRightRadius = '8px';
      icon.style.borderTopRightRadius = '8px';
      width2.style.width = '20px';

  } else {
      chevronRight.style.display = 'none';
      chevronLeft.style.display = 'block';
      opciones.style.width = '165px';
      opciones2.style.display = 'block';
      icon.style.borderBottomRightRadius = '0';
      icon.style.borderTopRightRadius = '0';
      width2.style.width = '165px';  
  }
}


//Menu Mobile
function toggleMenu() {
  const menu = document.querySelector('.menu');
  const menuIcon = document.getElementById('menu-icon');
  const headermobile = document.querySelector('.header-mobile');

  menu.classList.toggle('open');
  headermobile.classList.toggle('open');
  
  // Cambia el ícono del menú por una cruz al abrir el menú
  if (menu.classList.contains('open')) {
      menuIcon.classList.remove('bx-menu');
      menuIcon.classList.add('bx-x');
  } else {
      menuIcon.classList.remove('bx-x');
      menuIcon.classList.add('bx-menu');
  }
}





//Fixed menu
window.addEventListener('scroll', function() {
  const targetElement = document.querySelector('.box-para'); // El elemento que detona la acción
  const elementToChange = document.querySelector('.section-menu-modelo-fixed'); // El elemento al que se le agrega la clase
  const lastmodel = document.querySelector('.box-para');

  const triggerPoint = targetElement.getBoundingClientRect().top;

  if (triggerPoint <= 0) {
      elementToChange.classList.add('fixed');
      lastmodel.classList.add('box-para-fixed');
  } else {
      elementToChange.classList.remove('fixed');
      lastmodel.classList.remove('box-para-fixed');
  }
});