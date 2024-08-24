// USE WITH FIREBASE AUTH
// import ViewDirectorBasedOnUserAuthStatus from '../utils/viewDirector';
import 'bootstrap'; // import bootstrap elements and js
import '../styles/main.scss';
import getRequest from '../api/promises';

// const jokeEndpoint = 'https://v2.jokeapi.dev/joke/Programming?safe-mode&type=twopart';
const init = () => {
  // const jokeData = null;
  document.querySelector('#app').innerHTML = `
    <h1>Joke Generator</h1><br />
    <button class="btn btn-danger" id="click-me">GET A JOKE</button><br />
  `;
  console.warn('YOU ARE UP AND RUNNING!');

  document
    .querySelector('#click-me')
    .addEventListener('click', () => {
      getRequest().then((data) => {
        console.warn(data.setup);
      });
    });

  // USE WITH FIREBASE AUTH
  // ViewDirectorBasedOnUserAuthStatus();
};

init();
