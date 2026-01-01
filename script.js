const API_KEY = "634f0bff7eee9a334fe3adfe15300cb5"; // OpenWeather API key

function getWeather() {
    const city = document.getElementById("cityInput").value;

    if (city === "") {
        alert("Please enter city name");
        return;
    }

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`)
        .then(res => {
            if (!res.ok) {
                throw new Error("City not found");
            }
            return res.json();
        })
        .then(data => {
            document.getElementById("city").innerText = data.name;
            document.getElementById("temp").innerText = data.main.temp + " °C";
            document.getElementById("condition").innerText = data.weather[0].main;

            changeBackground(data.weather[0].main);
        })
        .catch(() => {
            alert("City not found or API error");
        });
}

function changeBackground(condition) {
    const bg = document.getElementById("weather-bg");

    if (condition === "Mist" || condition === "Fog" || condition === "Haze") {
        bg.style.backgroundImage =
          "url(https://static.wikia.nocookie.net/weather/images/f/fc/Fog.jpeg/revision/latest?cb=20120804193216)";
    }
    else if (condition === "Rain" || condition === "Drizzle") {
        bg.style.backgroundImage =
          "url('https://images.unsplash.com/photo-1501594907352-04cda38ebc29')";
    }
    else if (condition === "Snow") {
        bg.style.backgroundImage =
          "url('https://images.unsplash.com/photo-1501594907352-04cda38ebc29')";
    }
    else {
        bg.style.backgroundImage =
          "url('https://images.unsplash.com/photo-1501594907352-04cda38ebc29')";
    }
}
