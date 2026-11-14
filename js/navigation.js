document.addEventListener("DOMContentLoaded", () => {
    const menuButton = document.getElementById("menu-toggle");
    const navLinks = document.getElementById("nav-links");
    const languageButton = document.getElementById("language-toggle");

    let currentLanguage = "es";

    // Idioma inicial
    window.applyLanguage(currentLanguage);

    // Cambiar idioma
    languageButton.addEventListener("click", () => {
        currentLanguage = currentLanguage === "es" ? "en" : "es";
        window.applyLanguage(currentLanguage);
    });

    // Abrir y cerrar menú móvil
    menuButton.addEventListener("click", () => {
        const isOpen = navLinks.classList.toggle("open");

        menuButton.classList.toggle("active", isOpen);
        menuButton.setAttribute("aria-expanded", String(isOpen));
    });

    // Cerrar menú después de seleccionar una sección
    navLinks.querySelectorAll("a").forEach(link => {
        link.addEventListener("click", () => {
            navLinks.classList.remove("open");
            menuButton.classList.remove("active");
            menuButton.setAttribute("aria-expanded", "false");
        });
    });

    // Identificar la sección visible
    const sections = document.querySelectorAll(
        "#about, #capabilities, #tech-stack, #projects, #resume, #contact"    );

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const id = entry.target.id;

                navLinks.querySelectorAll("a").forEach(link => {
                    link.classList.toggle(
                        "active",
                        link.getAttribute("href") === `#${id}`
                    );
                });
            }
        });
    }, {
        threshold: 0.35
    });

    sections.forEach(section => observer.observe(section));
});