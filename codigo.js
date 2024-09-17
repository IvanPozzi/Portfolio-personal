codigo.js
    
        // Espera a que el documento esté cargado
        document.addEventListener("DOMContentLoaded", function() {
            // elige el contenedor que va a usar
            const goToSobreMi = document.getElementById('goToSobreMi');

            // recibe el click en el contenedor
            goToSobreMi.addEventListener('click', function() {
                // Selecciona  "Sobre mi"
                const sobreMiSection = document.getElementById('sobreMi');

                // se mueve asta la seccion que queres
                sobreMiSection.scrollIntoView({ behavior: 'smooth' });
            });
        });

             
             document.addEventListener("DOMContentLoaded", function() {
            
            const goToSobreMi = document.getElementById('goToProyectos');

            
            goToSobreMi.addEventListener('click', function() {
                
                const sobreMiSection = document.getElementById('Proyectos');

                
                sobreMiSection.scrollIntoView({ behavior: 'smooth' });
            });
        });
                
                document.addEventListener("DOMContentLoaded", function() {
            
            const goToSobreMi = document.getElementById('goconosimientos');

            
            goToSobreMi.addEventListener('click', function() {
                
                const sobreMiSection = document.getElementById('conosimientos');

                
                sobreMiSection.scrollIntoView({ behavior: 'smooth' });
            });
        });
    
                
                document.addEventListener("DOMContentLoaded", function() {
            
            const goToSobreMi = document.getElementById('gotocontactos');

            
            goToSobreMi.addEventListener('click', function() {
                
                const sobreMiSection = document.getElementById('contactos');

                
                sobreMiSection.scrollIntoView({ behavior: 'smooth' });
            });
        });

   
    