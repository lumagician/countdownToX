setInterval(() => {
    // define the date your counting down to
    var lastDay = new Date("November 7, 2024 12:00:00");

    // time in mills since 1970 for set date
    var lastDayMillis = lastDay.getTime();

    // time in mills since 1970
    var todayMillis = Date.now();

    // calculate different units
    var differenceMillis = (lastDayMillis - todayMillis);
    var differenceSeconds = Math.floor(differenceMillis / 1000);
    var differenceMinutes = Math.floor(differenceSeconds / 60);
    var differenceHours = Math.floor(differenceMinutes / 60);
    var differenceDays = Math.floor(differenceHours / 24);
    var differenceWeeks = Math.floor(differenceDays / 7);

    // write to screen using jquery
    document.getElementById("diff-week").innerHTML = differenceWeeks + " weeks";
    document.getElementById("diff-day").innerHTML = differenceDays + " days";
    document.getElementById("diff-hour").innerHTML = differenceHours + " hours";
    document.getElementById("diff-min").innerHTML = differenceMinutes + " minutes";
    document.getElementById("diff-sec").innerHTML = differenceSeconds + " seconds";
}, 1000);