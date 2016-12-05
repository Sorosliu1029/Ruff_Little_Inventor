'use strict';
// motor controller
var controller;

$.ready(function (error) {
    if (error) {
        console.log(error);
        return;
    }

    $('#led-g').turnOn();
    controller = $('#controller');
    console.log('here we get controller', controller);
    controller.forwardRotateA(0.5);
});

$.end(function () {
    $('#led-g').turnOff();
    controller.stopRotateA();
});
