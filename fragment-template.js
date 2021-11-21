const listaDinamica = document.querySelector("#listaDinamica");
const paises = ["Argentina", "EEUU", "Brasil"];

// 1ra Forma muy complicada y larga de hacerlo
/* paises.forEach((pais) => {
  const li = document.createElement("li");
  li.className = "list";

  const b = document.createElement("b");
  b.textContent = "País: ";

  const span = document.createElement("span");
  span.className = "text-primary";
  span.textContent = pais;

  li.appendChild(b);
  b.appendChild(span);
  fragment.appendChild(li);
  
}); 
    listaDinamica.appendChild(fragment);
*/

// 2da Forma con innerHtml
/* let template = "";
paises.forEach((pais) => {
  template += `
    <li class="list">
        <b>País: </b> <span class="text-primary">${pais}</span>
    </li>`;
});
listaDinamica.innerHTML = template; */

/* 3ra Forma se debe hacer con un template html
const liTemplate = document.querySelector("#liTemplate");

// Una vez que tenemos el template es aconsejable clonarlo
const clone = liTemplate.content.cloneNode(true);

// Dentro del clon, seleccionamos el elemento que queremos cambiar, o agregar texto
clone.querySelector("span").textContent = "Argentina";

// Por último lo pasamos a la lista donde queremos mosttrarlo
listaDinamica.appendChild(clone); */

/* 4to  Fragment con template */
const fragment = document.createDocumentFragment();

const liTemplate = document.querySelector("#liTemplate");

paises.forEach((pais) => {
  const clone = liTemplate.content.cloneNode(true);

  clone.querySelector("span").textContent = pais;

  fragment.appendChild(clone);
});

listaDinamica.appendChild(fragment);
