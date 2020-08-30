//   $(window).scroll(function(event){

  //   var yOffset = window.pageYOffset;
  //   var breakpoint = 50;
  //   if (yOffset > breakpoint){
  //     $("nav").addClass('active');
  //   }else{
  //     $("nav").removeClass('active');
  //   }

  // });

    // Change style of navbar on scroll
    // window.onscroll = function() {myFunction()};
    // function myFunction() {
    //     var navbar = document.getElementById("myNavbar");
    //     if (document.body.scrollTop > 10 || document.documentElement.scrollTop > 10) {
    //         navbar.className = "bar" + " card" + " animate-top" + " white";
    //     } else {
    //         navbar.className = navbar.className.replace(" card animate-top white", "");
    //     }
    // }


    // 原
    // function toggleFunction() {
    //     var x = document.getElementById("navDemo");
    //     if (x.className.indexOf("show") == -1) {
    //         x.className += " show";
    //     } else {
    //         x.className = x.className.replace(" show", "");
    //     }
    // }

function toggleFunction() {
    var x = document.getElementById("navDemo");
    x.classList.toggle('show');
    x.classList.toggle('hide');
}

    // ham
    // function myFunction(x) {
    //     x.classList.toggle("change");
    // }

//page fade

// document.body.className += ' fade-out';

//   $(function() {
//       $('body').removeClass('fade-out');
// });

$(document).ready(function(){

/*! Fades in page on load */
$('body').css('display', 'none');
$('body').fadeIn(100);

});

// slider

// let sliderImages = document.querySelectorAll(".slide"),
//     arrowLeft = document.querySelector("#arrow-left"),
//     arrowRight = document.querySelector("#arrow-right"),
//     current = 0;

  // Clear all images
  // function reset() {
  //   for (let i = 0; i < sliderImages.length; i++) {
  //     sliderImages[i].style.display = "none";
  //   }
  // }

  // Init slider
  // function startSlide() {
  //   reset();
  //   sliderImages[0].style.display = "block";
  // }

  // Show prev
  // function slideLeft() {
  //   reset();
  //   sliderImages[current - 1].style.display = "block";
  //   current--;
  // }

  // Show next
  // function slideRight() {
  //   reset();
  //   sliderImages[current + 1].style.display = "block";
  //   current++;
  // }

  // Left arrow click
  // arrowLeft.addEventListener("click", function() {
  //   if (current === 0) {
  //     current = sliderImages.length;
  //   }
  //   slideLeft();
  // });

  // Right arrow click
  // arrowRight.addEventListener("click", function() {
  //   if (current === sliderImages.length - 1) {
  //     current = -1;
  //   }
  //   slideRight();
  // });

  // startSlide();