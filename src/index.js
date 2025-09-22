import './style.css';

import { getWeather} from "./weatherData.js";
import { buildDisplay } from './display.js';
import { buildList } from './list.js';
// import './list.js';

const placeInputForm = document.querySelector("#placeInputForm");

placeInputForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const location = document.querySelector("#place-name").value;
    console.log(location + " Here");

    getWeather(location);
    buildDisplay(location);
    buildList(location);

    placeInputForm.reset();
})