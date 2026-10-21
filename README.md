# Weather App 🌤️

A clean, purple-themed weather app built with HTML, CSS, and vanilla JavaScript. Search any city and instantly see its current temperature, wind speed, humidity, and a matching weather icon, powered by live data from the OpenWeatherMap API.

## Features

* **City Search:** Look up any city by clicking the search button or pressing Enter.
* **Live Weather Data:** Fetches real-time data from the OpenWeatherMap Current Weather API.
* **Key Details at a Glance:** Displays temperature (°C), city name, wind speed, and humidity.
* **Unit Conversion:** Converts wind speed from m/s (the API's metric unit) to km/h.
* **Dynamic Weather Icons:** The icon changes based on conditions: clear, clouds, rain, and thunderstorm.
* **Invalid City Handling:** Shows an error message and image when a city can't be found.
* **Polished Styling:** Gradient background, reusable CSS custom properties, a glowing input focus state, and an animated gradient search button.
* **Mobile Responsive Layout:** Media queries shrink the card to fit phone screens, stack the wind and humidity cards vertically, and let the page scroll on short screens.

## Tech Stack

* **HTML5**: Page structure and weather display markup.
* **CSS3**: Flexbox layout, media queries, custom properties, gradients, and hover/focus transitions.
* **JavaScript (ES6+)**: `fetch`, `async/await`, DOM manipulation, and event handling.
* **OpenWeatherMap API**: Current weather data.
* **Font Awesome 6**: Search, wind, and humidity icons.
* **Google Fonts**: Poppins.

## Project Structure

```
weather-app/
├── index.html
├── style.css
├── script.js
└── assets/
    ├── 404.png
    ├── clear.png
    ├── cloud.png
    ├── rain.png
    ├── thunder.png
    └── wind.png
```

## Getting Started

### 1. Clone the repository

```
git clone <repository-url>
```

### 2. Get a free API key

Create a free account at [OpenWeatherMap](https://openweathermap.org/api) and copy your API key.

### 3. Add your key

Open `script.js` and replace the value of `API_KEY` with your own key:

```js
const API_KEY = "YOUR_API_KEY_HERE";
```

### 4. Open the project

Open `index.html` in your browser, or use the Live Server extension in Visual Studio Code.

No package installation or build tools are required. New API keys can take a little while to activate after signup.

## How to Use

1. Type a city name into the search box.
2. Click the search button or press Enter.
3. View the temperature, wind speed, humidity, and weather icon.
4. If the city isn't found, an "Invalid City Name" message appears.

## What I Practiced

This project helped me practice and strengthen my understanding of:

* Fetching data from a REST API with `fetch()` and `async/await`.
* Parsing JSON and reading nested response data.
* Checking response status codes to handle a failed request.
* Updating the DOM with `textContent`, `src`, and `style.display`.
* Using conditional statements to match weather conditions to icons.
* Converting units (m/s to km/h) before displaying data.
* Handling click and keyboard events with `addEventListener()`.
* Building a themed interface with CSS custom properties and Flexbox.
* Using `:focus-within` for an input focus glow.
* Writing simple media queries (`max-width` and `max-height`) to adapt a fixed-width layout to mobile screens.
* Stacking Flexbox items with `flex-direction: column` on small screens.

## Current Limitations

* Only a "city not found" (404) response is handled. Empty input, network failures, and other API errors are not.
* Temperature and wind speed are not rounded, so values like `22.47°C` can appear.
* Conditions without a mapped icon (snow, mist, drizzle, etc.) keep the previous city's icon.
* There is no loading indicator while data is being fetched.
* The API key lives in client-side code, so it is visible to anyone who opens the browser's DevTools. It is fine for a free key, but this approach isn't suitable for paid or private keys.
* The responsive layout targets phones (480px and below). Tablets use the desktop layout.

## Future Improvements

* Add full error handling: empty input, network failures, and other API errors.
* Round temperature and wind speed values.
* Replace the if/else icon chain with a lookup object and a default icon.
* Add a loading state while the request is in progress.
* Add a 5-day forecast and a "use my location" option.
* Improve accessibility with an input label, a button `aria-label`, and visible focus states.
* Move the API key behind a small serverless function.

## Author

**Abdul Rehman**
Aspiring Frontend Developer

If you find this project useful, consider giving the repository a star on GitHub.
