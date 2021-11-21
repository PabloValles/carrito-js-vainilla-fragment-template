const listaDinamica = document.querySelector("#listaDinamica");
//const li = document.createElement("li");
const paises = ["Argentina", "EEUU", "Brasil"];
const fragment = document.createDocumentFragment();

//li.textContent = "Creando";
//listaDinamica.appendChild(li);

//NO Recomendado
/* paises.forEach((pais) => {
  li.textContent = pais;

  listaDinamica.appendChild(li);
});
 */

paises.forEach((pais) => {
  const li = document.createElement("li");
  li.textContent = pais;
  fragment.appendChild(li);
});

listaDinamica.appendChild(fragment);
