document.addEventListener('DOMContentLoaded', function() {
  // Fix Badges carousel
  var badgesCarousel = document.querySelector('.badges-container .carousel');
  if (badgesCarousel) {
    badgesCarousel.id = 'badgesCarousel';
    badgesCarousel.querySelectorAll('.carousel-indicators li').forEach(function(li) {
      li.setAttribute('data-target', '#badgesCarousel');
    });
    badgesCarousel.querySelector('.carousel-control-prev').setAttribute('href', '#badgesCarousel');
    badgesCarousel.querySelector('.carousel-control-next').setAttribute('href', '#badgesCarousel');
  }

  // Fix Certifications carousel
  var certsCarousel = document.querySelector('.certifications-container .carousel');
  if (certsCarousel) {
    certsCarousel.id = 'certsCarousel';
    certsCarousel.querySelectorAll('.carousel-indicators li').forEach(function(li) {
      li.setAttribute('data-target', '#certsCarousel');
    });
    certsCarousel.querySelector('.carousel-control-prev').setAttribute('href', '#certsCarousel');
    certsCarousel.querySelector('.carousel-control-next').setAttribute('href', '#certsCarousel');
  }

  // Initialize carousels with jQuery
  if (typeof jQuery !== 'undefined') {
    jQuery('#badgesCarousel').carousel();
    jQuery('#certsCarousel').carousel();
  }
});