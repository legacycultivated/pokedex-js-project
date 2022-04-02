let pokemonRepository = (function() {

  let pokemonList = [
    {
      name: "Bulbasaur",
      height: 0.7,
      types: ['grass', 'poison']
    },
    {
      name: "Charmander",
      height: 0.6,
      types: ['fire']
    },
    {
      name: "Squirtle",
      height: 0.5,
      types: ['water']
    },
    {
      name: "Snorlax",
      height: 2.1,
      types: ['normal']
    },
    {
      name: "Eevee",
      height: 0.3,
      types: ['normal']
    }
  ]

  function getAll() {
    return pokemonList;
  }
  function add(pokemon) {
      pokemonList.push(pokemon);
    }

    return {
      getALl: getAll,
      add: add
    };



})();





//foreach loop Ex. 1.5

 pokemonRepository.getALl().forEach((pokemon) => {
      document.write("<p>" + pokemon.name + " - Height: " + pokemon.height + "</p>");
 if(pokemon.height > 1) {
   document.write( " - That is a big Pokemon!")
 } else if (pokemon.height < 0.5){
   document.write(" - That is a small Pokemon!")
 }

});
