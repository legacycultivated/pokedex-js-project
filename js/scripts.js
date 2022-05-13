let pokemonRepository = (function() {
  let pokemonList = [];
  let apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=150';
  let modalContainer = document.querySelector('#modal-container');

  function add(pokemon) {
    if (
      typeof pokemon === "object" &&
      "name" in pokemon
    ) {
      pokemonList.push(pokemon);
    } else {
      console.log("pokemon is not correct");
    }
  }

  function getAll() {
    return pokemonList;
  }

  function addListItem(pokemon) {
    let pokemonList = document.querySelector(".pokemon-list");
    let listpokemon = document.createElement("li");
    let button = document.createElement("button");
    button.innerText = pokemon.name;
    button.classList.add("button-class");
    button.classList.add("btn");
    button.classList.add("btn-primary");
    listpokemon.classList.add("group-list-item");
    listpokemon.appendChild(button);
    pokemonList.appendChild(listpokemon);
    button.addEventListener("click", function(event) {
      showDetails(pokemon);
    });
  }

  function loadList() {
    return fetch(apiUrl).then(function(response) {
      return response.json();
    }).then(function(json) {
      json.results.forEach(function(item) {
        let pokemon = {
          name: item.name,
          detailsUrl: item.url
        };
        add(pokemon);
        console.log(pokemon);
      });
    }).catch(function(e) {
      console.error(e);
    })
  }

  function loadDetails(item) {
    let url = item.detailsUrl;
    return fetch(url).then(function(response) {
      return response.json();
    }).then(function(details) {
      // Now we add the details to the item
      item.imageUrl = details.sprites.front_default;
      item.height = details.height;
      item.weight = details.weight;
      item.types = details.types;
    }).catch(function(e) {
      console.error(e);
    });
  }

  function showDetails(item) {
    pokemonRepository.loadDetails(item).then(function() {
      showModal(item);
    });
  }


  //modal function
  /*
    function showModal(pokemon) {

      modalContainer.innerHTML = '';

      //  creates modal inside modal container
      let modal = document.createElement('div');
      modal.classList.add('modal')

      //  add the new modal content (button, title and content = name, height, weight, type, and image)
      let closeButtonElement = document.createElement('button');
      closeButtonElement.classList.add('modal-close');
      closeButtonElement.innerText = 'X';
      closeButtonElement.addEventListener('click', hideModal);

      let titleElement = document.createElement('h2');
      titleElement.innerText = pokemon.name;

      let heightElement = document.createElement('p');
      heightElement.innerText = 'Height: ' + pokemon.height;

      let weightElement = document.createElement('p');
      weightElement.innerText = 'Weight: ' + pokemon.weight;

      let typeElement = document.createElement('p');
      typeElement.innerText = 'Types: ';
      pokemon.types.forEach((type, numberOfTypes) => {
        numberOfTypes = pokemon.types.pokemon;

        if (numberOfTypes === 1) {
          typeElement.innerText += type.type.name;
        } else {
          typeElement.innerText += type.type.name + " ";
        }
      })

      let imageElement = document.createElement('img');
      imageElement.classList.add('modal-image');
      imageElement.src = pokemon.imageUrl;

      //  append contents into modal, and append modal into modal container
      modal.appendChild(closeButtonElement);
      modal.appendChild(imageElement);
      modal.appendChild(titleElement);
      modal.appendChild(heightElement);
      modal.appendChild(weightElement);
      modal.appendChild(typeElement);
      modalContainer.appendChild(modal);

      //  finally adds .is-visible class to modal container to appear
      modalContainer.classList.add('is-visible');
    }

    //  function to hide modal
    function hideModal() {
      modalContainer.classList.remove('is-visible');
    }


    //  event listener to window for keyboard input esc
    window.addEventListener('keydown', (e) => {
      //  if user esc and modal container is visible, executes hideModal function
      if (e.key === 'Escape' && modalContainer.classList.contains('is-visible')) {
        hideModal();
      }
    });

    // event listener when user clicks outside
    modalContainer.addEventListener('click', (e) => {
      let target = e.target;
      if (target === modalContainer) {
        hideModal();
      }
    });
  */

  function showModal(pokemon) {
    let modalBody = $(".modal-body");
    let modalTitle = $(".modal-title");
    let modalHeader = $($ ".modal-header");


    modalTitle.empty();
    modalBody.empty();

    let nameElement = $("<h1>" + pokemon.name + "</h1>");
    let imageElementFront = $('<img class="modal-img" style = "width:50%">');
    imageElementFront.attr("src", pokemon.imageUrlFront);
    let imageElementBack = $('<img class="modal-img" style="width:50%">');
    imageElementBack.attr("src", pokemon.imageUrlBack);

    let heightElement = $("<p>" + "height : " + pokemon.height + "</p>");
    let weightElement = $("<p>" + "weight : " + pokemon.weight + "</p>");
    let typesElement = $("<p>" + "types : " + pokemon.types + "</p>");
    let abilitiesElement = $("<p>" + "abilities : " + pokemon.abilities + "</p>");

    modalTitle.append(nameElement);
    modalBody.append(imageElementFront);
    modalBody.append(imageElementBack);
    modalBody.append(heightElement);
    modalBody.append(weightElement);
    modalBody.append(typesElement);
    modalBody.append(abilitiesElement);

  }



  return {
    add: add,
    getAll: getAll,
    addListItem: addListItem,
    loadList: loadList,
    loadDetails: loadDetails,
    showDetails: showDetails
  };
})();


pokemonRepository.loadList().then(function() {
  pokemonRepository.getAll().forEach(function(pokemon) {
    pokemonRepository.addListItem(pokemon);
  });
});
