document.addEventListener("DOMContentLoaded", () => {
    const popupOverlay = document.getElementById("popupOverlay");
    const popupContent = document.getElementById("popupContent");
    const popupClose = document.getElementById("popupClose");

    // Bloques de HTML para cada icono
    const info = {
        js: `
          <div class="PopUpConteiner">
            <div class="Title">JavaScript</div>
            <div class="Icons">
              <img src="img/imgC/F1-Icon.jpg" alt="proyecto" style="height:120px; width:auto;">
              <img src="img/imgC/Netflix-Icon.jpg" alt="proyecto" style="height:120px; width:auto;">
              <img src="img/imgC/Portafolio-Icon.jpg" alt="proyecto" style="height:120px; width:auto;">
            </div>
            <link rel="stylesheet" href="css/styleC.css">
          </div>
        `,
        c: `
          <div class="PopUpConteiner">
            <div class="Title">JavaScript</div>
            <div class="Icons">
              <img src="img/imgC/F1-Icon.jpg" alt="proyecto" style="height:120px; width:auto;">
              <img src="img/imgC/Netflix-Icon.jpg" alt="proyecto" style="height:120px; width:auto;">
              <img src="img/imgC/Portafolio-Icon.jpg" alt="proyecto" style="height:120px; width:auto;">
            </div>
            <link rel="stylesheet" href="css/styleC.css">
          </div>
        `,
        python: `
          <div class="PopUpConteiner">
            <div class="Title">JavaScript</div>
            <div class="Icons">
              <img src="img/imgC/F1-Icon.jpg" alt="proyecto" style="height:120px; width:auto;">
              <img src="img/imgC/Netflix-Icon.jpg" alt="proyecto" style="height:120px; width:auto;">
              <img src="img/imgC/Portafolio-Icon.jpg" alt="proyecto" style="height:120px; width:auto;">
            </div>
            <link rel="stylesheet" href="css/styleC.css">
          </div>
        `
    };

    // Función para abrir popup con HTML
    function openPopup(html) {
        popupContent.innerHTML = html;
        popupOverlay.style.display = "flex";
    }

    // Cerrar popup
    popupClose.addEventListener("click", () => {
        popupOverlay.style.display = "none";
    });

    popupOverlay.addEventListener("click", (e) => {
        if (e.target === popupOverlay) popupOverlay.style.display = "none";
    });

    // Asignar eventos a íconos
    document.querySelector(".Icon[src*='SoloJS.gif']").addEventListener("click", () => {
        openPopup(info.js);
    });

    document.querySelector(".Icon[src*='SoloC.gif']").addEventListener("click", () => {
        openPopup(info.c);
    });

    document.querySelector(".Icon[src*='SoloPython.gif']").addEventListener("click", () => {
        openPopup(info.python);
    });
});
