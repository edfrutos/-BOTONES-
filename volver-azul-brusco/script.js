//Botón para volver arriba con fondo azul y subida brusca//
document.querySelector("#back-to-top").addEventListener("click", function () {
    window.scrollTo(0, 0);
  });
  
  // Mostrar el botón cuando se haya desplazado hacia abajo
  window.onscroll = function () {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      document.querySelector("#back-to-top").style.display = "block";
    } else {
      document.querySelector("#back-to-top").style.display = "none";
    }
  };
  