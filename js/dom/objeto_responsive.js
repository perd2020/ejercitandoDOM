/* **********     Curso JavaScript: 90. DOM: Ejercicios Prácticos | Responsive con JavaScript - #jonmircha     ********** */

const d=document,
    w= window;

export default function ResponsiveMedia(id, mq, mobileContent, desktopContent){
    let breakpoint = w.matchMedia(mq);//captura media query

    const responsive=(e)=>{
        if(e.matches){
            d.getElementById(id).innerHTML = desktopContent; 
        }else{
            d.getElementById(id).innerHTML = mobileContent; 

        }

        // console.log("mediaquery:", breakpoint,e.matches)
    }
    breakpoint.addListener(responsive);//advertencia
    responsive(breakpoint);
}









