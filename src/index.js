import './style.css';
// import './display.js';
// import './list.js';

let days = [];
let cityName = "";

async function getWeather(location) {
    const response = await fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?unitGroup=metric&key=D3M3NR7M6EHBRAMG3NJMM7BQ8&contentType=json`);
    const weatherData = await response.json();
    console.log(weatherData);
    getRequiredInfo(weatherData);
}

function getRequiredInfo (data) {
    cityName = data.address;
    days = data.days;
    days.splice(5,days.length);
    console.log(cityName);
    console.log(days);
} 

getWeather('kathmandu');

class Day{
    constructor(name, date, icon, temp, maxTemp, minTemp,uvIndex){
        this.name = name;
        this.date = date;
        this.icon = icon;
        this.temp = temp;
        this.maxTemp = maxTemp;
        this.minTemp = minTemp;
        this.uvIndex = uvIndex;
    }
}

const placeInputForm = document.querySelector("#placeInputForm");

placeInputForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const location = document.querySelector("#place-name").value;
    console.log(location);
    getWeather(location)
})