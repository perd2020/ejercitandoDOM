/* **********     Curso JavaScript: 104. DOM: Ejercicios Prácticos | 
Narrador (Lector de Voz) - #jonmircha     ********** 






w.speechSynthesis.getVoices(); ==== el navegador no lomdetecta inmediatamente
    debe ejecutar su propia evento, por eso cuando coloca el console log


*/
const d=document,
w= window;

export default function speechReader(){
    const $speechSelect=d.getElementById("speech-select"),
            $speechTextArea=d.getElementById("speech-text"),
            $speechBtn=d.getElementById("speech-btn"),
            speechMessage=new SpeechSynthesisUtterance();
            console.log(speechMessage);

            let voices=[];
            console.log(voices);


// ASIGNANDO 3 EVENTOS, EL PRIMERO AL NAVEGADOR
            d.addEventListener("DOMContentLoaded",(e)=>{     
                // obtener voces
                w.speechSynthesis.addEventListener("voiceschanged",(e)=>{
                    voices=w.speechSynthesis.getVoices();                    
                    console.log(voices);
                    // agregar cada una de estas voces "voice" en option en mi select
                    voices.forEach(voice => {
                        const $option=d.createElement("option");
                        $option.value=voice.name;
                        $option.textContent=`${voice.name} *** ${voice.lang}`;
                        $speechSelect.appendChild($option);
                    });
                })
            });

// PARA CAMBIAR ENTRE OPCIONES DE VOCES,cada vez que haya un cambio en el spech select, cambie tambien la voz
//y se la signe a la variable de
            d.addEventListener("change",(e)=>{
                if(e.target === $speechSelect){
                    speechMessage.voice = voices.find(
                        (voice)=>voice.name === e.target.value
                    )
                }
                console.log(speechMessage)
            });

// PARA DARLE CLICK AL BOTON, asignando en la prop text de lo que venga en el text area
// y pedirle a speechsynthesis que hable con su metodo speak
            d.addEventListener("click",(e)=>{
                if(e.target === $speechBtn){
                    speechMessage.text=$speechTextArea.value;
                    w.speechSynthesis.speak(speechMessage);
                }
            });
}