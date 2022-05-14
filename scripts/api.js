let weather = {
    apiKey: '178a53f6c3304630ed03c3ee980100f0',
    fetchWeather: function() {
        fetch(
            "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + apiKey + "&units=metric"
        ).then(response => response.json())
        .then(data => console.log(data));
    },
}