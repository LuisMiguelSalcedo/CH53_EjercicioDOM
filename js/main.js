let btnMostrar = document.getElementById("btnMostrar");
let encabezado1 = document.getElementById("encabezado1");
let encabezado2 = document.getElementById("encabezado2");
let listas = document.getElementsByTagName("ul");
let txtRFC = document.getElementById("txtRFC");
let txtCURP = document.getElementById("txtCURP");
let txtTelefono = document.getElementById("txtTelefono");

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

    let element = document.createElement("li");
    element.innerText="Another item"; // <li>Another item</li>
    element.classList.add("list-group-item");

    let element2 = element.cloneNode(true);

    //Befire Inserta el elemento antes de la lista
    //listas.item(0).before(element);
    //prepend Inserta el elemento al principio de la lista
    //listas.item(0).prepend(element2);
    //prepend Inserta el elemento al final de la lista
    //listas.item(0).append(element);
    //prepend Inserta el elemento despues de la lista
    //listas.item(0).after(element2);

    //afterbegin Inserta el elemento al principio de la lista
    //listas.item(1).insertAdjacentElement("afterbegin", element);
    //beforeend Inserta el elemento al final de la lista
    //listas.item(1).insertAdjacentElement("beforeend", element2);

    listas.item(1).insertAdjacentHTML("beforebegin", `<li class="list-group-item">Before begin item</li>`);
    
    listas.item(1).insertAdjacentHTML("afterend", `<li class="list-group-item">After end item</li>`);
    
    listas.item(1).insertAdjacentHTML("afterbegin", `<li class="list-group-item">After begin item</li>`);
    
    listas.item(1).insertAdjacentHTML("beforeend", `<li class="list-group-item">Before end item</li>`);

});//btnmostrar

//Se ejecuta cuando termina de cargar todos los eventos de la pagina
window.addEventListener("load", function(event){
    console.log("Se termino de cargar la pagina");
}); //load

//txttoUpper
function txtToUpper(event){
    event.preventDefault();
    event.target.value =event.target.value.trim().toUpperCase();
}

txtRFC.addEventListener("blur", txtToUpper); //txtRFC
txtCURP.addEventListener("blur", txtToUpper); //txtCURP
//blur cuando se sale del campo 
//txtRFC.addEventListener("blur", function(event){
  //  event.preventDefault;
    //txtRFC.value = txtRFC.value.toUpperCase();
    
//});

//txtCURP.addEventListener("blur", function(event){
//    event.preventDefault();
//    txtCURP.value = txtCURP.value.toUpperCase();
//});

txtTelefono.addEventListener("blur", function(event){
    event.preventDefault();

    txtTelefono.value = txtTelefono.value.trim().slice(0,10);
});