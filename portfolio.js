document.addEventListener('DOMContentLoaded', function() {
    
    // === CONTROL DE MODO CLARO / OSCURO ===
    const themeToggle = document.getElementById('themeToggle');
    const themeIcon = document.getElementById('themeIcon');
    const themeText = document.getElementById('themeText');
    const htmlElement = document.documentElement;

    // Verificar si el usuario ya guardó una preferencia de tema previamente
    const savedTheme = localStorage.getItem('portfolioTheme') || 'dark';
    setTheme(savedTheme);

    themeToggle.addEventListener('click', function() {
        // Intercambiar el tema activo
        const currentTheme = htmlElement.getAttribute('data-bs-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        setTheme(newTheme);
    });

    function setTheme(theme) {
        htmlElement.setAttribute('data-bs-theme', theme);
        localStorage.setItem('portfolioTheme', theme);

        if (theme === 'dark') {
            themeIcon.className = 'bi bi-sun-fill me-2';
            themeText.textContent = 'Modo Claro';
        } else {
            themeIcon.className = 'bi bi-moon-fill me-2';
            themeText.textContent = 'Modo Oscuro';
        }
    }

    // === SIMULACIÓN DE FORMULARIO DE CONTACTO ===
    const contactForm = document.getElementById('contactForm');
    const contactAlert = document.getElementById('contactAlert');

    if (contactForm) {
        contactForm.addEventListener('submit', function(event) {
            event.preventDefault(); // Detener envío real

            const email = document.getElementById('contactEmail').value;
            
            // Inyectar una alerta dinámica de Bootstrap
            contactAlert.innerHTML = `
                <div class="alert alert-success alert-dismissible fade show border-0" role="alert" style="background-color: rgba(16, 185, 129, 0.15); color: #34d399;">
                    <strong>¡Tu mensaje fue enviado con éxito!</strong> Gracias por visitar mi portafolio, me comunicaré contigo a <em>${email}</em>.
                    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                </div>
            `;

            // Limpiar campos del formulario
            contactForm.reset();
        });
    }
});