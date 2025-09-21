import './style.css';

import { buildDisplay } from './display.js';
// import './list.js';
import { getWeather} from "./weatherData.js";

const placeInputForm = document.querySelector("#placeInputForm");

placeInputForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const location = document.querySelector("#place-name").value;
    console.log(location + " Here");
    getWeather(location);
    buildDisplay(location);
    placeInputForm.reset();
})