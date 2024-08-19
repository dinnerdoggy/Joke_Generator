import 'bootstrap'; // import bootstrap elements and js
import '../styles/main.scss';
import getRequest from '../api/promises';

const init = () => {
  const domString = document.querySelector('#app');
  let jokeData = null;
  domString.innerHTML = `
    <h1>Joke Generator</h1><br />
    <button class="btn btn-danger" id="click-me">GET A JOKE</button><br />
  `;
  console.warn('YOU ARE UP AND RUNNING!');

  document
    .querySelector('#click-me')
    .addEventListener('click', () => {
      const setupPromise = jokeData ? Promise.resolve(jokeData.setup) : getRequest().then((data) => {
        jokeData = data;
        return data.setup;
      });

      setupPromise
        .then((setup) => {
          domString.innerHTML += `<p>${setup}</p>`;
          return jokeData.delivery;
        })
        .then((delivery) => {
          domString.innerHTML += `<p>${delivery}</p>`;
          jokeData = null; // Reset for the next joke
        });
    });
};

init();
