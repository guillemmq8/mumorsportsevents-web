document.addEventListener('DOMContentLoaded', function() {
    
    /* 1. LÓGICA DE FLECHAS SCROLL */
    const scrollContainer = document.querySelector('.horizontal-scroll-container');
    const leftBtn = document.getElementById('scrollLeft');
    const rightBtn = document.getElementById('scrollRight');

    if(scrollContainer && leftBtn && rightBtn) {
        function getScrollAmount() {
            const card = scrollContainer.querySelector('.scroll-card');
            if (card) {
                return card.offsetWidth + 30; 
            }
            return 350;
        }

        leftBtn.addEventListener('click', () => {
            const amount = getScrollAmount();
            scrollContainer.scrollBy({ left: -amount, behavior: 'smooth' });
        });

        rightBtn.addEventListener('click', () => {
            const amount = getScrollAmount();
            scrollContainer.scrollBy({ left: amount, behavior: 'smooth' });
        });
    }

    /* 2. MENÚ HAMBURGUESA (MÓVIL) */
    const menuToggle = document.getElementById('mobile-menu');
    const navLinksContainer = document.querySelector('.nav-links');

    if (menuToggle && navLinksContainer) {
        menuToggle.addEventListener('click', function() {
            navLinksContainer.classList.toggle('active');
        });
    }

    /* 3. LÓGICA DEL DESPLEGABLE EN MÓVIL (ARREGLO DEPORTES) */
    // Buscamos el enlace 'DEPORTES' que está dentro de un li.dropdown
    const deportesLink = document.querySelector('.dropdown > a');
    const dropdownLi = document.querySelector('.dropdown');

    if(deportesLink && dropdownLi) {
        deportesLink.addEventListener('click', function(e) {
            // Solo aplicamos esta lógica si es una pantalla móvil (menos de 768px)
            if (window.innerWidth <= 768) {
                // Evitamos que navegue a deportes.html inmediatamente
                e.preventDefault();
                // Alternamos la clase que muestra el submenú
                dropdownLi.classList.toggle('show-dropdown');
            }
        });
    }

    /* 4. MARCAR CAJA SELECCIONADA Y CERRAR MENÚ AL CLICAR */
    const navLinks = document.querySelectorAll('.nav-links a');

    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            // Si es el botón de deportes en móvil, no cerramos el menú todavía (queremos ver el desplegable)
            if (window.innerWidth <= 768 && this.parentElement.classList.contains('dropdown')) {
                return; 
            }

            // Si es cualquier otro enlace, cerramos el menú móvil
            if(navLinksContainer.classList.contains('active')) {
                navLinksContainer.classList.remove('active');
            }
            
            navLinks.forEach(nav => nav.classList.remove('active'));
            this.classList.add('active');
        });
    });
});