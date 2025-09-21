import { getWeather} from "./weatherData.js";

const mainContainer = document.querySelector(".main-container");

const displayContainer = document.createElement("div");
displayContainer.className = "display-container";
mainContainer.appendChild(displayContainer);

export const buildDisplay = async (location) => {
    const { cityName, days } = await getWeather(location);

    displayContainer.innerHTML = "";

    //DisplayLeft

    const displayLeft = document.createElement("div");
    displayLeft.className = "display-left";
    displayContainer.appendChild(displayLeft);

    const displayPlace = document.createElement("div");
    displayPlace.className = "display-place";
    displayPlace.textContent = cityName;
    displayLeft.appendChild(displayPlace);

    const displayDate = document.createElement("div");
    displayDate.className = "display-date";
    displayDate.textContent = days[0].datetime;
    displayLeft.appendChild(displayDate);

    const iconContainer = document.createElement("div");
    iconContainer.className = "icon-container";
    displayLeft.appendChild(iconContainer);

    const mainIcon = document.createElement("img");
    mainIcon.className = "main-icon";
    iconContainer.appendChild(mainIcon);

    const iconDescription = document.createElement("div");
    iconDescription.className = "icon-description";
    iconDescription.textContent = days[0].conditions;
    displayLeft.appendChild(iconDescription);

    //Display Right

    const displayRight = document.createElement("div");
    displayRight.className = "display-right";
    displayContainer.appendChild(displayRight);

    const temp = document.createElement("div");
    temp.className = "temp";
    temp.textContent = `${days[0].temp}°`;
    displayRight.appendChild(temp);

    const minmaxContainer = document.createElement("div");
    minmaxContainer.className = "minmax-container";
    displayRight.appendChild(minmaxContainer);

    const maxTemp = document.createElement("div");
    maxTemp.className = "max-temp";
    maxTemp.textContent = `${days[0].tempmax}°`;
    minmaxContainer.appendChild(maxTemp);

    const slash = document.createElement("div");
    slash.textContent = "/";
    minmaxContainer.appendChild(slash);

    const minTemp  = document.createElement("div");
    minTemp.className = "min-temp";
    minTemp.textContent = `${days[0].tempmin}°`;
    minmaxContainer.appendChild(minTemp);
}

