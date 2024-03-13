import countdown from "./dom/cuenta_regresiva.js";
import hamburguerMenu from "./dom/menu_hamburguesa.js";
import ResponsiveMedia from "./dom/objeto_responsive.js";
import { digitalClock,alarm } from "./dom/reloj.js";
import { shortcuts } from "./dom/teclado.js";
import { moveBall } from "./dom/teclado.js";
import darkTheme from "./dom/tema_oscuro.js";
import reponsiveTester from "./dom/prueba_responsive.js"
import userDeviceInfo from "./dom/deteccion_dispositivos.js";
import networkStatus from "./dom/deteccion_red.js";
import WebCam from "./dom/deteccion_webcam.js";
import getGeoLocation from "./dom/geolocalizacion.js";
import searchFilters from "./dom/filtros_busqueda.js";
import draw from "./dom/sorteo.js";
import slider from "./dom/carrusel.js";
import ScrollSpy from "./dom/scroll_espia.js";
import smartVideo from "./dom/video_inteligente.js";
import contactFormValidation from "./dom/validaciones_formulario.js";
import speechReader from "./dom/narrador.js";
import scrollTopButton from "./dom/boton_scroll.js"

/* **********     Curso JavaScript: 80. DOM: Ejercicios Prácticos | Presentación - #jonmircha     ********** 

2°---esta detectando el import, y al traerme la funcion "hamburguerMenu"
completa automaticamente arriba || la importacion , solo que debo colocar 
.js al archivo, ya que es una herramienta para react(extensiones: simple react snippets, y es7 react)

*parametros para la funcion que acabo de LLAMAR!!||IMPORTAR. panelBtn:".panel-boton" que es el selector 
que ya tengo como class en html para el boton
que va a abrir el menu
                            y el selector ".panel" QUE TENGO EN EL ASIDE DEL HTML QUE ENVUELVE TOOOODOOO LO QUE VAYA A AGREGAR A ESE SECTOR 
                            : elemento que vamos a mover
3°--- ASI ESTOY invocando la funcion

*DONDE ES EL MEJOR LUGAR PARA ASIGNAR LA CARGA AL DOM???
EVENTO WINDOW LOW|| EVENTO DOCUMENT DOM CONTENT LOW que de hecho es mejor
-¡¡¡-para asignar laas funcionalidades que queremos al cargar le PAGINA!!


4° EN ESTE ARCHIVO INDEX.JS VOY A IR CARGANDO E IMPORTANDO TODOS LOS ARCHIVOS!!
    -- VOLVEMOS A SIMPLIFICAR CON d PARA GUARDAR EL document
    --le asignamos el evento a el evento DOMContentLoaded y dentro hago 
    INVOCAMOS LAS FUNCIONES!!
    *hamburguerMenu(panelBtn,panel)
    *
11°---y le agrego un nuevo parametro para que cualquier enlace que este en el menu pueda activar esta funcion

VENTAJA DE MODULARIZAR : REUTILIZACION 
*/


const d = document;


//todo lo que se va a ejecutar cuando se cargue el DOM....
// 1° creo funcion export, 2° escribo aca el nombre de la funcion, 3° me fijo si se import correctacmente!!
d.addEventListener("DOMContentLoaded", (e)=>{
    hamburguerMenu(".panel-btn",".panel",".menu a")
    digitalClock("#reloj","#activar-reloj","#desactivar-reloj");
    alarm("/assets/alarma.mp3","#activar-alarma","#desactivar-alarma");
    countdown("countdown", "junary 29,2025 21:22:00","feliz cumpleaños!!🥧❤🧡💛🎈🎆");
    
    scrollTopButton(".scroll-top-btn");
    
    ResponsiveMedia("gmaps",
    "(min-width:1024px",
    `<a href="https://maps.app.goo.gl/72RoEAkxsaCMtsSi6">ver mapa</a>`,//enlace para mobile
    `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13136.023664708453!2d-58.42114179266767!3d-34.60401190721018!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcca8600a88ccd%3A0xed3a53d6b2e5ebe7!2sAv.%20Corrientes%2C%20Buenos%20Aires!5e0!3m2!1ses-419!2sar!4v1708317113421!5m2!1ses-419!2sar" 
    width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" 
    referrerpolicy="no-referrer-when-downgrade"></iframe>`);//imagen para escritorio
    ResponsiveMedia("youtube",
    "(min-width:1024px",
    `<a href="https://youtu.be/0F0uZxF_fwQ?si=mTmRZ-IbUOuT2_WJ">ver video </a>`,//enlace para mobile
    `<iframe width="560" height="315" src="https://www.youtube.com/embed/0F0uZxF_fwQ?si=SXyi6pI8ypspGu8H" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`);//video para escritorio
    
    reponsiveTester("responsive-tester");
    userDeviceInfo("user-device");
    WebCam("webcam");
    getGeoLocation("geolocation");
    searchFilters(".card-filter",".card");
    draw("#winner-btn",".player");
    slider();
    ScrollSpy();
    smartVideo();
    contactFormValidation();
});

// FUNCIONES QUE UTILIZAN DENTRO EL DOMContentLoad

//BOLITA

d.addEventListener("keydown", (e)=>{
    shortcuts(e);
    moveBall(e,".ball",".stage")
})

//TEMA OSCURO
darkTheme(".dark-theme-btn","dark-mode");
//deteccion de r4ed
networkStatus();
// NARRADOR
speechReader();

