import { getWeather } from "./weatherData.js";
import { buildDisplay, checkIcon } from "./display.js";

const mainContainer = document.querySelector(".main-container");

const daysListContainer = document.createElement("div");
daysListContainer.className = "days-list-container";
mainContainer.appendChild(daysListContainer);

export const buildList = async(cityName,days) => {
let tempDate = "";

    daysListContainer.innerHTML = "";

    for(let i = 0; i < 5; i++){
        
        const daysBtn = document.createElement("button");
        daysBtn.className = "days-btn";
        daysListContainer.appendChild(daysBtn);

        daysBtn.addEventListener("click", () => {
            buildDisplay(cityName,days[i]);
        })
        
        const btnDate = document.createElement("div");
        btnDate.className = 'btn-date';
        tempDate = days[i].datetime.slice(5,days[i].datetime.length);
        btnDate.textContent = tempDate;
        daysBtn.appendChild(btnDate);
        
        const btnIcon = document.createElement("div");
        btnIcon.className = "btn-icon";
        daysBtn.appendChild(btnIcon);
        
        const btnImg = document.createElement("img");
        btnImg.className = "btn-img";
        btnImg.src = checkIcon(days[i].icon);
        btnIcon.appendChild(btnImg);
        
        const btnTemp = document.createElement("div");
        btnTemp.className = "btn-temp";
        btnTemp.textContent = `${days[i].temp}°`;
        daysBtn.appendChild(btnTemp);
    }
}

