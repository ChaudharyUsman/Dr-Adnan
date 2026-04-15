
  (function ($) {
  
  "use strict";

    // FOOTER YEAR (auto-updated)
    function updateCurrentYear() {
      var yearEl = document.getElementById('currentYear');
      if (!yearEl) {
        return;
      }

      yearEl.textContent = new Date().getFullYear();
    }

    updateCurrentYear();

    // EXPERIENCE YEARS (auto-updated from start date)
    function updateExperienceYears() {
      var experienceEl = document.getElementById('experienceValue');
      if (!experienceEl) {
        return;
      }

      var startDateRaw = experienceEl.getAttribute('data-experience-start');
      if (!startDateRaw) {
        return;
      }

      var startDate = new Date(startDateRaw + 'T00:00:00');
      if (Number.isNaN(startDate.getTime())) {
        return;
      }

      var today = new Date();
      var totalMonths = (today.getFullYear() - startDate.getFullYear()) * 12
        + (today.getMonth() - startDate.getMonth());

      // Don't count the current month until the start-day has passed.
      if (today.getDate() < startDate.getDate()) {
        totalMonths -= 1;
      }

      totalMonths = Math.max(totalMonths, 0);
      experienceEl.textContent = (totalMonths / 12).toFixed(2);
    }

    updateExperienceYears();

    // NAVBAR
    $('.navbar-nav .nav-link').click(function(){
        $(".navbar-collapse").collapse('hide');
    });

    // REVIEWS CAROUSEL
    $('.reviews-carousel').owlCarousel({
        center: true,
        loop: true,
        nav: true,
        dots: false,
        autoplay: true,
        autoplaySpeed: 300,
        smartSpeed: 500,
        responsive:{
          0:{
            items:1,
          },
          768:{
            items:2,
            margin: 100,
          },
          1280:{
            items:2,
            margin: 100,
          }
        }
    });

    // Banner Carousel
    //naem azam
    var myCarousel = document.querySelector('#myCarousel')
    var carousel = new bootstrap.Carousel(myCarousel, {
      interval: 3000,
    })

    // REVIEWS NAVIGATION
    function ReviewsNavResize(){
      $(".navbar").scrollspy({ offset: -94 });

      var ReviewsOwlItem = $('.reviews-carousel .owl-item').width();

      $('.reviews-carousel .owl-nav').css({'width' : (ReviewsOwlItem) + 'px'});
    }

    $(window).on("resize", ReviewsNavResize);
    $(document).on("ready", ReviewsNavResize);

    // HREF LINKS
    $('a[href*="#"]').click(function (event) {
      if (
        location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        if (target.length) {
          event.preventDefault();
          $('html, body').animate({
            scrollTop: target.offset().top - 74
          }, 1000);
        }
      }
    });
    
  })(window.jQuery);
