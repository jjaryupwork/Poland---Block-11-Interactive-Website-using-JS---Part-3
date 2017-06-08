/*var intervalID = 0;
var interval = 10000 //default 10 seconds
var tempUnits = "c"; //default Celsius 

var main = function () {
    addDOMEventListeners();
    if ("geolocation" in navigator) {
        getWeather();
        intervalID = setInterval(getWeather, interval);
    }
    else {
        $(".error-container > p").text("We apologize but your browser doesn't support geolocation.");
        $(".error-container").slideDown(400);
    }
}

var getWeather = function () {
    navigator.geolocation.getCurrentPosition(function (position) {
        loadWeather(position.coords.latitude + "," + position.coords.longitude, tempUnits);
    });
}

var loadWeather = function (location, units) {
    $.simpleWeather({
        location: location,
        woeid: "",
        unit: units,
        success: function (weather) {
            $(".location").text(weather.city + ", " + weather.region);
            $(".temperature").html(weather.temp + "&#176;" + weather.units.temp);
            $(".climate").html("<img src='./images/" + weather.code + ".svg' alt='weather icon' />");  
            $(".humidity").text(weather.humidity + "%");
            $(".windspeed").text(weather.wind.speed + " " + weather.units.speed);
            var d = new Date();
            $(".check-time").text("last update: " + d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds());
        },

        error: function (err) {
            var d = new Date();
            $(".error-container > p").text(d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds() + " - " + err);
            $(".error-container").slideDown(400);
        }
    });
};
*/
var eventListener = function (){}




var main = function () {
    eventListener();
    if ("geolocation" in navigator) {
       setInterval(getWeather, 10000);
        getWeather();
    }
    else {
      alert('aaa');
        $(".error").html('<p>' + error + '</p>');
    }
}
var getWeather = function () {
    navigator.geolocation.getCurrentPosition(function (position) {
        loadWeather(position.coords.latitude + "," + position.coords.longitude);
    });
}

var loadWeather = function (location, units) {
    $.simpleWeather({
        location: location,
        woeid: "",
        unit: 'c',
      success: function (weather) {
      city = weather.city;
      temp = weather.temp + '&deg;';
      wcode = '<img class="weathericon" src="images/' + weather.code + '.svg">';
      wind = '<p>' + weather.wind.speed + '</p><p>' + weather.units.speed + '</p>';
      humidity = weather.humidity + '%';
      $(".location").text(city);
      $(".temperature").html(temp);
      $(".climate_bg").html(wcode);
      $(".windspeed").html(wind);
      $(".humidity").text(humidity);
    },
    error: function (error) {
      alert('aaa');
      $(".error").html('<p>' + error + '</p>');
  }
    });
};




$(document).ready(main);