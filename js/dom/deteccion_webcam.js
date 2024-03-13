/* **********     Curso JavaScript: 94. DOM: Ejercicios Prácticos | Detección de la WebCam - #jonmircha     ********** */
const d= document,
n=navigator;

export default function WebCam(id){
    const $video=d.getElementById(id);
    // console.log(n.mediaDevices.getUserMedia)

    //validacion que se supone que en navegadores modernos ya no es necesario

    if(n.mediaDevices.getUserMedia){
        n.mediaDevices.getUserMedia({video:true, audio:false}).then((stream)=>{
            console.log(stream);
            $video.srcObject =stream;
            $video.play();
        })
        .catch((err)=>{
            $video.insertAdjacentHTML("beforebegin",`<p>ERROR!!:<mark> ${err}</mark></p>`)
            // console.log(`hubo un error : ${err}`)

        });
    }
}