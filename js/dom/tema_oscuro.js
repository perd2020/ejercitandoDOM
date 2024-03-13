/* **********     Curso JavaScript: 88. DOM: Ejercicios Prácticos | Tema Dark / Light - #jonmircha     ********** */
const d = document,
    ls= localStorage;

export default function darkTheme(btn, classDark){
    const $themeBtn = d.querySelector(btn),
        $selectors =d.querySelectorAll("[data-dark]");

    let moon= "🌙",
        sun="☀";

        const lightMode=()=>{
            $selectors.forEach(el => el.classList.remove(classDark));
                    $themeBtn.textContent =moon;
                    ls.setItem("theme","light");
        }
        const darktMode=()=>{
            $selectors.forEach(el => el.classList.add(classDark));
                    $themeBtn.textContent =sun;
                    ls.setItem("theme","dark");
        }

        d.addEventListener("click",(e)=>{
            if(e.target.matches(btn)){
                if($themeBtn.textContent === moon){
                    darktMode();
                }else{                    
                    lightMode();
                }
            }
        });
d.addEventListener("DOMContentLoaded", (e)=>{
    if(ls.getItem("theme") === null) ls.setItem("theme", "ligth");   
    if(ls.getItem("theme")=== "light") lightMode();
    if(ls.getItem("theme")=== "dark") darktMode();
    
})
};


/* **********     Curso JavaScript: 89. DOM: Ejercicios Prácticos | API localStorage - #jonmircha     ********** */
