async function getWeather(location) {
  const response = await fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?unitGroup=metric&key=D3M3NR7M6EHBRAMG3NJMM7BQ8&contentType=json`);
  const weatherData = await response.json();
  return getRequiredInfo(weatherData);
}

function getRequiredInfo (data) {
  const cityName = data.address;
  const days = data.days.slice(0, 5);
  return { cityName, days }; // return fresh data
}

export { getWeather };


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