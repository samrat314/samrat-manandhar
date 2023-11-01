
$(window).scroll(function () {
    if ($(window).scrollTop() > 50) {
        $(".navbar").addClass("active");
        
    } else {
        $(".navbar").removeClass("active");
        
    }
});

// Toggle content on animation click
$(".animation-container").click(function () {
    $(".content-section").toggleClass("show-content");
});




$(document).ready(function(){

    // Smooth scrolling for navbar links with the class "scroll-link"
    $(".scroll-link").click(function(event) {
        event.preventDefault();
        var targetSectionId = $(this).attr("href");
        var targetSection = $(targetSectionId);
        if(targetSection.length) {
            $("html, body").animate({
                scrollTop: targetSection.offset().top
            }, 800);
        }
    });



    $(".section-button").click(function(){
        var target = $(this).data("target");
        var targetSection = $("#" + target);

        // Toggle visibility of the clicked section
        targetSection.toggle();

        // Scroll to the clicked section if it is visible
        if (targetSection.is(":visible")) {
            $('html, body').animate({
                scrollTop: targetSection.offset().top
            }, 500);
        }
    });
});



document.addEventListener("scroll", function() {
    var scrollPosition = window.scrollY;
    var portfolioSection = document.querySelector(".portfolio");
    var portfolioItems = document.querySelectorAll(".portfolio-item");

    // Add a class to portfolio section when it is in the viewport
    if (isInViewport(portfolioSection)) {
        portfolioSection.classList.add("in-viewport");
    } else {
        portfolioSection.classList.remove("in-viewport");
    }

    // Add animation class to portfolio items when they are in the viewport
    portfolioItems.forEach(function(item) {
        if (isInViewport(item)) {
            item.classList.add("animate");
        } else {
            item.classList.remove("animate");
        }
    });

    // Function to check if an element is in the viewport
    function isInViewport(element) {
        var rect = element.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight)
        );
    }
});



  // JavaScript for dynamic changes on scroll
  const educationSection = document.querySelector('.education');

  function isInViewport(element) {
      const rect = element.getBoundingClientRect();
      return (
          rect.top >= 0 &&
          rect.left >= 0 &&
          rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
          rect.right <= (window.innerWidth || document.documentElement.clientWidth)
      );
  }

  function onScroll() {
      if (isInViewport(educationSection)) {
          educationSection.classList.add('in-viewport');
      }
  }

  window.addEventListener('scroll', onScroll);







  const artworks = document.querySelectorAll('.artwork');
  const modal = document.getElementById('modal');
  const modalImg = document.getElementById('modal-img');
  const closeModal = document.getElementById('close');
  
  artworks.forEach((artwork) => {
      artwork.addEventListener('click', () => {
          modalImg.src = artwork.getAttribute('data-src');
          modal.style.display = 'block';
      });
  });
  
  closeModal.addEventListener('click', () => {
      modal.style.display = 'none';
  });
  
  window.addEventListener('click', (event) => {
      if (event.target === modal) {
          modal.style.display = 'none';
      }
  });
  





