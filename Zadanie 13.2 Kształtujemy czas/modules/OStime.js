function getOStime (uptime) {
    var hoursTotal = uptime / 60 / 60;
    var minutesTotal = uptime / 60 % 60;
    var secondsLeft = uptime % 60;

    return Math.floor(hoursTotal) + ' h ' + minutesTotal.toFixed(0) + ' min ' + (secondsLeft.toFixed(0)) + ' sec';

}

exports.print = getOStime;
