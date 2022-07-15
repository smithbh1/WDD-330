let baseURL = "https://pokeapi.co/api/v2/pokemon?limit=151";

document.querySelector('#search-poke').addEventListener('click', getJSON(baseURL))

function fetchPokemonData(pokemon){
  let url = pokemon.url;

  fetch(url)
  .then(response => response.json())
  .then(function(pokeData){
    console.log(pokeData);
    displayPokemon(pokeData);
  })
}
function getJSON(url) {
  return fetch(url)
    .then(function (response) {
      if (!response.ok) {
        throw Error(response.statusText);
      } else {
        return response.json();
      }
    })
    .catch(function (error) {
      console.log(error);
    })
    .then(function(allPokemon){
      allPokemon.results.forEach(function(pokemon){
        fetchPokemonData(pokemon);
      })
    });
}
function createTypes(types, ul){
  types.forEach(function(type){
    let typeListItem = document.createElement('li');
    typeListItem.innerText = type['type']['name'];
    ul.append(typeListItem);
  })
}
function displayPokemon(pokeData){
  let pokeContainer = document.querySelector('.card-flex-container');

  let singleCard = document.createElement('div');

  let pokeName = document.createElement('h3');
  pokeName.innerText = pokeData.name;

  let pokeTypes = document.createElement('ul');

  let pokeNumber = pokeData.id;
  createPokeImage(pokeNumber, singleCard);

  createTypes(pokeData.types, pokeTypes);

  singleCard.append(pokeName, pokeTypes);

  pokeContainer.appendChild(singleCard);

}
function createPokeImage(pokeID, containerDiv){
  let pokeImage = document.createElement('img')
  pokeImage.srcset = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokeID}.png`
  containerDiv.append(pokeImage);
}