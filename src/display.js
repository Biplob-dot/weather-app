const mainContainer = document.querySelector(".main-container");

const displayContainer = document.createElement("div");
displayContainer.className = "display-container";
mainContainer.appendChild(displayContainer);

//DisplayLeft

const displayLeft = document.createElement("div");
displayLeft.className = "display-left";
displayContainer.appendChild(displayLeft);

const displayPlace = document.createElement("div");
displayPlace.className = "display-place";
displayPlace.textContent = "Kathmandu";
displayLeft.appendChild(displayPlace);

const displayDate = document.createElement("div");
displayDate.className = "display-date";
displayDate.textContent = "September 7, 2025";
displayLeft.appendChild(displayDate);

const iconContainer = document.createElement("div");
iconContainer.className = "icon-container";
displayLeft.appendChild(iconContainer);

const mainIcon = document.createElement("img");
mainIcon.className = "main-icon";
iconContainer.appendChild(mainIcon);

const iconDescription = document.createElement("div");
iconDescription.className = "idon-description";
iconDescription.textContent = "Cloudy";
displayLeft.appendChild(iconDescription);

//Display Right

const displayRight = document.createElement("div");
displayRight.className = "display-right";
displayContainer.appendChild(displayRight);

const temp = document.createElement("div");
temp.className = "temp";
temp.textContent = "26°";
displayRight.appendChild(temp);

const minmaxContainer = document.createElement("div");
minmaxContainer.className = "minmax-container";
displayRight.appendChild(minmaxContainer);

const maxTemp = document.createElement("div");
maxTemp.className = "max-temp";
maxTemp.textContent = "28°";
minmaxContainer.appendChild(maxTemp);

const slash = document.createElement("div");
slash.textContent = "/";
minmaxContainer.appendChild(slash);

const minTemp  = document.createElement("div");
minTemp.className = "min-temp";
minTemp.textContent = "19°";
minmaxContainer.appendChild(minTemp);