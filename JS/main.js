let days = [
  "sunday",
  "monday",
  "tuesday",
  " wenesday",
  "thursday",
  "friday",
  "saturday",
];

let dates;

let dayCurrent = document.getElementById("dayCurrent");
//==
let nameCity = document.getElementById("namecity");

let temp_c = document.getElementById("temp_c");

let iconDayOne = document.getElementById("iconDayOne");

let text = document.getElementById("text");

//==
let temp_f = document.getElementById("temp_f");
let wind_dir = document.getElementById("wind_dir");
let wind_kph = document.getElementById("wind_kph");

// console.log(space);
let inputdFind = document.getElementById("inputdFind");

//=====

let allInfo = [];

async function showWeather(currentCity = "cairo") {
  let weather = await fetch(
    `https://api.weatherapi.com/v1/forecast.json?key=c6a549e1de0a4fee8fe191912230609&q=${currentCity}&days=7`
  );
  let allInfo = await weather.json();
  displayCurrent(allInfo);
  displayNext(allInfo);
}

showWeather();

inputdFind.addEventListener("keyup", function () {
  showWeather(inputdFind.value);
});

function displayCurrent(allInfo) {
  dates = new Date();
  dayCurrent.innerHTML = days[dates.getDay()];
  const iconDayOneUrl = `https:${allInfo.current.condition.icon}`;
  nameCity.innerHTML = allInfo.location.name;
  temp_c.innerHTML = allInfo.current.temp_c;
  iconDayOne.innerHTML = `<img src="${iconDayOneUrl}" alt="Weather Icon" />`;
  //==
  text.innerHTML = allInfo.current.condition.text;
  //==
  temp_f.innerHTML = allInfo.current.temp_f;
  wind_dir.innerHTML = allInfo.current.wind_dir;
  wind_kph.innerHTML = allInfo.current.wind_kph;
}

let nextDay = document.getElementsByClassName("nextDay");

let iconNextday = document.getElementsByClassName("iconNextday");

let maxtemp_cNextday = document.getElementsByClassName("maxtemp_cNextday");

let mintemp_cNextday = document.getElementsByClassName("mintemp_cNextday");

let textNextday = document.getElementsByClassName("textNextday");

function displayNext(allInfo) {
  for (let i = 0; i < nextDay.length; i++) {
    nextDay[i].innerHTML =
      days[new Date(allInfo.forecast.forecastday[i + 1].date).getDay()];

    const iconUrlnextday = `https:${
      allInfo.forecast.forecastday[i + 1].day.condition.icon
    }`;
    iconNextday[
      i
    ].innerHTML = `<img src="${iconUrlnextday}" alt="Weather Icon" />`;
    maxtemp_cNextday[i].innerHTML =
      allInfo.forecast.forecastday[i + 1].day.maxtemp_c;
    mintemp_cNextday[i].innerHTML =
      allInfo.forecast.forecastday[i + 1].day.mintemp_c;
    textNextday[i].innerHTML =
      allInfo.forecast.forecastday[i + 1].day.condition.text;
  }
}

