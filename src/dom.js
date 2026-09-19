import './style.css';
import { getWeather } from './app.js'; 

const topBar = document.createElement('div');
topBar.classList.add('topBar');

const locationInfo = document.createElement('div');
locationInfo.classList.add('locationInfo');

const cityTitle = document.createElement('h1');
cityTitle.id = 'cityTitle';

const dateTimeInfo = document.createElement('p');
dateTimeInfo.id = 'dateTimeInfo';

const timeZone = document.createElement('p');
timeZone.id = 'TimeZone';

locationInfo.appendChild(cityTitle);
locationInfo.appendChild(dateTimeInfo);
locationInfo.appendChild(timeZone);



const controls = document.createElement('div');
controls.classList.add('controls');

const container = document.createElement('div');
container.classList.add("container");

const myInput = document.createElement('input');
myInput.id = 'myInput';
myInput.type = 'text';
myInput.placeholder = 'NY USA';

const btnContent = document.createElement('div');
btnContent.classList.add("btnContent");

const btnCelcius = document.createElement("button");
btnCelcius.id = 'btnc';
btnCelcius.textContent = "C";

const span = document.createElement("span");
span.textContent = "/";

const btnFar = document.createElement("button");
btnFar.id = 'btnf';
btnFar.textContent = "F";

container.appendChild(myInput);


btnContent.appendChild(btnCelcius);
btnContent.appendChild(span);
btnContent.appendChild(btnFar);

controls.appendChild(container);
controls.appendChild(btnContent);

topBar.appendChild(locationInfo);
topBar.appendChild(controls);
document.body.appendChild(topBar);

const weatherDisplay = document.createElement('div');
weatherDisplay.classList.add('weatherDisplay');

const currentTemp = document.createElement('p');
currentTemp.id = 'tempc';

const temp = document.createElement('p');
temp.id = 'temp';

const humidity = document.createElement('p');
humidity.id = 'humid';

weatherDisplay.appendChild(currentTemp);
weatherDisplay.appendChild(temp);
weatherDisplay.appendChild(humidity);
document.body.appendChild(weatherDisplay);


let currentData = null;


async function loadDefaultCity() {
    currentData = await getWeather("Cap-Haitien, Haiti");

    if (currentData) {
        console.log("Default city :", currentData);

        cityTitle.textContent = currentData.resolvedAddress;
        dateTimeInfo.textContent = currentData.currentConditions.datetime;

        timeZone.textContent = currentData.timezone;

        currentTemp.textContent =
            currentData.currentConditions.temp + " °C";

        temp.textContent = currentData.currentConditions.conditions;

        humidity.textContent =
            "Humidity: " + currentData.currentConditions.humidity + " %";
    }
}

async function showWeather(unit) {
    const cityName = myInput.value.trim();

    if (cityName !== "") {
        currentData = await getWeather(cityName);

        if (currentData) {
            console.log("Success :", currentData);

            cityTitle.textContent = currentData.resolvedAddress;
            dateTimeInfo.textContent = currentData.currentConditions.datetime;

             timeZone.textContent = currentData.timezone;
             
            const celsius = currentData.currentConditions.temp;

            if (unit === "C") {
                currentTemp.textContent = celsius.toFixed(1) + " °C";
            } else {
                const fahrenheit = (celsius * 9 / 5) + 32;
                currentTemp.textContent = fahrenheit.toFixed(1) + " °F";
            }

            temp.textContent = currentData.currentConditions.conditions;
            humidity.textContent = "Humidity: " + currentData.currentConditions.humidity + " %";
        }
    }
}


btnCelcius.addEventListener("click", () => {
    showWeather("C");
});

btnFar.addEventListener("click", () => {
    showWeather("F");
});


loadDefaultCity();