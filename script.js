// script.js
document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.sidenav');
    var instances = M.Sidenav.init(elems);
});

// script.js
$(document).ready(function(){
    $(".owl-carousel").owlCarousel({
      loop:true,
      margin:10,
      nav:false,
      autoplay:true, // Enable autoplay
      autoplayTimeout:3000, // Set autoplay timeout to 5 seconds
      autoplayHoverPause:true, // Pause autoplay when mouse hovers over carousel
      responsive:{
        0:{
          items:1
        },
        600:{
          items:2
        },
        1000:{
          items:3
        }
      }
    });
  });
  