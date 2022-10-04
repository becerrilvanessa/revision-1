// Tenemos un li de productos

const productos = [
    {nombre: "Zapato negro", tipo: "zapato", color: "negro", img: "./taco-negro.jpg"},
    {nombre: "Zapato azul", tipo: "zapato", color: "azul", img: "./taco-azul.jpg"},
    {nombre: "Bota negra", tipo: "bota", color: "negro", img: "./bota-negra.jpg"},
    {nombre: "Bota azul", tipo: "bota", color: "azul", img: "./bota-azul.jpg"},
    {nombre: "Zapato rojo", tipo: "zapato", color: "rojo", img: "./zapato-rojo.jpg"}
  ]
  
  //const li = document.getElementsByName("lista-de-productos")
  const li2 = document.querySelector('input');
  var li = document.getElementsByName("lista-de-productos");
  for (let i = 0; i < productos.length; i++) {
    var d= document.createElement("div")
    d.classList.add("productos")
  
    var titulo = document.createElement("p")
    titulo.classList.add("titulo")
    titulo.textContent = productos[i].nombre
    
    var imagen = document.createElement("img");
    imagen.setAttribute('src', productos[i].img);
  
  
  
    d.appendChild(titulo);
    d.appendChild(imagen);
   // div.appendChild(li);
  }
  
  //displayProductos(productos)
  const botonDeFiltro = document.querySelector("button");
  
  botonDeFiltro.onclick = function(e) {
    e.tar
    while (li.firstChild) {
      li.removeChild(li.firstChild);
    }
  
    const texto = li2.value;
    console.log(texto);
    const productosFiltrados = filtrado(productos, texto );
  
    for (let i = 0; i < productosFiltrados.length; i++) {
      var d = document.createElement("div")
      d.classList.add("producto")
    
      var titulo = document.createElement("p")
      titulo.classList.add("titulo")
      titulo.textContent = productosFiltrados[i].nombre
      
      var imagen = document.createElement("img");
      imagen.setAttribute('src', productosFiltrados[i].img);
    
      d.appendChild(titulo)
      d.appendChild(imagen)
    
      //li.appendChild(div)
    }
  }
  
  const filtrado = (productos = [], texto) => {
    return productos.filter(item => item.tipo.includes(texto) || item.color.includes(texto));
  }  