/* **********     Curso JavaScript: 91. DOM: Ejercicios Prácticos | Responsive Tester - #jonmircha     ********** 

voy a crear una aplicacion que testee en una nueva ventana como se ve a determinada medida mi pagina!!


*/
const d= document;

export default function reponsiveTester(form){
    const $form= d.getElementById(form);
    let tester;

    //delegacion de eventos

    d.addEventListener("submit", (e)=>{
        if(e.target === $form){
            // alert("formulario enviado!!!")
            e.preventDefault();//para que no me procese el form, porq lo voy a manejar yo a eso!!
            tester= window.open(
                $form.direccion.value,
                "tester",
                `innerWidth=${$form.ancho.value}, innerHeight= ${$form.alto.value}`

            );
        }
    });

    // para cerrar la ventana con este boton

    d.addEventListener("click",(e)=>{
        if(e.target == $form.cerrar){
            tester.close();
        }

    })
}



