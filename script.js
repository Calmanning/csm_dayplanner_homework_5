$(document).ready(function () {
    // an attempt at retreving localstorage, but it was proving to be unsuccessful. I think I'll have to go for the JSONstringify/parse method
    $("#9am .plan").val(localStorage.getItem("9oclock"));
    $("#10am .plan").val(localStorage.getItem("10oclock"));
    $("#11am .plan").val(localStorage.getItem("11oclock"));
    $("#12am .plan").val(localStorage.getItem("12oclock"));
    $("#1pm .plan").val(localStorage.getItem("1oclock"));
    $("#2pm .plan").val(localStorage.getItem("2oclock"));
    $("#3pm .plan").val(localStorage.getItem("3oclock"));
    $("#4pm .plan").val(localStorage.getItem("4oclock"));
    $("#5pm .plan").val(localStorage.getItem("5oclock"));

    // Time that shows at the top of the page. It will be different that the operating time, which is very european at the moment.
    var time = moment().format("dddd, hh:mm");
    // console.log(`time: ${time}`);
    $("#currentDay").append(time);

// timeCheck() is a function that weighs the current pinged time (through moment's API) and compares that to the time slots on the scheduler -- it assigns their class (their color) based on whether or not the current time is "equal to", "less than", or "greater than" the pinged time.
    function timeCheck() {
        var dayHour = moment().format("k")
        $(".plan").each(function () {
            var blockTime = parseInt($(this).attr("data-time"));
            console.log(`this is all the block time: ${blockTime}`);

            if (dayHour === blockTime) {
                $(this).removeClass("past");
                $(this).removeClass("future");
                $(this).addClass("present");
            } else if (dayHour < blockTime) {
                $(this).removeClass("past");
                $(this).removeClass("present");
                $(this).addClass("future");
            } else {
                $(this).removeClass("future");
                $(this).removeClass("present");
                $(this).addClass("past");
            }

        })
    }
    timeCheck()
// This is the "save" to local data function. Which works! I just...can't seem to get the data correctly after it's saved.
    $("button").click(function (event) {

        console.log("saved...but not really...not yet");
        var activity = $(this).siblings(".textarea").val();
        var theHour = $(this).attr("data-todo");
        console.log(`activity: ${activity}, ${theHour}`);

        localStorage.setItem(theHour, activity);

    })


}) //don't delete this. It's very important.