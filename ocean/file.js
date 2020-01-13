//TOGGLE
$(document).ready(function()
{
    $('.menu').click(function()
    {
        $('ul').toggleClass('active');
    }
    )
}
)
//BOOTSTRAP COLLAPSE

  
$(document).ready(function(){
    $("#demo").on("hide.bs.collapse", function(){
      $(".btn").html('<span class="glyphicon glyphicon-plus"></span> Open');
    });
    $("#demo").on("show.bs.collapse", function(){
      $(".btn").html('<span class="glyphicon glyphicon-remove"></span> Close');
    });
  });

  //PORTOFOLIO
  // (function(){
  //     'use strict';
  //     $('ul.filters >li').on('click',function(e)
  //     {
  //         e.preventDefault();
  //         $('ul.filters >li').rremoveClass('active');
  //         $(this).addClass('active')
  //     })
  // })
//COUNTER
// $('.counter').counterUp({
//     delay: 10,
//     time: 2000
//   });
//   $('.counter').addClass('animated fadeInDownBig');
//   $('h3').addClass('animated fadeIn');
$(document).ready(function() {

    var counters = $(".count");
    var countersQuantity = counters.length;
    var counter = [];
  
    for (i = 0; i < countersQuantity; i++) {
      counter[i] = parseInt(counters[i].innerHTML);
    }
  
    var count = function(start, value, id) {
      var localStart = start;
      setInterval(function() {
        if (localStart < value) {
          localStart++;
          counters[id].innerHTML = localStart;
        }
      }, 40);
    }
  
    for (j = 0; j < countersQuantity; j++) {
      count(0, counter[j], j);
    }
  });
  //SCROL
  //Get the button
var mybutton = document.getElementById("myBtn");



function scrollFunction() {
  var mybutton = document.getElementById("myBtn");

  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
  //TRY
  // $(document).ready(function(){
  //   $("#third").on("hide.bs.collapse", function(){
  //     $(".btn").html('<span class="glyphicon  glyphicon-collapse-down"></span> Open');
  //   });
  //   $("#third").on("show.bs.collapse", function(){
  //     $(".btn").html('<span class="glyphicon glyphicon-collapse-up"></span> Close');
  //   });
  // });
  
//NEXXTPHOTO
// jQuery('body').on('click','.next-tab', function(){
//     var next = jQuery('.Img > .active').next('li');
//     if(next.length){
//       next.find('a').trigger('click');
//     }else{
//       jQuery('#nextImg a:first').tab('show');
//     }
// });

// jQuery('body').on('click','.previous-tab', function(){
//     var prev = jQuery('.Img > .active').prev('li')
//     if(prev.length){
//       prev.find('a').trigger('click');
//     }else{
//       jQuery('#nextImg a:last').tab('show');
//     }
// });
