document.addEventListener('DOMContentLoaded', function() {
    
    /* 1. LÓGICA DE FLECHAS SCROLL (DINÁMICA) */
    const scrollContainer = document.querySelector('.horizontal-scroll-container');
    const leftBtn = document.getElementById('scrollLeft');
    const rightBtn = document.getElementById('scrollRight');

    if(scrollContainer && leftBtn && rightBtn) {
        function getScrollAmount() {
            const card = scrollContainer.querySelector('.scroll-card');
            if (card) {
                // Calculamos el 'gap' (espacio) real que hay en el CSS
                const style = window.getComputedStyle(scrollContainer);
                const gap = parseInt(style.gap) || 0;
                
                // El desplazamiento es el ancho de la tarjeta + el espacio
                return card.offsetWidth + gap; 
            }
            return 350; // Valor de seguridad
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

    /* 3. CERRAR MENÚ AL CLICAR EN ENLACE */
    const navLinks = document.querySelectorAll('.nav-links a');

    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            
            // Si el menú está abierto, lo cerramos
            if(navLinksContainer.classList.contains('active')) {
                navLinksContainer.classList.remove('active');
            }
            
            navLinks.forEach(nav => nav.classList.remove('active'));
            this.classList.add('active');
        });
    });
});