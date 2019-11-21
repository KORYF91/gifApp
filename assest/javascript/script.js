console.log("Testing testing is this thing on?")

$("button").on("click", function () {

  var animal = $(this).attr("data-animal");
  var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + animal + "&api_key=VK1xaOZy28bs02RHNjqCEzsF3rkKPUsN&limit=10";


  $.ajax({
    url: queryURL,
    method: "GET"
  }).then(function (response) {

    console.log(queryURL);
    console.log(response);

    var results = response.data;

    for (var i = 0; i < results.length; i++) {
      var animals = $("<div>");
      var p = $("<p>").text("Rating : " + results[i].rating);
      var animalImg = $("<img>");
      animalImg.attr("src", results[i].images.fixed_height.url);
     
      animals.append(p);
      animals.append(animalImg);

      $("#gifs-here").prepend(animals);
    }

  });

});

var input = $("#search");
var submitt = $("#add");

$("#add").on("click", function (event) {
  event.preventDefault();

  var inputVal = input.val();
  var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + inputVal + "&api_key=VK1xaOZy28bs02RHNjqCEzsF3rkKPUsN&limit=10";


  $.ajax({
    url: queryURL,
    method: "GET"
  }).then(function (response) {

    console.log(queryURL);
    console.log(response);

    var results = response.data;

    for (var i = 0; i < results.length; i++) {
      var animals = $("<div>");
      var p = $("<p>").text("Rating : " + results[i].rating);
      var animalImg = $("<img>");
      animalImg.attr("src", results[i].images.fixed_height.url);
     
      animals.append(p);
      animals.append(animalImg);
      $("#buttons-view").prepend("<button>");
      $("#gifs-here").prepend(animals);
    }

  });

});


