const carrito = document.querySelector("#carrito");
const template = document.querySelector("#template");
const fragment = document.createDocumentFragment();
const btns = document.querySelectorAll(".card .btn");

//const carritoObjeto = {};
const carritoObjeto = [];

// agregar al carrito
const agregarAlCarrito = (e) => {
  const producto = {
    titulo: e.target.dataset.fruta,
    id: e.target.dataset.fruta,
    cantidad: 1,
  };

  const indice = carritoObjeto.findIndex((item) => item.id === producto.id);
  console.log(indice);

  if (indice === -1) {
    carritoObjeto.push(producto);
  } else {
    // Si el elemento existe trae el elemento y a la cantidad le sumamnos uno
    carritoObjeto[indice].cantidad++;
  }

  console.log(carritoObjeto);

  pintarCarrito(carritoObjeto);
};

const pintarCarrito = (array) => {
  carrito.textContent = "";

  array.forEach((item) => {
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
