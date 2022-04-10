let pokemonRepository = (function() {

  let pokemonList = [{
      name: "Bulbasaur",
      height: 0.7,
      types: ['Grass', ' Poison']
    },
    {
      name: "Charmander",
      height: 0.6,
      types: ['Fire']
    },
    {
      name: "Squirtle",
      height: 0.5,
      types: ['Water']
    },
    {
      name: "Snorlax",
      height: 2.1,
      types: ['Normal']
    },
    {
      name: "Eevee",
      height: 0.3,
      types: ['Normal']
    }
  ]

  function getAll() {
    return pokemonList;
  }

  function add(pokemon) {
    pokemonList.push(pokemon);
  }

  return {
    getAll: getAll,
    add: add
  };



})();





//foreach loop Ex. 1.5

pokemonRepository.getAll().forEach((pokemon) => {
/*  document.write("<p>" + pokemon.name + " - Height: " + pokemon.height + " Type: " + pokemon.types + "</p>");
  if (pokemon.height > 1) {
    document.write(" - That is a big Pokemon!")
  } else if (pokemon.height < 0.5) {
    document.write(" - That is a small Pokemon!")
  }
*/

let pokemonList = document.querySelector(".pokemon-list");
let listpokemon = document.createElement("li");
let button = document.createElement("button");
button.innerText = pokemon.name;
button.classList.add("button-class");
listpokemon.appendChild(button);
pokemonList.appendChild(listpokemon);



});
