'use strict';

// soil moisture sensor
var moistureSensor;
// oled display
var oled;
// relay to control water pump
var relay;

$.ready(function (error) {
    if (error) {
        console.log(error);
        return;
    }
    moistureSensor = $('#soil-moisture-sensor');
    oled = $('#oled');
    relay = $('#relay');
    oled.clear();
    oled.print(0, 0, 'Start');

    moistureSensor.on('veryWet', function() {
        console.log('Soil is very wet');
        oled.clear();
        oled.print(0, 0, 'very wet');
        relay.turnOff();
    });

    moistureSensor.on('wet', function() {
        console.log('Soil is wet');
        oled.clear();
        oled.print(0, 0, 'wet');
    });

    moistureSensor.on('dry', function() {
        console.log('Soil is dry');
        oled.clear();
        oled.print(0, 0, 'dry');
        relay.turnOn();
    });
});

$.end(function () {
    relay.turnOff();
    oled.clear();
});
