/**
 * Created by lalit on 2/4/17.
 */

var time = new Date();

var clock = document.getElementById("timer");

var hexColor = document.getElementById("hex-color");


function hexClock() {
    var time = new Date();
    var hours = (time.getHours() % 12).toString();
    var minutes = time.getMinutes().toString() ;
    var seconds = time.getSeconds().toString();

    if (hours.length < 2) {
        hours = "0" + hours;
    }

    if (minutes.length < 2) {
        minutes = "0" + minutes;
    }

    if (seconds.length < 2) {
        seconds = "0" + seconds;
    }

    var clockStr = hours + ":"  + minutes + ":" + seconds;

    var hexColorStr = "#" + hours + minutes + seconds;

    clock.textContent = clockStr;

    hexColor.textContent = hexColorStr;

    document.body.style.backgroundColor = hexColorStr;

    setTimeout(hexClock, 1000);


}

hexClock();