//DOM
//querySelector nos devuelve 1 elemetno aunque existan muchos elementos
//querySelectorall reccorre todo el arbol buscando el criterio de busqueda
/*
let links = document.querySelectorAll("a")

links.forEach(function(link){
    console.log(link);
});
*/


let celdas = document.querySelectorAll("td");

celdas.forEach(function(td){
    td.addEventListener('click', function(){
        console.log(this);
    })
});

//Obtener los elementos de la clase .close
let cerrar = document.querySelectorAll(".close");
//recorrerlos
cerrar.forEach(function(close){
    //agregar un evento click a cada uno de ellos
    close.addEventListener('click', function(ev){
    ev.preventDefault();
    let content = document.querySelector('.content');

    //quitarle las clases de animacion que ya tiene
    content.classList.remove("fadeInDown");
    content.classList.remove("animated");

    //agregar clases para animar su salida fadeOutUp
    content.classList.add("fadeOutUp");
    content.classList.add("animated");

    setTimeout(function(){
        location.href = "/";
    },600);

    return false;
})
})


//darle al evento la opcion de no realizar el valor por defecto
/*cerrar.addEventListener("click", function(ev){
    ev.preventDefault();


    return false;
}
)*/