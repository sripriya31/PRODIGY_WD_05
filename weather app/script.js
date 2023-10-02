function searchWeather() {
    const apiKey = '1af4e549f3e55b44aec5df267b3f13ac'; 
    const cityInput = document.getElementById('cityInput').value;

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityInput}&appid=${apiKey}&units=metric`)
        .then(response => response.json())
        .then(data => {
            const cityName = document.getElementById('cityName');
            const temperature = document.getElementById('temperature');
            const description = document.getElementById('description');

            cityName.textContent = `Weather in ${data.name}`;
            temperature.textContent = `Temperature: ${data.main.temp}°C`;
            description.textContent = `Description: ${data.weather[0].description}`;
        })
        .catch(error => {
            console.error('Error fetching weather data:', error);
        });
}
