/* **********     Curso JavaScript: 92. DOM: Ejercicios Prácticos | Detección de Dispositivos User Agent - #jonmircha     ********** 

lo que vamos a hacer aca es que la app detecte desde que dispositivo se esta conectando 
el cliente, y poder redirigirlo a la version de mi app mas conveniente para el
o generara contenido esclusivo para ese dispositivo
*/

//resumiendo los nombres de elementos que voy a estar utilizando en este ejercicio
/*
DESDE NAVIGATOR PODEMOS OBTENER:MUCHA INFORMACION QUE NOS PUEDE AYUDAR
Y userAgent traera mucha info especifica sobre que dispositivo, navegador, etc utiliza el usuar

ojo.. todos los navegadores moderno devuelven "modzilla " por haberse basado en él

porque "any "esta declarada en una funcion anonima:
    porque hace referencia a los otros propiedades de este objeto con this
    SI UTILIZARIA UNA ARTROW FUNTION, YA EL CONTEXTO 
    NO SERIA ESTE OBJETO, SINO ELONJEETO FATHER EL CONTEXTO DONDE SE AHA CREAADO ,O SEA ...USER DIVECE



*/
const d=document,
n=navigator,
ua=navigator.userAgent;

//UTILIZANDO VALIDACIONES
/*
como vas a hacer?
creando tres objetos. Y USANDO EXPRESIONES REGULARES
luego de detectara si coincide la palabra ,CONLA BANDERA 
i: NO TOMARA EN CUENTA MAYUSCULAS Y MINUSCULAS...
ANY: METODO PARA CUALQUIER DISPOSITIVO  cualquier navegador
sin nimportar
    el sistema operativo
isMobile, isDesktop, isBrowser.
y cada una posee sus validaciones

ie: internet explorer
*/
export default function userDeviceInfo(id) {
    const $id = d.getElementById(id),
    isMobile={
        android:()=>ua.match(/android/i),
        ios:()=>ua.match(/iphone|ipod|ipad/i),
        windows:()=>ua.match(/windows-phone/i),
        any:function () {
            return (this.android()||
            this.ios()||
            this.windows())
        }
    }, 
    isDesktop={
        linux:()=>ua.match(/linux/i),
        mac:()=>ua.match(/mac-os/i),
        windows:()=>ua.match(/windows.nt/i),
        any:function () {
            return ( this.linux()||this.mac()||this.windows())
        }
    }, 
    isBrowser={
        chrome:()=>ua.match(/chrome/i),
        safari:()=>ua.match(/safari/i),
        firefox:()=>ua.match(/firefox/i),
        opera:()=>ua.match(/opera|opera-mini/i),
        ie:()=>ua.match(/msie|iemobile/i),
        edge:()=>ua.match(/edge/i),
        any:function () {
            return (
            this.ie()||
            this.edge()||
            this.safari()||
            this.firefox()||
            this.chrome()||
            this.opera()
            );
        }
    };


// console.log(ua);
// console.log(isMobile.android());
// console.log(isBrowser.chrome());
// console.log(isDesktop.windows());
// console.log(isBrowser.firefox());
// console.log(isDesktop.any());

$id.innerHTML=`
<ul>
<li>Use Agent: <b>${ua}<b></li>
<li>Plataforma: <b>${isMobile.any()?isMobile.any():isDesktop.any()}<b></li>
</ul>

`;

/* gregar contenido exclusivo para un dispositivo espedifico 

+= APARTE DE EL CONTENIDO PARA TODOS LOS DISPOSITIVOS AGREGALE ESTE
*/
if(isBrowser.chrome()){
    $id.innerHTML+= `<p><mark>este contenido es solo para chrome</mark></p>`
}
if(isBrowser.firefox()){
    $id.innerHTML+= `<p><mark>este contenido es solo para firefox </mark></p>`
}
if(isDesktop.windows()){
    $id.innerHTML+= `<p><mark>descarga nuestro software para WINDOWS</mark></p>`
}
if(isDesktop.mac()){
    $id.innerHTML+= `<p><mark>descarga la app para tu MAC!!</mark></p>`;

};


/*REDIRECCIONANDO asi trabajan las antiguas paginas para trabajar paginas mas actualizadas
generando contenido exclusivo, asi te redirige a una version mejorada...
*/

if(isMobile.ios()){
    window.location.href="https://jonmircha.com";

};

}



