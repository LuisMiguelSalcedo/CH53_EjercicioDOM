let btnMostrar = document.getElementById("btnMostrar");
let encabezado1 = document.getElementById("encabezado1");
let encabezado2 = document.getElementById("encabezado2");
let listas = document.getElementsByTagName("ul");

let elementos = document.getElementsByClassName("list-group-item");

let otroElemento = document.querySelector("ul>li");//Primero

let otrosElementos = document.querySelectorAll("ul>li");//Todos

console.log(otrosElementos.length);

console.log("otroElemento", otroElemento);

console.log(listas.length);

console.log(elementos.length);

//encabezado1.innerText = "Ejercicio DOM";
encabezado1.innerHTML = "<em>Ejercicio</em> DOM";
// DOM Excersise
console.log(encabezado1.innerText);
encabezado2.innerText = "DOM Excersise";
console.log(encabezado2.innerText)


btnMostrar.addEventListener("click", function(event){
    event.preventDefault(); // no hagas lo que haces por defecto
    console.log("boton btnModificar presionado")

} );