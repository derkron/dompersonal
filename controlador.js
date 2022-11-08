//CONTROLANDO ETIQUETAS CON EL DOM

//1. almacenar en memoria (crear una variable )
// la etiqueta que quiero controlar
let etiquetaImagen=document.getElementById("fotografia")

//2. CONTROLANDO NUESTRAS ETIQUETAS

//2.1 Controlar es cambiar la fuente (src) de una etiqueta
etiquetaImagen.src="/img/bankai.png"

//2.2 Controlar es cambiar el contenido de texto de una etiqueta
let etiquteTitulo=document.getElementById("titulo")
etiquteTitulo.textContent="HISTORIA"

//2.3 Controlar es agregar estilos
etiquteTitulo.classList.add("fuente","alineado")

//2.4 Controlar es remover estilos
let etiquetaParrafo=document.getElementById("parrafo")
etiquetaParrafo.classList.remove("text-danger")

//2.5 Controlar es DETECTAR EVENTOS
let etiquetaBoton=document.getElementById("boton")
etiquetaBoton.addEventListener("click",function(evento){
    alert("estamos haciendo clic")
})