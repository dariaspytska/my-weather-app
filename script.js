let now = new Date();

let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
let day = days[now.getDay()];

let hour = now.getHours();
if (hour < 10) {
  hour = `0${hour}`;
}

let minute = now.getMinutes();
if (minute < 10) {
  minute = `0${minute}`;
}

let time = `${hour}:${minute}`;
let result = `${day} ${time}`;
let date = document.querySelector("#date");
date.innerHTML = result;

function searchCity(event) {
  event.preventDefault();
  let input = document.querySelector("#input-city");
  let mainCity = document.querySelector("#main-city");
  mainCity.innerHTML = input.value;
  let apiKey = "9eac88714aa707593c33f048a9d7da34";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${input.value}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(temperatureS);
}
let choose = document.querySelector("#button-addon2");
choose.addEventListener("click", searchCity);

function getCelcium(event) {
  event.preventDefault();
  celTemp.innerHTML = "+17";
}

let celcium = document.querySelector("#celcium-link");
celcium.addEventListener("click", getCelcium);

function getFahrenheit(event) {
  event.preventDefault();
  celTemp.innerHTML = "+63°";
}

let fahrenheit = document.querySelector("#fahrenheit-link");
fahrenheit.addEventListener("click", getFahrenheit);
let celTemp = document.querySelector("#main-temp");

function temperatureS(resq) {
  let temp = Math.round(resq.data.main.temp);
  let h1 = document.querySelector("h2");
  h1.innerHTML = `+${temp}`;
}

function displayWeatherCondition(response) {
  document.querySelector("h1").innerHTML = response.data.name;
  document.querySelector("h2").innerHTML = `+ ${Math.round(response.data.main.temp)}`;
}

function searchLocation(position) {
  let apiKey = "9eac88714aa707593c33f048a9d7da34";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&appid=${apiKey}&units=metric`;

  axios.get(apiUrl).then(displayWeatherCondition);
}

function getCurrentLocation(event) {
  event.preventDefault();
  navigator.geolocation.getCurrentPosition(searchLocation);
}

let buttCur = document.querySelector("#button-addon3");
buttCur.addEventListener("click", getCurrentLocation);
