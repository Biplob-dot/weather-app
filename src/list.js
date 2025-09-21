import { getWeather, getDays, getCityName } from "./weatherData.js";

// await getWeather("kathmandu");

const mainContainer = document.querySelector(".main-container");

const daysListContainer = document.createElement("div");
daysListContainer.className = "days-list-container";
mainContainer.appendChild(daysListContainer);

const daysBtn = document.createElement("button");
daysBtn.className = "days-btn";
daysListContainer.appendChild(daysBtn);

const btnDate = document.createElement("div");
btnDate.className = 'btn-date';
btnDate.textContent = "Today";
daysBtn.appendChild(btnDate);

const btnIcon = document.createElement("div");
btnIcon.className = "btn-icon";
daysBtn.appendChild(btnIcon);

const btnImg = document.createElement("img");
btnImg.className = "btn-img";
btnIcon.appendChild(btnImg);

const btnTemp = document.createElement("div");
btnTemp.className = "btn-temp";
btnTemp.textContent = "24";
daysBtn.appendChild(btnTemp);
