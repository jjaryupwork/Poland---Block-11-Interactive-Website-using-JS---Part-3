var geolocationSuccessHandler = function(position) {
    loadWeather(position.coords.latitude + ',' + position.coords.longitude);
};

var geolocationErrorHandler = function() {
    alert('You dont allow to use geolocation');
    loadWeather("Cracow, PL", 'c');
}

function getWeather() {
    if ('geolocation' in navigator) {
        navigator.geolocation.getCurrentPosition(geolocationSuccessHandler,
            geolocationErrorHandler);
    } else {
        loadWeather("Warsaw, PL", '');
    }
}


$(document).ready(function() {
    setInterval(getWeather, 3600000);
    getWeather();
});

function loadWeather(location, woeid) {
    $.simpleWeather({
        location: location,
        woeid: woeid,
        unit: 'c',
        success: function(weather) {
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

        error: function(error) {
            $(".error").html('<p>' + error + '</p>');
        }
    });
}
