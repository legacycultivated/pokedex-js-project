let pokemonRepository = (function() {
  let t = [],
    e = 'https://pokeapi.co/api/v2/pokemon/?limit=150';
  function n(e) {
    'object' == typeof e && 'name' in e
      ? t.push(e)
      : console.log('pokemon is not correct');
  }
  function o(t) {
    pokemonRepository.loadDetails(t).then(function() {
      !(function(t) {
        let e = $('.modal-body'),
          n = $('.modal-title');
        n.empty(), e.empty();
        let o = $('<h1>' + t.name + '</h1>'),
          i = $('<img class="modal-image" style = "width:50%">');
        i.attr('src', t.imageUrl);
        let a = $('<p>height : ' + t.height + '</p>'),
          l = $('<p>weight : ' + t.weight + '</p>'),
          r = document.createElement('p');
        (r.innerText = 'Types: '),
          t.types.forEach((e, n) => {
            (n = t.types.pokemon),
              (r.innerText += 1 === n ? e.type.name : e.type.name + ' ');
          }),
          n.append(o),
          e.append(i),
          e.append(a),
          e.append(l),
          e.append(r);
      })(t);
    });
  }
  return {
    add: n,
    getAll: function() {
      return t;
    },
    addListItem: function(t) {
      let e = document.querySelector('.list-group'),
        n = document.createElement('li'),
        i = document.createElement('button');
      (i.innerText = t.name),
        i.classList.add(
          'button-class',
          'btn',
          'btn-primary',
          'btn-lg',
          'w-100'
        ),
        i.setAttribute('data-toggle', 'modal'),
        i.setAttribute('data-target', '#pokemonModal'),
        n.classList.add('group-list-item'),
        n.appendChild(i),
        e.appendChild(n),
        i.addEventListener('click', function() {
          o(t);
        });
    },
    loadList: function() {
      return fetch(e)
        .then(function(t) {
          return t.json();
        })
        .then(function(t) {
          t.results.forEach(function(t) {
            let e = { name: t.name, detailsUrl: t.url };
            n(e), console.log(e);
          });
        })
        .catch(function(t) {
          console.error(t);
        });
    },
    loadDetails: function(t) {
      let e = t.detailsUrl;
      return fetch(e)
        .then(function(t) {
          return t.json();
        })
        .then(function(e) {
          (t.imageUrl = e.sprites.front_default),
            (t.height = e.height),
            (t.weight = e.weight),
            (t.types = e.types);
        })
        .catch(function(t) {
          console.error(t);
        });
    },
    showDetails: o
  };
})();
pokemonRepository.loadList().then(function() {
  pokemonRepository.getAll().forEach(function(t) {
    pokemonRepository.addListItem(t);
  });
});
