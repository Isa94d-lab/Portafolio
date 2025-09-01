import { proyects } from "../data/info.js";

console.log(proyects);

document.addEventListener("DOMContentLoaded", () => {
  // Popup secundario
  const popupOverlay2 = document.getElementById("popupOverlay2");
  const popupContent2 = document.getElementById("popupContent2");
  const popupClose2 = document.getElementById("popupClose2");

  // Función: abrir popup secundario con data desde info.js
  function openPopup2ById(id) {
    console.log("Lee el ID");
    // Buscar el proyect en el array (proyects es un array de arrays)
    const proyect = proyects.find(([key]) => key === id);
    if (!proyect) {
      popupContent2.innerHTML = `<p>Proyect no encontrado.</p>`;
    } else {
      const [, info] = proyect;
      popupContent2.innerHTML = `
        <div class="popUpProyect">

        <table>

          <tr>
            <td>
              <img class="imgProyect" src="${info.img}">
            </td>
            <td>
              <div class="popUpConteiner">
                <div class="title">
                  <p class="titleProyect"> ${info.name}</p>
                  <p class="lenguageProyect">${info.lenguage}</p>
                </div>
                <p class="descriptionProyect">${info.description}</p>
                <p class="collaboratorsProyect"> Colaboradores: ${info.collaborators}</p>
              </div>
            </td>
          </tr>
        </table>

      </div>
      `;
    }
    popupOverlay2.style.display = "flex";
  }

  console.log("Funciona");

  // Cerrar popup secundario
  popupClose2.addEventListener("click", () => {
    popupOverlay2.style.display = "none";
  });
  popupOverlay2.addEventListener("click", (e) => {
    if (e.target === popupOverlay2) popupOverlay2.style.display = "none";
  });

  // Delegación: escuchar clicks en el popup principal
  const popupContentPrincipal = document.getElementById("popupContent");
  if (popupContentPrincipal) {
    popupContentPrincipal.addEventListener("click", (e) => {
      const img = e.target.closest("img[data-id]");
      if (!img) return;

      // El dataset puede guardar directamente el ID de tu JSON
      // Ejemplo: data-proyect="1" o "2"
      const id = parseInt(img.dataset.id, 10);
      if (!isNaN(id)) {
        openPopup2ById(id);
      }
    });
  }
});