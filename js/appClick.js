document.addEventListener("DOMContentLoaded", () => {
    const popupOverlay = document.getElementById("popupOverlay");
    const popupContent = document.getElementById("popupContent");
    const popupClose = document.getElementById("popupClose");

    const info = {
        js: `
          <div class="PopUpConteiner">
            <div class="Title">JavaScript</div>
            <div class="Icons">
              <img src="img/imgC/JavaScript-F1.jpg" alt="proyecto" data-id="1" style="height:120px; width:auto;">
              <img src="img/imgC/JavaScript-CineWeb.jpg" alt="proyecto" data-id="2" style="height:120px; width:auto;">
              <img src="img/imgC/JavaScript-Portafolio.jpg" alt="proyecto" data-id="3" style="height:120px; width:auto;">
            </div>
            <link rel="stylesheet" href="css/styleC.css">
          </div>
        `,
        c: `
          <div class="PopUpConteiner">
            <div class="Title">C#</div>
            <div class="Icons">
              <img src="img/imgC/C-CampusLove.jpg" alt="proyecto" data-proyecto="c-campus" style="height:120px; width:auto;">
              <img src="img/imgC/C-Maleta.jpg" alt="proyecto" data-proyecto="c-maleta" style="height:120px; width:auto;">
              <img src="img/imgC/C-SurverySystem.jpg" alt="proyecto" data-proyecto="c-survey" style="height:120px; width:auto;">
            </div>
            <link rel="stylesheet" href="css/styleC.css">
          </div>
        `,
        python: `
          <div class="PopUpConteiner">
            <div class="Title">Python</div>
            <div class="Icons">
              <img src="img/imgC/Python-PiedraPapelTijera.jpg" alt="proyecto" data-proyecto="py-game" style="height:120px; width:auto;">
              <img src="img/imgC/Python-LigaBetplay.jpg" alt="proyecto" data-proyecto="py-liga" style="height:120px; width:auto;">
              <img src="img/imgC/Python-Question.jpg" alt="proyecto" data-proyecto="py-question" style="height:120px; width:auto;">
            </div>
            <link rel="stylesheet" href="css/styleC.css">
          </div>
        `
    };

    function openPopup(html) {
        popupContent.innerHTML = html;
        popupOverlay.style.display = "flex";
    }

    // Esto permitira unicamente cerrar el popUp con la X
    popupClose.addEventListener("click", () => {
        popupOverlay.style.display = "none";
    });

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
