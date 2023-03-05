function cityName(event) {
  event.preventDefault();
  let cityDisplay = document.querySelector("#search-input");
  if (cityDisplay.value) {
    searchCity(cityDisplay.value);
  }
}
let form = document.querySelector("#search");
form.addEventListener("submit", cityName);

function searchCity(city) {
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial`;
  let apiKey = "96771e971243152d6b8948878c26adde";
  axios.get(`${apiUrl}&appid=${apiKey}`).then(showTemperature);
}

function dateTime() {
  let now = new Date();
  let day = now.getDay();
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let dayMonth = now.getDate();
  let month = now.getMonth();
  let months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  let hour = now.getHours();
  if (hour < 10) {
    hour = `0${hour}`;
  }

  let minutes = now.getMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  let weatherDate = `${days[day]}, ${dayMonth}. ${months[month]}  ${hour}:${minutes}`;
  let currentDate = document.querySelector("#current");
  currentDate.innerHTML = weatherDate;
}
dateTime();

function showTemperature(response) {
  console.log(response.data);
  let currentCity = document.querySelector("#city");
  currentCity.innerHTML = response.data.name;
  let temperature = Math.round(response.data.main.temp);
  let description = document.querySelector("#temperature-description");
  description.innerHTML = response.data.weather[0].description;
  let temperatureElement = document.querySelector("h2");
  temperatureElement.innerHTML = `${temperature}°F ☀️`;
}

function handlePosition(position) {
  console.log(position.coords.latitude);
  console.log(position.coords.longitude);
}

navigator.geolocation.getCurrentPosition(handlePosition);
