function attachEvents() {

    const btn = document.getElementById('submit');
    const input = document.getElementById('location');
    const forecastDiv = document.getElementById('forecast');
    const currentWeatherDiv = document.getElementById('current');
    const upcomingWeatherDiv = document.getElementById('upcoming');


    const urlLocations = 'http://localhost:3030/jsonstore/forecaster/locations'

    btn.addEventListener('click', getForecast);

    const symbols = {
        'Sunny': '☀',
        'Partly sunny': '⛅',
        'Overcast': '☁',
        'Rain': '☂',
        'Degrees': '°',
    }

    async function getForecast() {
        const code = await getCodeLocation();
        currentWeatherDiv.replaceChildren();
        upcomingWeatherDiv.replaceChildren();
        forecastDiv.style.display = 'block';
        try {

            const urlCurrentWeather = `http://localhost:3030/jsonstore/forecaster/today/${code}`;
            const responseCurrentWeather = await fetch(urlCurrentWeather);
            const dataCurrentWeather = await responseCurrentWeather.json();

            currentWeatherDiv.appendChild(elementBuilder('div', { class: 'forecast' },
                elementBuilder('span', { class: 'condition symbol' }, symbols[dataCurrentWeather.forecast.condition]),
                elementBuilder('span', { class: 'condition' },
                    elementBuilder('span', { class: 'forecast-data' }, dataCurrentWeather.name),
                    elementBuilder('span', { class: 'forecast-data' },
                        `${dataCurrentWeather.forecast.low}${symbols.Degrees}/${dataCurrentWeather.forecast.high}${symbols.Degrees}`),
                    elementBuilder('span', { class: 'forecast-data' }, dataCurrentWeather.forecast.condition))
            ));


            const urlUpcoming = `http://localhost:3030/jsonstore/forecaster/upcoming/${code}`;
            const responseUpcoming = await fetch(urlUpcoming);
            const dataUpcoming = await responseUpcoming.json();

            upcomingWeatherDiv.appendChild(elementBuilder('div', { class: 'forecast-info' },
                elementBuilder('spam', { class: 'upcoming' },
                    elementBuilder('spam', { class: 'symbol' }, symbols[dataUpcoming.forecast[0].condition]),
                    elementBuilder('spam', { class: 'forecast-data' }, `${dataUpcoming.forecast[0].low}${symbols['Degrees']}/${dataUpcoming.forecast[0].high}${symbols['Degrees']}`),
                    elementBuilder('spam', { class: 'forecast-data' }, dataUpcoming.forecast[0].condition)),
                elementBuilder('spam', { class: 'upcoming' },
                    elementBuilder('spam', { class: 'symbol' }, symbols[dataUpcoming.forecast[1].condition]),
                    elementBuilder('spam', { class: 'forecast-data' }, `${dataUpcoming.forecast[1].low}${symbols['Degrees']}/${dataUpcoming.forecast[1].high}${symbols['Degrees']}`),
                    elementBuilder('spam', { class: 'forecast-data' }, dataUpcoming.forecast[1].condition)),
                elementBuilder('spam', { class: 'upcoming' },
                    elementBuilder('spam', { class: 'symbol' }, symbols[dataUpcoming.forecast[2].condition]),
                    elementBuilder('spam', { class: 'forecast-data' }, `${dataUpcoming.forecast[2].low}${symbols['Degrees']}/${dataUpcoming.forecast[2].high}${symbols['Degrees']}`),
                    elementBuilder('spam', { class: 'forecast-data' }, dataUpcoming.forecast[2].condition))));
        } catch (error) {
            currentWeatherDiv.textContent = 'Error';
        }
    }

    async function getCodeLocation() {
        const response = await fetch(urlLocations);
        try {
            if (response.status !== 200) {
                throw new Error('404 Not found.');
            }

            const data = await response.json();

            const wantedLocation = data.find(x => x.name === input.value);
            if (!wantedLocation) {
                throw new Error('404 Not found.');
            }

            return wantedLocation.code;
        } catch (error) {
            currentWeatherDiv.textContent = 'Error';
        }

    }

    function elementBuilder(type, attributes, ...content) {
        const newElement = document.createElement(type);

        for (const attribute in attributes) {
            newElement.setAttribute(attribute, attributes[attribute]);
        }

        for (const el of content) {
            if (typeof el === 'string' || typeof el === 'number') {
                const text = document.createTextNode(el);
                newElement.appendChild(text);
            } else {
                newElement.appendChild(el);
            }
        }

        return newElement;
    }

}

attachEvents();