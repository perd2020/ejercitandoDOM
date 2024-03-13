/* **********     Curso JavaScript: 93. DOM: Ejercicios Prácticos | Detección del estado de la red - #jonmircha     ********** */

const d=document,
w=window,
n=navigator;

export default function networkStatus(){
    const isOnLine=()=>{
        const $div= d.createElement("div");

        if(n.onLine){
            alert("conexion reestablecida")
            $div.textContent="Conexion Reestablecida";
            $div.classList.add("online");
            $div.classList.remove("offline");
        }else{
            alert("conexion PERDIDA")
            $div.textContent="Conexion Perdida";
            $div.classList.add("offline");
            $div.classList.remove("online");
        }

        d.body.insertAdjacentElement("afterbegin",$div);
        //para que desaparezca el mensaje despues de 2 seg
        setTimeout(()=>d.body.removeChild($div),2000)
    };


    w.addEventListener("online",(e)=>isOnLine());
    w.addEventListener("offline",(e)=>isOnLine());
}



