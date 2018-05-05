function getOStime (uptime) {
    var hoursTotal = Math.floor(uptime / 60 / 60);
    var minutesTotal = Math.floor(uptime / 60) % 60;
    var secondsLeft = uptime % 60;

    if (hoursTotal > 0) {
        return hoursTotal + ' h ' + minutesTotal + ' min ' + secondsLeft + ' sec';
    } else {
        return minutesTotal + ' min ' + secondsLeft + ' sec';
    }
}

exports.print = getOStime;
