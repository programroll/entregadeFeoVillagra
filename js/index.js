let listaProductos = [
    {
        id: 1,
        imagen:"img/remera.png",
        categoria: "Verano",
        nombre: "Remera Arrow",
        precio: 3000,
        stock: 2
    },
    {
        id: 2,
        imagen:"img/lentes.png",
        categoria: "Accesorios",
        nombre: "Lentes",
        precio: 4000,
        stock: 3
    },
    {
        id: 3,
        imagen:"img/Jean.png",
        categoria: "Verano",
        nombre: "Jean Desing",
        precio: 9000,
        stock: 3
    },
    {
        id: 4,
        imagen:"img/buzo.png",
        categoria: "Invierno",
        nombre: "Buzo con capucha",
        precio: 5000,
        stock: 2
    },
    {
        id: 5,
        imagen:"img/bermuda.png",
        categoria: "Verano",
        nombre: "Bermuda camuflada",
        precio: 5000,
        stock: 3
    },
    {
        id: 6,
        imagen:"img/tapado.png",
        categoria: "Invierno",
        nombre: "Tapado",
        precio: 10000,
        stock: 3
    },
    {
        id: 7,
        imagen:"img/capera.png",
        categoria: "Invierno",
        nombre: "Campera de jean",
        precio: 8000,
        stock: 3
    },
    {
        id: 8,
        imagen:"img/billetera.png",
        categoria: "Accesorios",
        nombre: "Billetera",
        precio: 2000,
        stock: 3
    },
]

const productos = document.getElementById("productos")
cargarTargetas(listaProductos)

function cargarTargetas(arrayProductos) {

    arrayProductos.forEach(({categoria, nombre, imagen, precio, stock}) => {
        let tarjeta = document.createElement("div")
        tarjeta.className ="card"
        tarjeta.innerHTML=
        `<h3>${nombre}</h3>
        <div>
            <img class="imagenes" src="${imagen}" alt="">
        </div>
        <p>Categoria: ${categoria}</p>
        <p>${stock}u. en stock</p>
        <p class="precio">$${precio}</p>
        <button class="boton">Agregar al carrito</button>
        `
    productos.appendChild(tarjeta)

    }) 
}

/* 
listaProductos.forEach(({categoria, nombre, imagen, precio, stock}) => {
    productos.innerHTML +=
    `<div class="card">
            
            <h3>${nombre}</h3>
            <div>
                <img class="imagenes" src="${imagen}" alt="">
            </div>
            <p>Categoria: ${categoria}</p>
            <p>${stock}u. en stock</p>
            <p class="precio">$${precio}</p>
            <button class="boton">Agregar al carrito</button>
    </div>
    `
}) */



/* let usuario = document.getElementById("usuario")
let contrasenia = document.getElementById("contrasenia")
let iniciarSesion = document.getElementById("iniciar")

let usuarioBD = "juan"
let contraseniaBD = "juan123"

iniciarSesion.addEventListener("click", () => {
console.log("usuario: ", usuario.value)
console.log("contraseña: ", contrasenia.value)
if (usuario.value == usuarioBD && contrasenia.value == contraseniaBD) {
alert("bienvenido")
} else {
alert("datos incorrectos")
}
}) */