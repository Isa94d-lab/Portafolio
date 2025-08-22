import { trabajos } from "../data/info.js";

export function generarTrabajos(trabajos) {
    const contenedor = document.getElementById('movieCard'); // Contenedor de las tarjetas

    // Función para limpiar el contenedor antes de agregar nuevas tarjetas
    const limpiarContenedor = () => {
        contenedor.innerHTML = ''; // Limpia el contenedor de las tarjetas
    };

    // Función para generar las tarjetas a partir de las películas
    const mostrarTrabajos = (TrabajosParaMostrar) => {
        // Limpiar el contenedor antes de agregar las tarjetas filtradas
        limpiarContenedor();

        TrabajosParaMostrar.forEach(([, trabajo]) => {
            const tarjeta = document.createElement('div');
            tarjeta.classList.add('col'); // Clase para un grid responsive

            // Crear la estructura HTML de la tarjeta
            tarjeta.innerHTML = `
                <!-- Popup Overlay -->
                <div class="popupOverlay">
                    <div class="title-work">${trabajo.lenguaje}</div>
                                <table>
                                    <tr>
                                        <img class="img-work" src="${trabajo.img}">
                                        <td><div class="name-work">${trabajo.nombre}</div></td>
                                    </tr>

                                    <tr>
                                        <img class="img-work" src="${trabajo.img2}">
                                        <td><div class="name-work">${trabajo.nombre3}</div></td>
                                    </tr>

                                    <tr>
                                        <img class="img-work" src="${trabajo.img3}">
                                        <td><div class="name-work">${trabajo.nombre3}</div></td>
                                    </tr>
                                </table>
                    </div
                </div>
            `;

            // Agregar la tarjeta al contenedor
            contenedor.appendChild(tarjeta);

            // Funcionalidad del popup
            const openPopupBtn = tarjeta.querySelector('.openPopupBtn');
            const closePopupBtn = tarjeta.querySelector('.closeBtn');
            const popupOverlay = tarjeta.querySelector('.popupOverlay');

            openPopupBtn.addEventListener('click', () => {
                popupOverlay.style.display = 'flex'; // Muestra el overlay
            });

            closePopupBtn.addEventListener('click', () => {
                popupOverlay.style.display = 'none'; // Oculta el overlay
            });

            popupOverlay.addEventListener('click', (e) => {
                if (e.target === popupOverlay) {
                    popupOverlay.style.display = 'none';
                }
            });
        });
    };

    // Mostrar todas las proyectos inicialmente
    mostrarProyectos(proyecto);


}