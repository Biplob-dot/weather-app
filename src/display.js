//Icons
import cloudy from './assets/cloudy-icon.png';
import lightRain1 from './assets/lightRain1.png';
import sun from './assets/sun.png';

//Backgrounds
import rainBackground from './assets/rain.jpg';
import cloudyBackground from './assets/cloudymorning.jpeg';
import clearSky from './assets/clearSky.jpeg';

function capitalizeFirstLetter(string) {
  if (typeof string !== 'string' || string.length === 0) {
    return string;
  }
  return string.charAt(0).toUpperCase() + string.slice(1);
}

export function checkIcon(icon) {
    switch(icon){
        case "rain":
            return lightRain1;
        case "partly-cloudy-day":
            return cloudy;
        case "clear-day":
            return sun;
        default:
            return cloudy;
    }
}

function checkBackground(background){
    switch(background){
        case "rain":
            return rainBackground;
        case "partly-cloudy-day":
            return cloudyBackground;
        case "clear-day":
            return clearSky;
        default:
            return cloudyBackground;
    }
}

const body = document.querySelector("body");
const mainContainer = document.querySelector(".main-container");

const displayContainer = document.createElement("div");
displayContainer.className = "display-container";
mainContainer.appendChild(displayContainer);

export const buildDisplay = async (cityName, day) => {

    body.style.background = `linear-gradient(rgba(255,255,255,0.2), rgba(255, 255, 255, 0.2)), url(${checkBackground(day.icon)})`;
    mainContainer.style.backgroundImage = `url(${checkBackground(day.icon)})`;


    displayContainer.innerHTML = "";

    //DisplayLeft

    const displayLeft = document.createElement("div");
    displayLeft.className = "display-left";
    displayContainer.appendChild(displayLeft);

    const displayPlace = document.createElement("div");
    displayPlace.className = "display-place";
    displayPlace.textContent = capitalizeFirstLetter(cityName);
    displayLeft.appendChild(displayPlace);

    const displayDate = document.createElement("div");
    displayDate.className = "display-date";
    displayDate.textContent = day.datetime;
    displayLeft.appendChild(displayDate);

    const iconContainer = document.createElement("div");
    iconContainer.className = "icon-container";
    displayLeft.appendChild(iconContainer);

    const mainIcon = document.createElement("img");
    mainIcon.className = "main-icon";
    mainIcon.src = checkIcon(day.icon);
    iconContainer.appendChild(mainIcon);

    const iconDescription = document.createElement("div");
    iconDescription.className = "icon-description";
    iconDescription.textContent = day.conditions;
    displayLeft.appendChild(iconDescription);

    //Display Right

    const displayRight = document.createElement("div");
    displayRight.className = "display-right";
    displayContainer.appendChild(displayRight);

    const temp = document.createElement("div");
    temp.className = "temp";
    temp.textContent = `${day.temp}°`;
    displayRight.appendChild(temp);

    const minmaxContainer = document.createElement("div");
    minmaxContainer.className = "minmax-container";
    displayRight.appendChild(minmaxContainer);

    const maxTemp = document.createElement("div");
    maxTemp.className = "max-temp";
    maxTemp.textContent = `${day.tempmax}°`;
    minmaxContainer.appendChild(maxTemp);

    const slash = document.createElement("div");
    slash.textContent = "/";
    minmaxContainer.appendChild(slash);

    const minTemp  = document.createElement("div");
    minTemp.className = "min-temp";
    minTemp.textContent = `${day.tempmin}°`;
    minmaxContainer.appendChild(minTemp);
}

