/* **********     Curso JavaScript: 81. DOM: Ejercicios Prácticos | Menú de Hamburguesa - #jonmircha     ********** */

/* 1°---vamos a exportar por default una funcion que se llame "hamburguerMenu"
que elementos necesitara esta funcion? * creo una variable para el boton que activa=panelBtn
                                        *creo otra para el panel que es el elemento que vamos a mover

DELEGACION DE EVENTOS. reo una constantre que se va a llamar"d" que reemplaza a la palabra reservada "document"
        TODO lo que tiene que ver con el DOM comienza con el document.algo, PARA SIMPLIFICAR NUESTRO CODIGO

    VAMOS a asignar mediante la asignacion de eventos, el evento CLICK al document
     *despues vamos a decirle: if e.target.matches (EL OBJETO QUE ORIGINA EL EVENTO coincide con),
    el selector que me estas DANDO en la variable PANELBTN,
    eso significa que en EL ARCHIVO INDEX_DOM.JS vamos a importar
        
5°---matches esta esperando un selector valido, y en el1° if es donde con el boton del 
        panelyo quiero poner o sacar el estado " is -active" que tengo 
        creado en css para visualizar algo, loq ue sea, 
        en este caso el menu de navegacion de la pagina
6°-- si coincide , busca en el documento la etiqueta que coindia
    con lo ingresado en panel,
    luego
7°--- entra a su lista de clases(classlist)
8°--- utiliza el metod de intercambio "toggle" y vas a agregarle si NO tiene 
        y quitarle si lo tiene , estado "is-active"

        --PROBAMOS Y EL BOTON NO FUNCIONAAA!!--
        porque paso esto' porque hay que tebneer cuidado con la delefasion de evntos
        ¡¡ ojo!! -- porque le asigne la funcionalidaad al boton Y DENTRO DEL BOTON HAY OTRA ETIQUETA!!
9°--- SOLUCION: CUANDO EL ELEMNTO BOTON QUE ORIGINA EL EVENTO SEA UN BOTON
        CUALQUIE ELEMNTO DENTRO DE LA ETIQUETA/SELECTOR VALIDO
        HEREDARA ESTA FUNCIONALIDAD: en css un metodo valido es usar " * " asteristo para 
        que abarque TODO lo que este dentro de la etiqueta, por ejemplo asi:" panel-btn *  ".
        asi le estoy diciendo que aplique un estilo a panel-boton y a sus HIJOS.
        SIGUIENDO ESTO ENTONCES --
        se lo agregamos al CONDICIONAL  del objeto que origino el 
        evento:
        if(e.target.matches(panelBtn)|| e.target.matches(`${panelBtn} *`)){}

        TAMBIEN ALBOTON PARA QUE SE ACTIVE Y SE APAGUE

10°---menuLink: el que me lleva a la 




*/

export default function hamburguerMenu(panelBtn, panel,menuLink){
    const d=document;

    d.addEventListener("click",(e) => {
        if(e.target.matches(panelBtn)|| e.target.matches(`${panelBtn} *`)){
            d.querySelector(panel).classList.toggle("is-active");
            d.querySelector(panelBtn).classList.toggle("is-active");
        }

        if(e.target.matches(menuLink)){
            d.querySelector(panel).classList.remove("is-active");
            d.querySelector(panelBtn).classList.remove("is-active");

        }
    })
};







