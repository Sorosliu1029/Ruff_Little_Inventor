'use strict';

// soil moisture sensor
var moistureSensor;
// oled display
var oled;

$.ready(function (error) {
    if (error) {
        console.log(error);
        return;
    }
    moistureSensor = $('#soil-moisture-sensor');
    oled = $('#oled');
    oled.print(0, 0, 'Start');

    moistureSensor.on('veryWet', function() {
        console.log('Soil is very wet');
        oled.print(0, 0, 'very wet');
    });

    moistureSensor.on('wet', function() {
        console.log('Soil is wet');
        oled.print(0, 0, 'wet');
    });

    moistureSensor.on('dry', function() {
        console.log('Soil is dry');
        oled.print(0, 0, 'dry');
    });
});

$.end(function () {
    $('#oled').clear();
});
