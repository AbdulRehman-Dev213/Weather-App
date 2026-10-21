const locationInput = document.querySelector("#locationInput");
const searchBtn = document.querySelector("#searchBtn");

// Weather information
const weatherBox = document.querySelector("#weatherInfo")
const weatherImg = document.querySelector("#weatherImg");
const temperature = document.querySelector("#temperature");
const cityName = document.querySelector("#cityName");
const wind = document.querySelector("#wind");
const humidity = document.querySelector("#humidity");
const error = document.querySelector("#error")


const API_KEY = "1bb10327962912c840e9df3aa546a11d";
const API_URL = "https://api.openweathermap.org/data/2.5/weather?units=metric&q="

async function weather(city) {
    const data = await fetch(`${API_URL}${city}&appid=${API_KEY}`);
    if (data.status == "404") {
        error.style.display = "block";
        weatherBox.style.display = "none";
    } else {
        const response = await data.json();
    temperature.textContent = response.main.temp + "°C";
    cityName.textContent = response.name;
    wind.textContent = `${response.wind.speed * 3.6} Km/h`;
    humidity.textContent = response.main.humidity + "%"

    if (response.weather[0].main === "Clear") {
        weatherImg.src = "assets/clear.png"
    }
    else if (response.weather[0].main === "Rain") {
        weatherImg.src = "assets/rain.png"
    }
    else if (response.weather[0].main === "Clouds") {
        weatherImg.src = "assets/cloud.png"
    }
    else if (response.weather[0].main === "wind") {
        weatherImg.src = "assets/wind.png"
    }

    else if (response.weather[0].main === "Thunderstorm") {
        weatherImg.src = "assets/thunder.png"
    }

    weatherBox.style.display = "block"
    error.style.display = "none"
    }
    
}

searchBtn.addEventListener("click", () => {
    weather(locationInput.value);

})

locationInput.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
        weather(locationInput.value);
    }


})

