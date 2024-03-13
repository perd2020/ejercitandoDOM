/* **********     Curso JavaScript: 100. DOM: Video Inteligente (IntersectionObserver & VisibilityChange) - #jonmircha     ********** 
IntersectionObserver   observador del viewppport...

EL ELEMENTO "ENTRIES " ES COMO EL (e) QUE RECIBE EL ADDEVENTLISTTENER


cb      ===callback    CUANDO UNA FUNCION O UN OBJETO RECIBE UNA CALLBACK, 
        SIGNIFICA  que como parametro esta  esperando recibir una funcion
        , pero no necesariamente tiene que ver con los metodos de asincrinia,
        HAGAN DE CUENTA QUE LA CALLBACK QWUE AQUI NOS ESTA PIDIENDO INTERSECTIONOBSERVER
        ES COMO SI FUERA LA FUNCION QUE RECIBE UN EVEHNTO/// recuerden que la
        funcion para trabajar los eventos es addevntlistener , y su 
        1° parametro ==== cadena de texto que es el tipo  de evento
        ,
        2° parametro ====  una funcion o una CALLBACK  que ESPERA recibir

        asi que aqui la callback es la funcion que espera recibir ek intersectionobserver

----COMO PROPIEDADES LE PASAMOS 
threshold:0.5    --LIMITE---cuando el video aparexzca en ek viewport al 50% que lo reproduzca

programando internamente 
    vamos a decirle...
    por cada una de las entredas que va a observar con cada foreach ejecuta la siguiente programacion
    si (IF)ya ha cruzado la siguente interseccion,(ENTRY, que era cada entrda, entries eran TODAAS y entry.su metodo isIntersecting que es du INTERSECCION INDIVIDUAL)
    entonces SI SE HA DADO LA INTERSECCION...HAS ESTO...
    --ENTRY TIENE UN OBJETO QUE ES EL TARGET EL OBJETO QUE REALIZA LA INTERSECCION QUE EN ESTE CASO
    ES EL VIDEO...
    le vamos a decir..
    entry.target.play()--para reproducirlo
    ---caso contrario lo pausamos...
    entry.taget.pause()

const observer =new IntersectionObserver(cb,{threshold:0.5});---CREAMOS EL OBSERVADOR, PERO NO
        LE DIJIMOS A QUE ELEMENTO DEL DOM VAMOS A OBSERVAR


        $videos.forEach( el=> observer.observe(el));

        $videos aca tenemos todos los videos inteligentes.. por cada uno(foreach)
        (el), ejecuta la funcion => observer y el metodo observer(el) que recibe como parametro el elemento que va a observar,
        en este caso la lista de NODOS de videos

        AHORA HACER QUE EN EL MOMENTO QUE LA POAGINA PIERDA LA VISIBILIDAD, SE PAUSE EL VIDEO...
        UTILIZANDO LA PROPIEDAD"visibilityState,que devuelve un "visible"
        cuando este visible
        , el objeto windowas posee
        la propiedad visibilityChange..
        entones hay que asignar un evento y evaluar esta propiedad del document
        
        dentro del if porque HAY QUE ASIGNARLA DENTRO DE LA FUNCION QUE SE EJECUTA DENTRO DEL 
        OBSERVER

        w.addEventlistener asignamos el evento visibilitychange y resolvemos con
        un

*/
const d=document,
w=window;

export default function smartVideo(){
    const $videos=d.querySelectorAll("video[data-smart-video]");

    const cb=(entries)=>{
        entries.forEach((entry) => {
            if(entry.isIntersecting){
                entry.target.play();
            }else{
                entry.target.pause();
            }

            w.addEventListener("visibilitychange",(e) => {
                (d.visibilityState==="visible")
                ?entry.target.play()
                :entry.target.pause()
            })


        });
    }
const observer =new IntersectionObserver(cb,{threshold:0.5});
$videos.forEach( el=> observer.observe(el));

}