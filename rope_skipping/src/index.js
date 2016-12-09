'use strict';
// motor controller
var controller;
// button to controll
var button;
// motor status indicator
var status = 0;

$.ready(function (error) {
    if (error) {
        console.log(error);
        return;
    }

    $('#led-g').turnOn();
    controller = $('#controller');
    button = $('#button');
    button.on('push', function () {
        if (status === 0) {
            controller.forwardRotateA(0.5);
        } else {
            controller.stopRotateA();
        }
        status ^= 1;
    })
});

$.end(function () {
    $('#led-g').turnOff();
    controller.stopRotateA();
});
