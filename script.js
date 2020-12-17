

console.log("test");

var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=seattle&appid=166a433c57516f51dfab1f7edaed8413"

$.get(queryURL).then(function (response) {
    console.log(response);
})

$(".textarea").click(function() {
    console.log('this textfield was clicked')
    $(".textarea").text(imput);
})
