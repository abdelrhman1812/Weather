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
    `http://api.weatherapi.com/v1/forecast.json?key=c6a549e1de0a4fee8fe191912230609&q=${currentCity}&days=7`
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

/* other */

// function showWeather(val = "cairo") {
//   let weather = new XMLHttpRequest();
//   weather.open(
//     "GET",
//     `http://api.weatherapi.com/v1/forecast.json?key=c6a549e1de0a4fee8fe191912230609&q=${val}&days=7`
//   );
//   weather.send();

//   weather.addEventListener("loadend", function () {
//     if (weather.status == 200) {
//       // console.log(w.response);
//       allInfo = JSON.parse(weather.response);
//       console.log(allInfo.forecast.forecastday[1].day.maxtemp_c);

//       displayWeather();
//       firstTwoCards();

//       // console.log(allInfo.forecast);
//     }
//   });
// }
// showWeather();

// let dayTwo = document.getElementById("dayTwo");

// let iconDayTwo = document.getElementById("iconDayTwo");

// let maxtemp_cDaytwo = document.getElementById("maxtemp_cDaytwo");

// let mintemp_cDaytwo = document.getElementById("mintemp_cDaytwo");

// let textDaytwo = document.getElementById("textDaytwo");

// function displayDayTwo() {
//   dayTwo.innerHTML = days[new Date("2023-09-08").getDay() + 1];

//   const iconUrltwo = `https:${allInfo.forecast.forecastday[1].day.condition.icon}`;
//   iconDayTwo.innerHTML = `<img src="${iconUrltwo}" alt="Weather Icon" />`;
//   maxtemp_cDaytwo.innerHTML = allInfo.forecast.forecastday[1].day.maxtemp_c;
//   mintemp_cDaytwo.innerHTML = allInfo.forecast.forecastday[1].day.mintemp_c;
//   textDaytwo.innerHTML = allInfo.forecast.forecastday[1].day.condition.text;
// }

/* Day three */

// let dayThree = document.getElementById("dayThree");

// let iconDayThree = document.getElementById("iconDayThree");

// let maxtemp_cDayThree = document.getElementById("maxtemp_cDayThree");

// let mintemp_cDayThree = document.getElementById("mintemp_cDayThree");

// let textDayThree = document.getElementById("textDayThree");

// function displayDayThree() {
//   dayThree.innerHTML =
//     days[new Date(allInfo.forecast.forecastday[2].date).getDay() + 1];

//   const iconUrlthree = `https:${allInfo.forecast.forecastday[2].day.condition.icon}`;
//   iconDayThree.innerHTML = `<img src="${iconUrlthree}" alt="Weather Icon" />`;
//   maxtemp_cDayThree.innerHTML = allInfo.forecast.forecastday[2].day.maxtemp_c;
//   mintemp_cDayThree.innerHTML = allInfo.forecast.forecastday[2].day.mintemp_c;
//   textDayThree.innerHTML = allInfo.forecast.forecastday[2].day.condition.text;
// }
