
/* Importar la informacion de trabajos */
import { trabajos } from './data/info.js';
/* Importamos la funcion para mostrar carpetas */
import { generarTarjetas } from './js/appClick.js';

/* Creamos una promesa para cargar la informacion necesaria */
const promesaCards = new Promise((resolve, reject) => {
    /* El tiempo que se demorara en ejecutar el bloque de codigo */
    setTimeout(() => {
        /* Para evitar el bloqueo de la pagina si ocurre algun error */
        try {
            generarTarjetas(trabajos);
            resolve('Los trabajos han sido cargadas exitosamente');
        } catch(error) {
            reject('trabajos NO encontradas')
        }
    }, 0o200); // EL tiempo
});
 
/* Si la promesa se ejecuta correctamente */
promesaCards.then((message) => {
    console.log(message);
})

/* Promesa rechasada */
.catch(err => console.warn(err))