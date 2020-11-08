
function range(int) {
    const arr = [];
    for (let i = 0; i < int; i += 1) {
      arr.push(i);
    }
    return arr;
  }
  function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); 
  }  

  async function main(){
    const data = await fetch('https://data.princegeorgescountymd.gov/resource/umjn-t2iz.json');
    const json = await data.json;
    console.log('data from fetch', json);
    res.json(json);
  }
const restaurantdata = [];


function myMatches(word, restaurantdata){
    return restaurantdata.filter(item=> {
      const regex = new RegExp(word, 'gi');
      return item.name.match(regex)|| item.category.match(regex);
    });
}
//when value is changed
function displayMatches(){
    const matchArray = myMatches(this.value, restaurantdata);
    const html = matchArray.map(place =>{
        const regex = new RegExp (this.value, 'gi');

        //find searched item and replace with span class of highlight
        const restaurantName = place.name.replace(regex, `<span class = "h1">${this.
            value}</span>`)
        const stateName = place.state.replace(regex, `<span class = "h1">${this.
                value}</span>`)
        return `
         <li>
           <span class="name">${restaurantName}, ${stateName}</span>
           </li>
         `;
    }).join('');
}

const endpoint = 'https://data.princegeorgescountymd.gov/resource/umjn-t2iz.json';
const cities = [];

fetch(endpoint)
    .then(blob => blob.json())
    .then(data => cities.push(... data));

function findMatches(wordToMatch, cities){
    return cities.filter(place => {
        const regex = new RegExp(wordToMatch, 'gi');
       return place.city.match(regex) || place.state.match(regex) || place.zip.match(regex);
    });
}
function displayMatches(){
    const matchArray = findMatches(this.value, cities);
    const html = matchArray.map(place => {

        return `
        <li>
            <span class = 'name'> ${place.name}</span><br>
            <span class = 'city'> ${place.city}</span><br>
            <span class = 'zip'> ${place.zip} </span>
        </li>
        `;
    }).join('');
    suggestions.innerHTML = html;
}

const searchInput = document.querySelector('.textinput');
const suggestions = document.querySelector('.suggestions')

searchInput.addEventListener('keyup', displayMatches);

