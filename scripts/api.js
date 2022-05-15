const search = document.getElementById('search');

let weather = {
    apiKey: '178a53f6c3304630ed03c3ee980100f0',
    // 天気情報をapiを用いて取得し、レスポンスを返している。
    fetchWeather: function(city) {
        fetch(
            `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${this.apiKey}&units=metric`
        ).then((response) => {
            if (!response.ok) {
                alert('No Weather Found;');
                throw new Error('No Weather Found');
            } else {
                return response.json();
            }
        })
        .then((data) => this.displayWeather(data));
    },
    // 天気情報を表示する関数
    displayWeather: function(data) {
        // 取得したJSONデータから必要なプロパティを取得していく。const name = data.nameと同じ意味。展開代入というらしい
        const { name } = data;
        const { icon, description } = data.weather[0];
        const { temp, humidity } = data.main;
        const { speed } = data.wind;
        document.getElementById('city').innerText = `Weather in ${name}`;
        document.getElementById('description').innerText = `${description}`;
        document.getElementById('icon').src = `https://openweathermap.org/img/wn/${icon}.png`;
        document.getElementById('temp').innerText = `${temp}℃`;
        document.getElementById('humidity').innerText = `Humidity：${humidity}%`;
        document.getElementById('wind').innerText = `Wind Speed：${speed}km/h`;
        document.querySelector('.content').style.backgroundImage = `url('https://source.unsplash.com/1600x900/?${name}')`;
    },
    search: function() {
        this.fetchWeather(search.value);
    }
};

// 検索ボタンクリックでfetchWeather関数を起動させる
document.querySelector('.search__btn').addEventListener('click', function() {
    weather.search();
});

// Enterキーでも検索できるようにする
search.addEventListener('keyup', event => {
    if (event.key === 'Enter') weather.search();
});
