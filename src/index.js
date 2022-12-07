import './styles/main.scss';
import generateJoke from './generateJoke';
import logo from './assets/Logo.svg';

const logoImg = document.getElementById('logo');
logoImg.src = logo;

console.log(generateJoke());