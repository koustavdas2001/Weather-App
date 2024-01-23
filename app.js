const apiKey = "28f0610ec094f5c8f8c74100ce262be9";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon")
const weatherDisplay = document.querySelector(".weather");
const error = document.querySelector(".error");

let city = document.querySelector(".city");
let temp = document.querySelector(".temp");
let humidity = document.querySelector(".humidity");
let wind = document.querySelector(".wind");

async function checkWeather(name) {
    const response = await fetch (apiUrl + name + `&appid=${apiKey}`);
    var data = await response.json();
    // console.log(data);

    if (response.status == 404) {
        error.style.display = "block";
        weatherDisplay.style.display = "none";
    }else {

    
        city.innerHTML = data.name;
        temp.innerHTML = Math.round(data.main.temp) + "°C";
        humidity.innerHTML = data.main.humidity + "%";
        wind.innerHTML = data.wind.speed + " km/h";
    
        if (data.weather[0].main == "Clouds") {
            weatherIcon.src = "images/clouds.png";
        }
        else if (data.weather[0].main == "Clear") {
            weatherIcon.src = "images/clear.png";
        }
        else if (data.weather[0].main == "Rain") {
            weatherIcon.src = "images/clouds.png";
        }
        else if (data.weather[0].main == "Drizzle") {
            weatherIcon.src = "images/rain.png";
        }
        else if (data.weather[0].main == "Mist") {
            weatherIcon.src = "images/mist.png";
        }
    
        weatherDisplay.style.display = "block";
        error.style.display = "none";
    }


}
searchBtn.addEventListener("click", ()=> {
    checkWeather(searchBox.value);
})