/* **********     Curso JavaScript: 101. DOM: Ejercicios Prácticos | Validación de Formularios con HTML5 - #jonmircha     ********** */
/* **********     Curso JavaScript: 102. DOM: Ejercicios Prácticos | Validación de Formularios - #jonmircha     ********** */
/* **********     Curso JavaScript: 103. DOM: Ejercicios Prácticos | Envío de Formularios - #jonmircha     ********** */

/*
--ANTES DE JS
primero vamos a aprovechar todas las heramientas que nos brinda HTML
para la validacion de formularios
--CREACION SPAN
$span le vamos a crear debajo de cada input que tenga required un span 
    que como id tanga lo que venga en input.name,
    que texto sea lo que venga en input.title,
    que de una clase 
    y que lo cree inmediatamente debajo (afterend)del elemento al que me refiero
--VALIDACIONES
podemos estar haciendo las validaciones al momento de enciar el formulario(con el evento"submit")
    o como lo vamos a ahacer en este ejercicio, al estar tecleando (keyup)el texto..
dentro del if: para no estar escribiendo a cada rato "e.target" cree la variable
$input que almacenara cada tecla 
adicionalmente una variable para el patron(pattern), ya que cada input tiene su patron
    RECORDAR QUE EL ATRIBUTO PATTERN ES SOLO VALIDO PARA INPUTS , NO PARA TEXT AREA
    sin embargo le creamos al text area un atributo data-pattern que simula ser este atributo
    patra poder utilizar la expresion regular, con HTML solo no se puede hacer.
y dentro de esta variable vamos almacenar lo que traiga del input lo que tenga en el pattern
(si lo dejo solo asi, esto va a validar un NULL dentro del text area) asi que vamos
a utilizar un operador de CORTOCIRCUITO "|| (OR-O)" PARA ACCEDER AL lo que tenga dentro del dataset
lo que tenga en el pattern.

TODAS LAS VALIDACIONES ESTAN BASADAS EN EL ATRIBUTO REQUIRED...
----evento submit
evento que procesa nuestro formulario == submit
1° prevenir comportamiento por default de los formularios
2° alerta
3°poner un LOWDER PARA QUE EL USUARIO SEPA QUE SE ESTA PROCESANDO
    que estan con la clase "none", por eso no se visualizan 
4° simular SERVIDOR conun setimeout

*/ 

const d=document;

export default function contactFormValidation(){
    const $form=d.querySelector(".contact-form"),
    $inputs=d.querySelectorAll(".contact-form [required]");

    // console.log($inputs);

    $inputs.forEach((input)=>{
        const $span=d.createElement("span");
        $span.id=input.name;
        $span.textContent=input.title;
        $span.classList.add("contact-form-error","none");
        input.insertAdjacentElement("afterend",$span);
    });

    d.addEventListener("keyup",(e)=>{
        if(e.target.matches(".contact-form [required]")){
            let $input=e.target,
            pattern=$input.pattern || $input.dataset.pattern;
            // console.log($input, pattern);

            if(pattern && $input.value !==""){
                console.log("el input tiene patron");
                let regex= new RegExp(pattern);
                return !regex.exec($input.value)
                ?d.getElementById($input.name).classList.add("is-active")
                :d.getElementById($input.name).classList.remove("is-active");
            }

            if(pattern){
                console.log("el input NO tiene patron")
                return$input.value===""
                ?d.getElementById($input.name).classList.add("is-active")
                :d.getElementById($input.name).classList.remove("is-active");
            }
        }
    });
// enviando formulario
    d.addEventListener("submit",(e)=>{
        // e.preventDefault();
        alert("enviando formulario");

        const $loader= d.querySelector(".contact-form-loader"),
        $response = d.querySelector(".contact-form-response");

        $loader.classList.remove("none");
//simulando peticion a una api
        setTimeout(() => {
            $loader.classList.add("none");
            $response.classList.remove("none");
            $form.reset();

            //PARA LIMPIAR EL RESPONSE
            setTimeout(()=>$response.classList.add("none"),3000)


        }, 3000);
    })

}

