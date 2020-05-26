
/* Navbar Shrink */

/*
$(function(){
  $(window).scroll(function() {
     if($(window).scrollTop() >= 100) {
       $('nav').addClass('scrolled');
        $('nav').addClass('fixed-top');
        
     }
    else {
      $('nav').removeClass('scrolled');
      $('nav').removeClass('fixed-top');
    }
  });
});
*/

/* Smooth SCrolling */






$(document).ready(function(){
  // Add smooth scrolling to all links
  $("a").on('click', function(event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 1200, function(){
   
        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });
});



/* Newsletter Subscription Form */


const inputs = document.querySelectorAll(".input");


function addcl(){
  let parent = this.parentNode.parentNode;
  parent.classList.add("focus");
}

function remcl(){
  let parent = this.parentNode.parentNode;
  if(this.value == ""){
    parent.classList.remove("focus");
  }
}


inputs.forEach(input => {
  input.addEventListener("focus", addcl);
  input.addEventListener("blur", remcl);
});


/* TypeJS components */

new TypeIt("#simpleUsage", {
  strings: "Subscribe",
  speed: 100,
  waitUntilVisible: true
}).go();

new TypeIt("#testimonial-letter", {
  strings: "I am pleased with the application and I use it all the time",
  speed: 50,
  waitUntilVisible: true
}).go();

new TypeIt("#testimonial-letter2", {
  strings: "My friend has found the love of his life with this aplication",
  speed: 50,
  waitUntilVisible: true
}).go();


new TypeIt(".section-subheading", {
  strings: "Simple and affordable price plans for you and your friends.",
  speed: 40,
  waitUntilVisible: true
}).go();



/* Loading Animation */


 $(window).on("load",function(){
          $(".loader-wrapper").fadeOut(1500);
        });
