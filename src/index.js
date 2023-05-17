//current date and time
let currentTime = new Date();

function formatDate(date) {
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  ];

  let currentDay = days[date.getDay()];
  let hours = currentTime.getHours();
  let minute = currentTime.getMinutes();

  let formattedDate = ` ${currentDay} ${hours}:${minute}`;

  //let h6 = document.querySelector("h6");
  //h6.innerHTML = formattedDate;
  return formattedDate;
}

console.log(formatDate(currentTime));

function inputCity(response) {
  let city = document.querySelector("#city");

  let temperature = document.querySelector("#temperature");
  temperature.innerHTML = Math.round(response.data.main.temp);
  city.innerHTML = response.data.name;
}

function searchCity(city) {
  let apiKey = "2ff29bed3181c3526c35cc5408037f85";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(inputCity);
}
function showCity(event) {
  event.preventDefault();
  let input = document.querySelector("#input1");
  let city = input.value;

  let apiKey = "bb0df6985c2eab6a171d64a6bacbb4e1";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  axios.get(apiUrl).then(inputCity);
  //searchCity(city);
}
function showTemperature(response) {
  let h6 = document.querySelector("h6");
  let temperature = Math.round(response.data.main.temp);
  h6.innerHTML = `It is currently ${temperature}° in ${response.data.name}`;
}
function showPosition(position) {
  let apiKey = "5f472b7acba333cd8a035ea85a0d4d4c";
  let lat = position.coords.latitude;
  console.log(lat);
  let lon = position.coords.longitude;
  console.log(lon);
  let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}`;
  axios.get(url).then(showTemperature);
}
function location(event) {
  event.preventDefault();
  navigator.geolocation.getCurrentPosition(showPosition);
}

let currentButton = document.querySelector("#button-addon1");
currentButton.addEventListener("click", location);

let searchForm = document.querySelector("#form_");
searchForm.addEventListener("submit", showCity);
