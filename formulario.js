let formulario = document.querySelector("#form");
let btn = document.getElementById("form");

var nombre = document.getElementById("name");
var edad = document.getElementById("age");
var nationality = document.getElementById("nationality");
let cont = 1;
let participantes = [];

btn.addEventListener("onsubmit",function(e){
  e.preventDefault();
  

  console.log(this.name, this.email, this.age, this.resume);
   div.innerHTML += `<div id="card_${this.id}" class="bg-light mb-3" style="max-width: 18rem;">
    <div class="card-header">${this.id}.- ${this.nombre}</div>
    <div class="card-body">
      <h5 class="card-title">${this.edad}</h5>
      <p class="card-text">${this.nacionalidad}</p>
      <p class="card-text">${this.age}</p>
    </div>
  </div>`;
//printInfo
 let invitado= {"id" : cont, "firstName": nombre.value, "Nacionalidad":nationality.options[i].value, "edad":age.value};

  console.log("id", nombre.id.nationality.age);
  cont++;
  participantes.push(invitado);//agrega elementos a un arreglo, al final 
  console.log(invitado);

 
 this.nombre = nombre.value
this.edad = edad.value
 this.nacionalidad = nationality.options[i].value


  var i = nationality.selectedIndex
  var nacionalidad = nationality.options[i].value
  console.log(nombre, edad,nationality) 
  //console.log(nacionalidad) 

  if (nombre.length === 0) {
    n.classList.add("error");
  }
  if (edad < 18 || edad > 120) {
    e.classList.add("error");
  }

if (nombre.length > 0 
  && (edad > 18 
    && edad < 120) ) {
  agregarInvitado("id", nombre.id.nationality.age);
  }


});








/* 
var botonBorrar = document.createElement("button")
botonBorrar.textContent = "Eliminar invitado"
botonBorrar.id = "boton-borrar"
var corteLinea = document.createElement("br")
document.body.appendChild(corteLinea)
document.body.appendChild(botonBorrar);

function agregarInvitado(nombre, edad, nacionalidad) {

  if (nacionalidad === "ar") {
    nacionalidad = "Argentina"
  }
  else if (nacionalidad === "mx") {
    nacionalidad = "Mexicana"
  }
  else if (nacionalidad === "vnzl") {
    nacionalidad = "Venezolana"
  }
  else if (nacionalidad === "per") {
    nacionalidad = "Peruana"
  }

var lista = document.getElementById("lista-de-invitados")

var elementoLista = document.createElement("div")
elementoLista.classList.added("elemento-lista")
lista.appendChild(elementoLista)

var spanNombre = document.createElement("span")
var inputNombre = document.createElement("input")
var espacio = document.createElement("br")
spanNombre.textContent = "Nombre: "
inputNombre.value = nombre 
elementoLista.appendChild(spanNombre)
elementoLista.appendChild(inputNombre)
elementoLista.appendChild(espacio)

function crearElemento(descripcion, valor) {
var spanNombre = document.createElement("span")
var inputNombre = document.createElement("input")
var espacio = document.createElement("br")
spanNombre.textContent = descripcion + ": "
inputNombre.value = valor 
elementoLista.appendChild(spanNombre)
elementoLista.appendChild(inputNombre)
elementoLista.appendChild(espacio)
}

crearElemento("Nombre", nombre)
crearElemento("Edad", edad)
crearElemento("Nacionalidad", nacionalidad)


var botonBorrar = document.createElement("button")
botonBorrar.textContent = "Eliminar invitado"
botonBorrar.id = "boton-borrar"
var corteLinea = document.createElement("br")
elementoLista.appendChild(corteLinea)
elementoLista.appendChild(botonBorrar);

 botonBorrar.onclick = function() {
// this.parentNode.style.display = 'none';
botonBorrar.parentNode.remove()
  } 
}  */