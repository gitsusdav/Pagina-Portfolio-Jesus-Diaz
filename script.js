 
 document.addEventListener("DOMContentLoaded", function() {
      var navbar = document.getElementById("navbar");
      var sobreMiSection = document.getElementById("sobreMi");
      var nombres = document.getElementsByClassName("sobreMi-element");


      //volver la opacidad de la section sobreMi 0
      for (let index = 0; index < nombres.length; index++) {
        const element = nombres[index];
        element.style.opacity = "0";
       }

      
      function toggleNavbarClass() {
        
        if (window.scrollY >= sobreMiSection.offsetTop - navbar.clientHeight) {
          navbar.classList.add("bg-dark");
          
          //hacer aparecer la seccion sobreMi
          for (let index = 0; index < nombres.length; index++) {
            var element = nombres[index];
            element.style.opacity = "1";
           }
        } 
        else 
        {
          navbar.classList.remove("bg-dark");
        }
      }
  
      // Cambiar la clase del navbar al hacer scroll
      window.addEventListener("scroll", toggleNavbarClass);
  
      // Llamar a toggleNavbarClass al cargar la página (por si ya está en la sección "Sobre Mí" al principio)
      toggleNavbarClass();
    });