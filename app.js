const carrito = document.querySelector("#carrito");
const template = document.querySelector("#template");
// Necesitamos el fragment para evitar el reflow
const fragment = document.createDocumentFragment();
const btns = document.querySelectorAll(".card .btn");

// Creamos nuestro carrito
const carritoObjeto = {};

// Creamos las funciones
// agregar al carrito
const agregarAlCarrito = (e) => {
  // Capturamos la fruta del data-fruta del btn
  //console.log(e.target.dataset.fruta);

  // Creamos nuestro objeto producto
  const producto = {
    titulo: e.target.dataset.fruta,
    id: e.target.dataset.fruta,
    cantidad: 1,
  };

  // Tenemos que preguntarle al objeto si el producto ya existe, y si es así sumarle uno a la cantidad
  if (carritoObjeto.hasOwnProperty(producto.id)) {
    producto.cantidad = carritoObjeto[producto.id].cantidad + 1;
  }
  // Le agregamos al Carrito nuestro obj. producto
  // carritoObjeto[aqui va a ir el nombre del objeto]
  carritoObjeto[producto.titulo] = producto;

  // Pintamos nuestro producto para
  pintarCarrito(producto);

  //console.log(carritoObjeto);
};

const pintarCarrito = (producto) => {
  carrito.textContent = "";

  // Con Objet.values podemos recorrer el objeto como si fuera un array
  Object.values(carritoObjeto).forEach((item) => {
    //console.log(producto);
    const clon = template.content.firstElementChild.cloneNode(true);
    clon.querySelector(".lead").textContent = item.titulo;
    clon.querySelector(".badge").textContent = item.cantidad;

    fragment.appendChild(clon);
  });

  carrito.appendChild(fragment);
};

//recorrer los botones
btns.forEach((btn) => {
  btn.addEventListener("click", agregarAlCarrito);
});
