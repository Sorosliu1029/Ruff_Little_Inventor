'use strict';

// soil moisture sensor
var moisture_sensor;

$.ready(function (error) {
    if (error) {
        console.log(error);
        return;
    }

    $('#oled').print(0, 0, 'Hello Ruff');
});

$.end(function () {
    $('#oled').clear();
});
