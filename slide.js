const fotos = ["imagenes/codigo.jpg","imagenes/programacion.jpg","imagenes/sql.jpg",];

const titulo = document.getElementById("tituloUno");
const parrafo = document.getElementById("parrafoUno");

function texto(indice){
    switch(indice){
        case 0:
            titulo.innerHTML = "Cositas"
            parrafo.innerHTML = "hacemos programas de todo tipo"
            break;
        case 1:
            titulo.innerHTML = "cositas";
            parrafo.innerHTML = "Estos productos son el mejor software del pais"
            break;
        case 2: 
            titulo.innerHTML = "cositas";
            parrafo.innerHTML = "usamos las mejores bases de datos"
            break;

    }
}
function izquierda(){
    const imagen = document.getElementById("imagenUno");    
    const indiceAnterior = fotos.indexOf(imagen.getAttribute("src"));
    let indice = indiceAnterior -1;
    switch(indiceAnterior){
        case 0:
            imagen.src = fotos[2];
            texto(2);
            break;
        case 1: 
            imagen.src = fotos[indiceAnterior-1];
            texto(indice);
            break;
        case 2:
            imagen.src = fotos[indiceAnterior -1]; 
            texto(indice);
            break;
    }

}
function derecha(){   
    const imagen = document.getElementById("imagenUno");    
    const indiceAnterior = fotos.indexOf(imagen.getAttribute("src"));
    let indice = indiceAnterior +1;
    switch(indiceAnterior){
        case 0:
            imagen.src = fotos[indiceAnterior +1];
            texto(indice);
            break;
        case 1: 
            imagen.src = fotos[indiceAnterior+1];
            texto(indice)
            break;
        case 2:
            imagen.src = fotos[0] 
            texto(0)
            break;
    }
}