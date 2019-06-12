$(document).ready(() => {
  resetWeatherBox();

  $("#location").keypress(event => {
    if (event.which == 13) {
      weatherForecast();
    }
  });
});

const resetWeatherBox = () => {
  $("#weather_box").empty();
  $("#weather_box").append(
    '<textarea id="location" class="box--input_field" placeholder="Search by city... (but lets face it, it\'s probably London)"></textarea>\
        <button class="box--submit_button" type="submit" onclick="weatherForecast()">Get the forecast</button>\
        <h3 class="box--subheader blue interactive_box--subheader">What\'s the weather forecast?</h3>'
  );
};

const weatherForecast = () => {
  const location = $("#location").val();
  $("#weather_box").empty();
  $.ajax({
    url: "/weather",
    data: { location: location }
  }).then(data => {
    $("#weather_box").append(data);
  });
};
