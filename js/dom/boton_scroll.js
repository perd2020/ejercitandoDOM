/* **********     Curso JavaScript: 87. DOM: Ejercicios Prácticos | Botón de Scroll - #jonmircha     ********** */
const d = document,
    w =window;

    console.log(w)

    //pageYOffset esta en deshuso

export default function scrollTopButton(btn){
    const scrollBtn = d.querySelector(btn);

    w.addEventListener("scroll", e=>{
        let scrollTop=window.scrollY||d.documentElement.scrollTop;

        if(scrollTop> 300){
            $scroll.classList.remove("hidden");
        }else{
            $scrollBtn.classList.add("hidden");
        }
    });
    d.addEventListener("click",(e)=>{
        if(e.target.matches(btn)){
            w.scrollTo({
                behavior :"smooth",
                top:0
            });
        }
    });
};



