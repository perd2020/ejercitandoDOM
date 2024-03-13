/* **********     Curso JavaScript: 95. DOM: Ejercicios Prácticos | Detección de la Geolocalización - #jonmircha     ********** */
const d= document,
n=navigator;
export default function getGeoLocation(id){
    const $id = d.getElementById(id),
    options={
        enableHighAccuracy:true,
        timeout:500,
        maximumAge:0
    };

    const success=(position) =>{
        let coords= position.coords;
        // console.log(position)

        $id.innerHTML=`
            <p>Tu posicion actual es.:</p>
            <ul>
                <li>Latitud: <b>${coords.latitude}</b></li>
                <li>Longitud: <b>${coords.longitude}</b></li>
                <li>Precision: <b>${coords.accuracy}</b></li>
            </ul>
            <a href="https://www.google.com/maps/@${coords.latitude},${coords.longitude},15z" target="_blank" rel="noopener">ver en googleMaps</a>
        `
    }
    const err=(err) =>{
        $id.innerHTML=`<p>ERROR :codigo #<mark>${err.code}</mark></p><p>, mensaje:<mark>${err.message}</mark></p>`
        
    }

    n.geolocation.getCurrentPosition(success,err,options);

}



