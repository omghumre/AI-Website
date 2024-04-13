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
        // 600:{
        //   items:2
        // },
        // 1000:{
        //   items:3
        // }
      }
    });
  });
  
  // script.js
document.addEventListener('DOMContentLoaded', function() {
  var cardRow = document.getElementById('cardRow');

  // Data for cards
  var cardsData = [
    {
      title: 'Card 1',
      content: 'Content for card 1.'
    },
    {
      title: 'Card 2',
      content: 'Content for card 2.'
    },
    {
      title: 'Card 3',
      content: 'Content for card 3.'
    }
  ];

  // Create cards
  cardsData.forEach(function(card) {
    var cardCol = document.createElement('div');
    cardCol.classList.add('col', 's12', 'm4');

    var cardElement = document.createElement('div');
    cardElement.classList.add('card');

    var cardImage = document.createElement('div');
    cardImage.classList.add('card-image', 'waves-effect', 'waves-block', 'waves-light');
    cardImage.innerHTML = '<img class="activator" src="https://via.placeholder.com/400x200" alt="Card Image">';

    var cardContent = document.createElement('div');
    cardContent.classList.add('card-content');
    cardContent.innerHTML = '<span class="card-title activator grey-text text-darken-4">' + card.title + '<i class="material-icons right">more_vert</i></span>' +
                            '<p><a href="#">This is a link</a></p>';

    var cardReveal = document.createElement('div');
    cardReveal.classList.add('card-reveal');
    cardReveal.innerHTML = '<span class="card-title grey-text text-darken-4">' + card.title + '<i class="material-icons right">close</i></span>' +
                            '<p>' + card.content + '</p>';

    cardElement.appendChild(cardImage);
    cardElement.appendChild(cardContent);
    cardElement.appendChild(cardReveal);
    cardCol.appendChild(cardElement);
    cardRow.appendChild(cardCol);
  });

  // Initialize Materialize components
  M.AutoInit();
});


// script.js
$(document).ready(function(){
  $('#contact-form').submit(function(e){
    e.preventDefault(); // Prevent default form submission
    // Fetch form data
    var formData = {
      name: $('#name').val(),
      email: $('#email').val(),
      message: $('#message').val()
    };

    // Here you can perform additional validation if needed

    // Send form data to server (example using AJAX)
    $.ajax({
      url: 'process_form.php', // Replace 'process_form.php' with your backend endpoint
      method: 'POST',
      data: formData,
      success: function(response){
        // Handle success response
        console.log('Form submitted successfully:', response);
        alert('Thank you for your message!');
        // Optionally, clear form fields
        $('#contact-form')[0].reset();
      },
      error: function(xhr, status, error){
        // Handle error response
        console.error('Form submission error:', error);
        alert('An error occurred. Please try again later.');
      }
    });
  });
});
