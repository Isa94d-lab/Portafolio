import { proyects } from "../data/info.js";

document.addEventListener("DOMContentLoaded", () => {
  const popupOverlay2 = document.getElementById("popupOverlay2");
  const popupContent2 = document.getElementById("popupContent2");
  const popupClose2 = document.getElementById("popupClose2");

  function openPopup2ById(id) {
    const proyect = proyects.find(([key]) => key === id);
    if (!proyect) {
      popupContent2.innerHTML = `<p>Proyect no encontrado.</p>`;
    } else {
      const [, info] = proyect;

      
      // Genera la lista de colaboradores con sus links
      const collaboratorsHTML = info.collaborators
        .map((colaborador, index) => {
          return `<a class="trying" href="${info.collaborators2[index]}" target="_blank">${colaborador}</a>`;
        })
        .join(", "); 


        
      popupContent2.innerHTML = `
        <div class="popUpProyect">
          <table>
            <tr>
              <td>
                <a href="${info.rpg}" target="_blank"> <img class="imgProyect" src="${info.img}"> </a>
              </td>
              <td>
                <div class="popUpConteiner">
                  <div class="title">
                    <p class="titleProyect" data-id="${info.ID}">${info.name}</p>
                    <p class="lenguageProyect" data-id="${info.ID}">${info.lenguage}</p>
                  </div>
                  <p class="descriptionProyect">${info.description}</p>
                  <p class="collaboratorsProyect">Colaboradores: ${collaboratorsHTML}</p>
                </div>
              </td>
            </tr>
          </table>
        </div>
      `;
    }
    popupOverlay2.style.display = "flex";
  }

  // Esto permitira unicamente cerrar el popUp con la X
  popupClose2.addEventListener("click", () => {
    popupOverlay2.style.display = "none";
  });

  const popupContentPrincipal = document.getElementById("popupContent");
  if (popupContentPrincipal) {
    popupContentPrincipal.addEventListener("click", (e) => {
      const img = e.target.closest("img[data-id]");
      if (!img) return;

      const id = parseInt(img.dataset.id, 10);
      if (!isNaN(id)) {
        openPopup2ById(id);
      }
    });
  }

  
});
