/* **********     Curso JavaScript: 85. DOM: Ejercicios | Eventos del Teclado (movimientos y colisiones) - #jonmircha     ********** */
const d= document;
let x=0,
    y=0;

export function moveBall(e,ball, stage){
    const $ball=d.querySelector(ball),
        $stage=d.querySelector(stage),
        limitsBall=$ball.getBoundingClientRect(),
        limitsStage=$stage.getBoundingClientRect();
        // console.log(e.keyCode);
        // console.log(e.key);
        // console.log(limitsBall,limitsStage);



        switch (e.keyCode) {
            
            case 37:
                // move("left") IZQUIERDA; x--
                if(limitsBall.left > limitsStage.left){
                x--;
            }
            e.preventDefault();
            break;
            
            case 38:
                // move("up");top  y--
                if(limitsBall.top > limitsStage.top){
                    y--;
                }
                e.preventDefault();
                break;
                
                case 39:
                    // move("rigth");DERECHA x++
                    if(limitsBall.right < limitsStage.right){
                        x++;
                    }
                    e.preventDefault();
            break;
            
            case 40:
                // move("down");bottom y++
                if(limitsBall.bottom < limitsStage.bottom){
                    y++;
                } 
                e.preventDefault();
            break;
            
            default:
                break;
            }
            
            $ball.style.transform="translate"+"("+x*10+"px"+","+y*10+"px"+")";
            // $ball.style.transform= `translate ( ${y*10}px, ${x*10}px)`;
            // $ball.style.transform= `translate ( ${x*10}px, ${y*10}px)`;
};

export function shortcuts (e){
    // console.log(e.type);
    // console.log(e.key);
    // console.log(e.keyCode);
    // console.log(e.ctrlkey);
    // console.log(e.altkey);
    // console.log(e);

    if(e.key==="a" && e.altKey){
        alert("haz lanzado un alerta con el teclado");
    }
    if(e.key==="c" && e.altKey){
        alert("haz lanzado un confirm con el teclado");
    }
    if(e.key==="p" && e.altKey){
        alert("haz lanzado un prompt con el teclado");
    }
}