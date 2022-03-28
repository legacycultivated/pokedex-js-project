let pokemonList = [
  {name: "Bulbasaur", height: 0.7, types: ['grass', 'poison']},
  {name: "Charmander", height: 0.6, types: ['fire']},
  {name: "Squirtle", height: 0.5, types: ['water']},
  {name: "Snorlax", height: 2.1, types:['normal']}
];

//for loop that prints out pokemon and height to index.html

for (let i= 0; i < pokemonList.length; i++) {
  document.write (pokemonList[i].name + ": " + pokemonList[i].height);

  document.write ("<br>");
}
