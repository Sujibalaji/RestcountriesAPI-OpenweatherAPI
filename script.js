async function foo() {
    try {

        var res = await fetch("https://restcountries.com/v3.1/all");
        var data1 = await res.json();

        var container = document.createElement("div");
        container.className = "containerClass";
        var row = document.createElement("div");
        row.className = "row";

        for (var i = 0; i < data1.length; i++) {
            var lati = data1[i].latlng[0];
            var longi = data1[i].latlng[1];
            console.log(lati, longi);



            var col = document.createElement("div");
            col.className = "col-lg-4";
            col.innerHTML = `<div class="card text-center" style="width: 300px; margin-top:10px; background-color:lightblue;">
      <h5 class="card-header">${data1[i].name.common}</h5>
      <div class="card-body">
      <div>
       <img src=${data1[i].flags.png} alt="country-flags"  style="height:100px; width:150px;"></div>
        <p class="card-text">Capital: ${data1[i].capital}<br> Region: ${data1[i].region}<br> Country Code : ${data1[i].cca2} <br> Latitude: ${data1[i].latlng[0]}<br> Longitude: ${data1[i].latlng[1]} </p>
    
        
        <button class="btn btn-primary weatherButton" onclick="fetchWeather(${lati},${longi},${i})">Click for Weather</button>
        <div id="weatherReport${i}"></div>
       
      </div>
    </div>`
            row.append(col);
            container.append(row);
            document.body.append(container);




        }

    }
    catch (error) {
        console.log(error);

    }

}

//function to fetch weather data
async function fetchWeather(lat, lon, j) {


    try {
        const weatherDiv = document.querySelector(`#weatherReport${j}`);
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=ace9d835530fd6245ff07bdeb26593bb`)
        const weatherData = await response.json();
        weatherDiv.innerHTML = weatherData.main.temp;

    }
    catch (error) {
        console.log(error);
    }
}


foo();

