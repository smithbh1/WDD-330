let baseURL = "https://pokeapi.co/api/v2/pokemon?limit=151";

document.querySelector('#search-poke').addEventListener('click', getJSON(baseURL))
function showSearch(){
  let search = document.querySelector('input');
  if(!search.classList.contains('visible')){
    search.classList.add('visible');
  } else if(search.classList.contains('visible')){
    search.classList.remove('visible');
  }
}
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
function createTypes(types, ul, div){
  types.forEach(function(type){
    let typeListItem = document.createElement('li');
    typeListItem.innerText = type['type']['name'];
    ul.append(typeListItem);
    switch(typeListItem.innerText){
      case 'grass':
      div.classList.add('grass');
      break;
      case 'fire':
      div.classList.add('fire');
      break;
      case 'water':
      div.classList.add('water');
      break;
      case 'flying':
      div.classList.add('flying');
      break;
      case 'poison':
      div.classList.add('poison');
      break;
      case 'electric':
      div.classList.add('electric');
      break;
      case 'ground':
      div.classList.add('ground');
      break;
      case 'bug':
      div.classList.add('bug');
      break;
      case 'normal':
      div.classList.add('normal');
      break;
      case 'psychic':
      div.classList.add('psychic');
      break;
      case 'fighting':
      div.classList.add('fighting');
      break;
      case 'dragon':
      div.classList.add('dragon');
      break;
      

    }
  })
}
function displayPokemon(pokeData){
  let pokeContainer = document.querySelector('.card-flex-container');

  let singleCard = document.createElement('div');
  singleCard.classList.add('card')
  singleCard.classList.add(pokeData.name)
  let pokeName = document.createElement('h3');
  pokeName.innerText = pokeData.name;
  pokeName.classList.add('pokeName')
  
  let pokeTypes = document.createElement('ul');

  let pokeNumber = pokeData.id;
  createPokeImage(pokeNumber, singleCard);
  
  createTypes(pokeData.types, pokeTypes, singleCard);
  
  singleCard.append(pokeName, pokeTypes);
  
  pokeContainer.appendChild(singleCard);
  
}
function createPokeImage(pokeID, containerDiv){
  let pokeImage = document.createElement('img')
  pokeImage.srcset = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokeID}.png`
  containerDiv.append(pokeImage);
}

function searchPokemon() {
  let input = document.getElementById('searchbar').value
  input = input.toLowerCase();
  let x = document.getElementsByClassName('pokeName');
    
  for (i = 0; i < x.length; i++) { 
      if (!x[i].innerHTML.toLowerCase().includes(input)) {
          x[i].parentElement.style.display="none";
      }
      else {
          x[i].parentElement.style.display="initial";                 
      }
  }
}
