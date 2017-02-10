$(document).ready(function(){
var section = $('#mystory');

var backgrounds = new Array(
    'url(https://media.timeout.com/images/103444978/image.jpg)'
  , 'url(http://media.architecturaldigest.com/photos/5699802bc6772b7614567435/2:1/w_2560/new-york-city-guide.jpg)'
  , 'url(http://nycparkingauthority.com/wp-content/uploads/2014/05/nyc-monthly-parking.jpg)'
);

var current = 0;

function nextBackground() {
    current++;
    current = current % backgrounds.length;
    section.css('background-image', backgrounds[current]);
}
setInterval(nextBackground, 5000);

section.css('background-image', backgrounds[0]);
});
