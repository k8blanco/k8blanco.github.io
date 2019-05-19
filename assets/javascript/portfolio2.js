//Portfolio 2
var demoLink = "";


$(document).ready(function(){

    //Materialize Initializers and Options/Functions
    $('.sidenav').sidenav({
      isFixed: true
    });

    $('.parallax').parallax(); 

    $('.fixed-action-btn').floatingActionButton({
      direction: "left"
    });

    $(".dropdown-trigger").dropdown({
      closeOnClick: true
    });

    $(".carousel").carousel();

    $('.modal').modal();
    
    //add listeners for screen size
    // carouselSize(x);
    // x.addListener(carouselSize);

    //media query function for carousel size
    // carouselSize();

    //carousel oncycle to function
    $(".carousel.carousel-slider").carousel({
      fullWidth: true,
      indicators: true,
      onCycleTo: function(ele) {
        //console log entire element and index of element
        console.log(ele);
        console.log($(ele).index());
        //assign demoLink
        demoLink = $("#" + ele.id).attr("href");
        console.log("element id: ", ele.id);
        $(".demoBtn").attr("href", demoLink);
        console.log("demo link: ", demoLink);

      }
    });
    $(".demoBtn").on("click", function() {
      console.log("you clicked me! My href is: ", demoLink);
    })
 });

//!! LOAD INTO NPM !! typewriter.js
// var app = document.getElementById('app');

// var typewriter = new Typewriter(app, {
//     loop: true
// });

// typewriter.typeString('Full Stack Developer')
//     .pauseFor(2500)
//     .deleteAll()
//     .typeString('Strings can be removed')
//     .pauseFor(2500)
//     .deleteChars(7)
//     .typeString('<strong>altered!</strong>')
//     .pauseFor(2500)
//     .start();
