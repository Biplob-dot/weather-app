import { getWeather } from "./weatherData.js";
import { checkIcon } from "./display.js";

const mainContainer = document.querySelector(".main-container");

const daysListContainer = document.createElement("div");
daysListContainer.className = "days-list-container";
mainContainer.appendChild(daysListContainer);

export const buildList = async(location) => {
let tempDate = "";

    const { days } = await getWeather(location);

    daysListContainer.innerHTML = "";

    for(let i = 0; i < 5; i++){
        
        const daysBtn = document.createElement("button");
        daysBtn.className = "days-btn";
        daysListContainer.appendChild(daysBtn);
        
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

