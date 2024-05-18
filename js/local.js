$( ".dropmenuToggle" ).click(function() {
  $( this ).parent('.nav-item').toggleClass("active");
  //$( this ).parent('.qnsTop').toggleClass("hide");
})

$(document).ready(function(){
  $('.singleSlider').owlCarousel({
      loop:true,
      margin:20,
      nav:true,
      autoplay:false,
      autoplayTimeout:10000,
      dots:true,
      navText : ["<img src='images/arrow-left.png' />","<img src='images/arrow-right.png' />"],
      responsive:{
          0:{
              items:1
          },
          600:{
              items:1
          },
          1000:{
              items:1
          }
      }
  });
  $('.threeSlider').owlCarousel({
      loop:true,
      margin:30,
      nav:true,
      autoplay:false,
      autoplayTimeout:3000,
      dots:true,
      navText : ["<img src='images/arrow-left.png' />","<img src='images/arrow-right.png' />"],
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
  $('.blogSlider').owlCarousel({
        loop:true,
        margin:50,
        nav:false,
        autoplay:true,
        autoplayTimeout:3000,
        dots:false,
        navText : ["<img src='images/arrow-left.png' />","<img src='images/arrow-right.png' />"],
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


$( ".navbar-toggler, .cross-toggler" ).click(function() {
  $("#navbarSupportedContent").toggleClass("active");
  $(".overLay").toggleClass("active");
});

$(window).scroll(function() {    
    var scroll = $(window).scrollTop();
    if (scroll >= 41) {
        $(".mainHeader").addClass("fixedHeader");
    }else{
    	$(".mainHeader").removeClass("fixedHeader");
    }
});
  
// When the user scrolls the page, execute myFunction 
window.onscroll = function() {myFunction()};

function myFunction() {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  document.getElementById("myBar").style.width = scrolled + "%";
}
