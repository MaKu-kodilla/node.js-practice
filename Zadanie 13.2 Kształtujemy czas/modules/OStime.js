function getOStime (uptime) {
    var hoursTotal = uptime / 60 / 60;
    var minutesTotal = uptime / 60 % 60;
    var secondsLeft = uptime % 60;

    if (hoursTotal >= 1) {
        return Math.floor(hoursTotal) + ' h ' + Math.floor(minutesTotal) + ' min ' + Math.floor(secondsLeft) + ' sec';
    } else {
        return Math.floor(minutesTotal) + ' min ' + Math.floor(secondsLeft) + ' sec';
    }
}

exports.print = getOStime;
