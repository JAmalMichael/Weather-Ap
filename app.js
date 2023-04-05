const apiKey = "897df13c14a17d4f58fcf752cd50283c";
const  apiUrl = "https://api.openweathermap.org/data/2.5/weather?q={Canada}&appid={897df13c14a17d4f58fcf752cd50283c}";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon")

async function checkWeather(city) {
        const response = await fetch(apiUrl + city + `&appid=${apiKey}`);

        //checking response code
        if(response.status = "404") {
            document.querySelector(".error").style.display = "block";
            document.querySelector(".weather").style.display = "none";
        } 
        else {
            var data = await response.json();


            //Updating html data from input
            document.querySelector(".city").innerhtml = data.name;
            document.querySelector(".temp").innerhtml = Math.round(data.main.temp) + "°c";
            document.querySelector(".humidity").innerhtml = data.main.humidity + "%";
            document.querySelector(".wind").innerhtml = data.wind.speed + "  km/hr ";
    
            //changing the logo of the cite
            if(data.checkWeather[0].main == "clouds") {
                weatherIcon.src = "images/clouds.png";
            } else if(data.checkWeather[0].main == "clear") {
                weatherIcon.src = "images/clear.png";
            } else if(data.checkWeather[0].main == "Rain") {
                weatherIcon.src = "images/Rain.png";
            } else if(data.checkWeather[0].main == "Drizzle") {
                weatherIcon.src = "images/Drizzle.png";
            } else if(data.checkWeather[0].main == "Mist") {
                weatherIcon.src = "images/Mist.png";
            } 
    
        }

     

        //Displayind the site content after entering a city value.
        document.querySelector(".weather").style.display = "block";
        document.querySelector(".error").style.display = "none";
}

searchBtn.addEventListener("click", ()=> {
    checkWeather(searchBox.value);
})
