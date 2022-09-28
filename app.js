let alojamiento = document.getElementById("alojamiento");
let alojamientoContenido = document.getElementById("alojamientoContenido");

let gastronomia = document.getElementById("gastronomia");
let gastronomiaContenido = document.getElementById("gastronomiaContenido");
let guia = document.getElementById("guia");
let guiaContenido = document.getElementById("guiaContenido");

alojamiento.addEventListener("mousedown", ()=>{
    if(alojamientoContenido.style.display == "none"){
        alojamientoContenido.style.display = "inherit";
    }else{
        alojamientoContenido.style.display = "none";
    }
})

gastronomia.addEventListener("mousedown", ()=>{
    if(gastronomiaContenido.style.display == "none"){
        gastronomiaContenido.style.display = "inherit";
    }else{
        gastronomiaContenido.style.display = "none";
    }
})

guia.addEventListener("mousedown", ()=>{
    if(guiaContenido.style.display == "none"){
        guiaContenido.style.display = "inherit";
    }else{
        guiaContenido.style.display = "none";
    }
})
