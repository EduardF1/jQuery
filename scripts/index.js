
//  safeguard jQuery usage by waiting until the document (web page) is loaded with all
//  adherent libraries. Alternatively, to ensure that the library is loaded, we set the
//  script import just above the end body tag </body>.
//
// $(document).ready(function () {
//     $("h1").css("color", "blue");
// });

// we can add as many classes as it is needed
// to remove a class, use .removeClass("className");
// $("h1").addClass("title-large margin-50");

// $("h1").text("California");
//
// // replace element(s) text
// $("button").text("A button...");
//
// // replace element(s) html content
// $("button").html("<em>California</em>")
//
// // select/get the value of the src attribute
// $("img").attr("src");
//
// // set the value of the href
// $("a").attr("href", "https://www.yahoo.com");

// Add an event/click listener
// $("h1").click(function () {
//    $("h1").css("color", "white");
// });

// $("button").click(function () {
//     $("h1").css("color", "purple");
// })

//Detect keypress events
// $("input").keypress(function (event) {
//     console.log(event.key);
// })

// Detect keypress events in the entire web page
// and set the <h1> text to the pressed key's value.
// $(document).keypress(function (event) {
//     $("h1").text(`${event.key}`);
// })

// To handle both click and keypress events, we can use on().
// It accepts a variety of event types.
// $("h1").on("mouseover", function () {
//     $("h1").css("color", "yellow");
// })

// // add the button before the <h1>
// $("h1").before("<button>New</button>");
// // add the button after the </h1>
// $("h1").after("<button>New</button>");
// // add the button after the <h1>
// $("h1").prepend("<button>New</button>");
// // add the button before the </h1>
// $("h1").append("<button>New</button>");


// // we can use either .hide() or show() to animate the element
// // or toggle to switch between hide() and show()
// $("button").on("click", function (){
//     $("h1").toggle();
// })

// // fadeOut() will reduce the opacity smoothly, lastly making the
// element disappear (reduce opacity sequentially)
// $("button").on("click", function (){
//     $("h1").fadeOut();
// })

// fadeIn() will increase the opacity smoothly, lastly making the
// element appear (reach full opacity).
// $("button").on("click", function (){
//     $("h1").fadeIn();
// })

// fadeToggle() will allow the switch between states (fadeIn() <-> fadeOut())
// $("button").on("click", function (){
//     $("h1").fadeToggle();
// })

// Make the element <h1> slide up (collapse effect)
// $("button").on("click", function (){
//     $("h1").slideUp();
// });

// Make the element <h1> slide down (reappear effect)
// $("button").on("click", function (){
//     $("h1").slideDown();
// });

// slideToggle() will allow the switch between states (slideUp() <-> slideDown())
// $("button").on("click", function (){
//     $("h1").slideToggle();
// });

// To create custom css animations, we can use the animate() function.
// This allows us to modify specific css properties of the selected object.
// The function inputs should always be specified in the following formats (numeric or strings):
//  - .animate({margin:"20%"});
//  - .animate({opacity:0.5});
//  - Invalid: .animate({color:red});
// $("button").on("click", function (){
//     $("h1").animate({opacity:0.5});
// });


// combining animations (chaining): will be executed in sequential order.
// $("button").on("click", function () {
//     $("h1").slideUp().slideDown().animate({opacity:0.5});
// })

