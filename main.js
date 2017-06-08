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