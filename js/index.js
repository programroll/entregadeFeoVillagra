let tienda = document.getElementById("tienda")
let login = document.getElementById("login")


//registrarse

let usuario = document.getElementById("usuario")
let contrasenia = document.getElementById("contrasenia")
let registrarse = document.getElementById("registrarse")
let formIniciarS = document.getElementById("formIniciarS")
let formRegistro = document.getElementById("formRegistro")

//if (usuario && contrasenia != "") {
registrarse.addEventListener("click", () => {

    let infoUsuario = { usuario: usuario.value, contrasenia: contrasenia.value }


    localStorage.setItem("infoUsuario", JSON.stringify(infoUsuario))
    console.log("usuario: " + usuario.value)
    formIniciarS.classList.remove("ocultar")
    formRegistro.classList.replace("mostrar","ocultar")

    
})
//}

//iniciar sesion
let usuarioUs = document.getElementById("usuarioUs")
let contraseniaUs = document.getElementById("contraseniaUs")
let iniciarS = document.getElementById("iniciarS")

//if (usuarioUs && contraseniaUs != "") {
iniciarS.addEventListener("click", () => {

    let infoUsuario = JSON.parse(localStorage.getItem("infoUsuario"))
    if (infoUsuario.usuario == usuarioUs.value && infoUsuario.contrasenia == contraseniaUs.value) {
        login.classList.replace("mostrar", "ocultar")
        tienda.classList.remove("ocultar")

    } else {
        alert("nono")
    }
})
//} 

/* Lista de productos */
let listaProductos = [
    {
        id: 1,
        imagen: "img/remera.png",
        categoria: "Verano",
        nombre: "Remera Arrow",
        precio: 3000,
        stock: 2
    },
    {
        id: 2,
        imagen: "img/lentes.png",
        categoria: "Accesorios",
        nombre: "Lentes",
        precio: 4000,
        stock: 3
    },
    {
        id: 3,
        imagen: "img/Jean.png",
        categoria: "Verano",
        nombre: "Jean Desing",
        precio: 9000,
        stock: 3
    },
    {
        id: 4,
        imagen: "img/buzo.png",
        categoria: "Invierno",
        nombre: "Buzo con capucha",
        precio: 5000,
        stock: 2
    },
    {
        id: 5,
        imagen: "img/bermuda.png",
        categoria: "Verano",
        nombre: "Bermuda camuflada",
        precio: 5000,
        stock: 3
    },
    {
        id: 6,
        imagen: "img/tapado.png",
        categoria: "Invierno",
        nombre: "Tapado",
        precio: 10000,
        stock: 3
    },
    {
        id: 7,
        imagen: "img/capera.png",
        categoria: "Invierno",
        nombre: "Campera de jean",
        precio: 8000,
        stock: 3
    },
    {
        id: 8,
        imagen: "img/billetera.png",
        categoria: "Accesorios",
        nombre: "Billetera",
        precio: 2000,
        stock: 3
    },
]
let contenedor = document.getElementById("contenedor")
cargarTarjetas(listaProductos)

let liCategorias = document.getElementById("liCategorias")
let categorias = document.getElementById("categorias")

liCategorias.addEventListener("click", motrarCategorias)

/* Armado de tarjetas dinámicas */

let inputBuscador = document.getElementById("buscador")
inputBuscador.addEventListener("input", filtrarPorImput)

function cargarTarjetas(arrayProductos) {
    const productos = document.getElementById("productos")
    productos.innerHTML = ""/* se borra todo el contenido dentro de productos para que no se agregen en cada vuelta*/
    arrayProductos.forEach(({ categoria, nombre, imagen, precio, stock }) => {
        let tarjeta = document.createElement("div")
        tarjeta.className = "tarjeta"

        tarjeta.innerHTML =
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

/* para cargar cosas al carrito */

/* Filtrar productos */
let listaCategorias = document.getElementsByClassName("listaCategorias")
console.log(listaCategorias)

for (const e of listaCategorias) {
    e.addEventListener("click", filtrarPorCategoria)
}/* resume codigo(por cada elemento) */

function filtrarPorCategoria() {

    let filtros = []
    for (const input of listaCategorias) {

        if (input.checked) {
            filtros.push(input.id)
        }
    }
    let arrayFiltrado = listaProductos.filter(producto => filtros.includes(producto.categoria.toLowerCase()))

    cargarTarjetas(arrayFiltrado.length > 0 ? arrayFiltrado : listaProductos)

}

function filtrarPorImput() {
    let arrayPorInput = listaProductos.filter(producto => producto.nombre.toLowerCase().includes(inputBuscador.value))
    cargarTarjetas(arrayPorInput)/* mejorar para mayusculas */
}

/*Visualizar carrito */
let carrito = document.getElementById("carrito")
let campoCarrito = document.getElementById("campoCarrito")

carrito.addEventListener("click", mostrarCarrito)

function mostrarCarrito() {
    campoCarrito.classList.toggle("ocultar")
}

//Opciones

function motrarCategorias() {

    categorias.classList.toggle("ocultar")
}






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