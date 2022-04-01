$(document).ready(function () {
    // set interval to 1000ms or 1s
    setInterval(() => {
        // define the date your counting down to
        var lastDay = new Date("June 25, 2022 12:00:00");

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
        $("#diff-week").text(differenceWeeks + " weeks");
        $("#diff-day").text(differenceDays + " days");
        $("#diff-hour").text(differenceHours + " hours");
        $("#diff-min").text(differenceMinutes + " minutes");
        $("#diff-sec").text(differenceSeconds + " seconds");
    }, 1000)
})
