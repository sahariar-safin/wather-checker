fetch('https://api.openweathermap.org/data/2.5/weather?q=dhaka&appid=59c6d79585ff085d6b5e09bccdd1725b')
    .then(res => res.json())
    .then(data => {
        console.log(data);
        document.getElementById('wather').innerHTML = data.weather[0].main;
        document.getElementById('city').innerHTML = data.name;
        document.getElementById('temparet').innerHTML = data.main.temp;
        document.getElementById('icone').src = 'https://openweathermap.org/img/wn/' + data.weather[0].icon + '.png'
    })
function handleSearch() {
    const searchInput = document.getElementById("cityInput");
    const cityName = searchInput.value;
    fetch('https://api.openweathermap.org/data/2.5/weather?q=' + cityName + '&appid=59c6d79585ff085d6b5e09bccdd1725b')
        .then(res => res.json())
        .then(data => {
            console.log(data);
            document.getElementById('wather').innerHTML = data.weather[0].main;
            document.getElementById('city').innerHTML = data.name;
            document.getElementById('temparet').innerHTML = data.main.temp;
            document.getElementById('icone').src = 'https://openweathermap.org/img/wn/' + data.weather[0].icon + '.png'
        })
}