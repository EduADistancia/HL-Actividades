import { descargar } from "./componentes/captura.js";
import { cargarDatos } from "./componentes/carga.js";
import { cambiarEstiloSeleccion } from "./componentes/checkItems.js";

// Ruta del cuestionario
const rutaCuestionario = './data/OVMisPreferencias.json';

window.addEventListener("DOMContentLoaded", evento => {
    cargarDatos(rutaCuestionario);
    setTimeout(cambiarEstiloSeleccion, 500);
});

let capturar = document.getElementById('descarga');
    capturar.addEventListener('click', ev => {
        descargar('#captura');
    });