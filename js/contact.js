document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("contact-form");

    if (!form) return;

    form.addEventListener("submit", event => {
        event.preventDefault();

        if (!form.reportValidity()) return;

        const formData = new FormData(form);

        const name = formData.get("name").trim();
        const email = formData.get("email").trim();
        const service = formData.get("service");
        const message = formData.get("message").trim();

        const whatsappMessage = `
Hola BLACKCORE.

Me gustaría realizar una consulta sobre un proyecto.

*Nombre:* ${name}
*Correo:* ${email}
*Servicio:* ${service}

*Descripción del proyecto:*
${message}

Enviado desde el sitio web de BLACKCORE.
        `.trim();

        const whatsappURL =
            `https://wa.me/51966833653?text=${encodeURIComponent(whatsappMessage)}`;

        window.open(whatsappURL, "_blank", "noopener,noreferrer");
    });
});