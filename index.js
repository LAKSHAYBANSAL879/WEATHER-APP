const apiKey = "1d5f7a5a4cbd89376562a5c5f14241e7";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const searchbox = document.getElementById("searchinput");
const searchbtn = document.getElementById("searchbutton");
const weathericon = document.querySelector(".weather-icon");

async function checkWeather(city) {
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
    
    if (response.status == 404) {
        document.querySelector(".errormessage").style.display = "block"; 
        
        document.querySelector(".weather").style.display = "none";
    } else {
        var data = await response.json();
        console.log(data);

        document.querySelector(".city").innerHTML = data.name + "-"+data.sys.country;
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
        document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
        document.querySelector(".wind").innerHTML = data.wind.speed + "KPH";
        if (data.weather[0].main == "Clouds") {
            weathericon.src = "images/clouds.png";
        } else if (data.weather[0].main == "Clear") {
            weathericon.src = "images/clear.png";
        } else if (data.weather[0].main == "Rain") {
            weathericon.src = "images/rain.png";
        } else if (data.weather[0].main == "Drizzle") {
            weathericon.src = "images/drizzle.png";
        } else if (data.weather[0].main == "Mist") {
            weathericon.src = "images/mist.png";
        }
        document.querySelector(".weather").style.display = "block";
        document.querySelector(".errormessage").style.display = "none"; 
    }
}

searchbtn.addEventListener("click", () => {
    checkWeather(searchbox.value);
});


