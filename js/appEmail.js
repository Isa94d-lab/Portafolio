document.getElementById("email").addEventListener("click", function() {
    const destinatario = "Isabelagalvis7809@gmail.com";
    const asunto = "Solicitud de reunión";
    const cuerpo = `Estimada Isabella,
Reciba un cordial saludo. Me gustaría ponerme en contacto con usted para coordinar una reunión en la que pueda compartir conmigo más información acerca de su experiencia y trayectoria.
Quedo atento(a) a su disponibilidad para agendar la fecha y hora que le resulten más convenientes.

Cordialmente,
[Tu nombre]`;

    // Permite abrir una nueva pestaña desde el correo electronico    
    const gmailLink = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(destinatario)}&su=${encodeURIComponent(asunto)}&body=${encodeURIComponent(cuerpo)}`;
    window.open(gmailLink, "_blank"); 
});
