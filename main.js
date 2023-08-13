
let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

const body = document.querySelector("body");
const contenido = document.getElementById("contenidotienda");
const vercarrito = document.getElementById("carrito");
const mostrarcarrito = document.getElementById("mostrarcarrito");

productos.forEach((product) => {
    let ropa = document.createElement("div");
    ropa.className = "card";
    ropa.innerHTML = `
    <img src="${product.img}">
    <h3>${product.nombre}</h3>
    <p class="precio">$ ${product.precio}</p>
    `
    contenido.append(ropa)

    let comprar = document.createElement("button");
    comprar.innerText = "comprar";
    comprar.classname = "comprar";

    ropa.appendChild(comprar);



    
   comprar.addEventListener("click", () =>{
carrito.push({
    nombre: product.nombre,
    precio: product.precio,
    
});
saveLocal()
    });

})


vercarrito.addEventListener("click", () =>{
const header = document.createElement("div");
header.className = "header";
header.innerHTML=`
<h1 class="header">Carrito</h1>
`
mostrarcarrito.append(header);

const buttoncarrito = document.createElement("h1");
buttoncarrito.innerText= "x";
buttoncarrito.className= "headerbutton"
header.appendChild(buttoncarrito);

carrito.forEach((product) =>{
    let contenidocarrito = document.createElement("div");
    contenidocarrito.className= "modal-content";
    contenidocarrito.innerHTML= `
    <h3>${product.nombre}</h3>
    <p class="precio">$ ${product.precio}</p>
    `

    mostrarcarrito.append(contenidocarrito)

    
})
const total = carrito.reduce((acc, el) => acc + el.precio, 0);

const totalfin = document.createElement("div");
totalfin.className= "total";
totalfin.innerHTML = ` total a pagar es de : ${total}`;

mostrarcarrito.append(totalfin);
})

const saveLocal = () =>{
    localStorage.setItem("carrito",JSON.stringify (carrito));
}
    


