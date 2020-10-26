const myObject = {
  method: 'GET',
  headers: { 'Accept': 'application/json' }
};

const API_URL = 'https://icanhazdadjoke.com/';



const fetchJoke = () => {
  fetch(API_URL, myObject)
  .then(response => response.json())
  .then(data => document.getElementById('jokeContainer').innerText = data.joke);
};

window.onload = () => fetchJoke();