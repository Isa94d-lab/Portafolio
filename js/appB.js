// Toggle del Menú (ícono de barras en la barra de navegación)
// Ubicación en HTML: <nav> → <div class="bars"><i class="fa fa-bars"></i></div>
const bars = document.querySelector(".bars");
const nav = document.querySelector("nav");

bars.onclick = () => {
  nav.classList.toggle("active"); // Muestra/oculta el menú agregando/removiendo clase "active"
};

// Reproductor de sonido + Imagen al hacer clic en el body
// Ubicación en HTML: en todo el <body>

// Reproduce un sonido cuando se hace clic
const sonido = new Audio("sounds/windows.mp3");

// Contador para limitar acciones a cierto número de clics
let clickCount = 0;
const maxClicks = 8;

// Detecta clics en cualquier parte del documento
document.body.addEventListener("click", (e) => {
  clickCount++;
  sonido.currentTime = 0; // Reinicia el audio si ya está reproduciéndose
  sonido.play();

  // Crea una imagen en la posición del clic
  const img = document.createElement("img");
  img.src = "img/imgB/TryError.png";
  img.style.position = "absolute";
  img.style.width = "180px";
  img.style.left = `${e.clientX - 50}px`; // Ajuste horizontal
  img.style.top = `${e.clientY - 50}px`;  // Ajuste vertical
  img.style.pointerEvents = "none"; // No interfiere con más clics
  img.style.zIndex = "9";
  img.style.transition = "transform 0.5s, opacity 0.5s";

  document.body.appendChild(img);

  // Remueve la imagen después de 10 segundos
  setTimeout(() => {
    img.remove();
  }, 10000);

  // Cuando se llega al número máximo de clics, muestra un popup
  if (clickCount === maxClicks) {
    mostrarPopup();
    clickCount = 0;
  }
});

// Popup con botón "RESTART"
// Ubicación en HTML: Se inyecta dinámicamente en el <body>
function mostrarPopup() {
  // Crea un fondo oscuro que cubre toda la pantalla
  const overlay = document.createElement("div");
  overlay.id = "popup-overlay";
  overlay.style.position = "fixed";
  overlay.style.top = 0;
  overlay.style.left = 0;
  overlay.style.width = "100vw";
  overlay.style.height = "100vh";
  overlay.style.backgroundColor = "rgba(0, 0, 0, 0.9)";
  overlay.style.zIndex = "9";
  overlay.style.display = "flex";
  overlay.style.justifyContent = "center";
  overlay.style.alignItems = "center";

  // Evita que el clic se propague al fondo
  overlay.addEventListener("click", (e) => e.stopPropagation());

  // Contenedor del popup (central)
  const popup = document.createElement("div");
  popup.id = "popup";
  popup.style.background = "transparent";
  popup.style.padding = "1rem";
  popup.style.borderRadius = "10px";
  popup.style.boxShadow = "0 0 20px rgba(0,0,0,0.5)";
  popup.style.zIndex = "10";
  popup.style.textAlign = "center";

  // Botón con efecto glitch (RESTART)
  const boton = document.createElement("button");
  boton.className = "ui-btn";
  boton.innerHTML = '<span data-text="RESTART">RESTART</span>';

  // Evento al hacer clic en el botón RESTART
  boton.addEventListener("click", () => {
    const span = boton.querySelector("span");

    // Cambia el color del texto al iniciar la animación
    span.style.color = "#fff";

    // Agrega clase "glitch" (debes tener animación definida en CSS)
    span.classList.add("glitch");

    // Redirige a "index.html" después de 300ms
    setTimeout(() => {
      window.location.href = "index.html";
    }, 300);
  });

  // Inserta el botón en el popup y el popup en el overlay
  popup.appendChild(boton);
  overlay.appendChild(popup);

  // Agrega todo al body
  document.body.appendChild(overlay);
}
