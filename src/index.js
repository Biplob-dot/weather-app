import './style.css';

import { getWeather} from "./weatherData.js";
import { buildDisplay } from './display.js';
import { buildList } from './list.js';

const placeInputForm = document.querySelector("#placeInputForm");

placeInputForm.addEventListener("submit", async (event) => {
    event.preventDefault();
    const location = document.querySelector("#place-name").value;
    console.log(location + " Here");

    const { cityName, days } =  await getWeather(location);

    buildDisplay(cityName,days[0]);
    buildList(cityName,days);

    placeInputForm.reset();
})