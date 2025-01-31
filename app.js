let amigos = [];
let elementoHTML = document.querySelector("#listaAmigos");
let elementoSorteo = document.querySelector("#resultado");


//Si la entrada esta vacio
function isEmpty(nombre){
    if(nombre === "")
        return 1;
    return 0;
}


//Generar número Random
function NumberRandom(){
    return Math.floor(Math.random()*amigos.length);
}

// validar la entrada
function verificar(nombre){
    if(isEmpty(nombre)){
        alert("Parametro vacio: Ingrese un nombre");
        return 0;
    }
    let longitud = nombre.length;
    for(let i=0;i<longitud;i++){
        if(nombre[i] === " ")
            continue;
        if(parseInt(nombre[i])){
            alert("Paramentro Incorrecto: No ingrese números");
            return 0;
        }else if(nombre[i].toLowerCase() < 'a' || nombre[i].toLowerCase()>'z'){
            alert("Parametro Incorrecto: No ingrese Carecteres Especiales");
            return 0;
        }
    }
    return 1;
}

//limpiar la entrada luego de una insercion
function limpiarCaja(){
    document.querySelector("#amigo").value = "";
}


//insertar la entrada en el array en el HTML
function insertar(){
    elementoHTML.innerHTML += "<li> " + amigos[amigos.length-1] + "<\li>";

}

//Agregar amigo en el array
function agregarAmigo(){
    let amigo = document.querySelector("#amigo").value;
    if(verificar(amigo)){
        amigos.push(amigo);
        insertar();
    }
    limpiarCaja();
}
//Mostrar el amigo secreto seleccionado
function mostrarAmigoSecreto(n){
    elementoSorteo.innerHTML += "<li>" + amigos[n] + "<\li>";
}

//Sortear el numero random
function sortearAmigo(){
    elementoSorteo.innerHTML = "";
    var num = NumberRandom();
    mostrarAmigoSecreto(num);
}

//Limpiar todos los campos
function limpiar(){
    elementoHTML.innerHTML = "";
    elementoSorteo.innerHTML = "";
    amigos.length = 0;
}