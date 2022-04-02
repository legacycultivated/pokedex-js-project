let pokemonList = [{
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
];

//for loop that prints out pokemon and height to index.html

/* for (let i = 0; i < pokemonList.length; i++) {
  document.write(pokemonList[i].name + " - Height: " + pokemonList[i].height); */


  //Conditional if statement that differentiates pokemon by height

/*  if (pokemonList[i].height > 1) {
    document.write(" - That is a big Pokemon!")
  } else if (pokemonList[i].height < 0.5) {
    document.write(" - That is a small Pokemon!")
  }

  document.write("<br>"); */



  //foreach loop

    pokemonList.forEach((pokemon) => {
      document.write("<p>" + pokemon.name + " - Height: " + pokemon.height + "</p>");
 if(pokemon.height > 1) {
   document.write( " - That is a big Pokemon!")
 } else if (pokemon.height < 0.5){
   document.write(" - That is a small Pokemon!")
 }

    });
