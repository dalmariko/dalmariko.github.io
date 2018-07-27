$(function(){
	$('.main-slider').slick({
  arrows:false,
  dots: true,
	});


function myW(){
if ($(window).width()<768) {
			$('.headerFerst .headerLeft').appendTo('.mobileMenu');
			$('.headerFerst .headerRight').appendTo('.mobileMenu');
}else {
			$('.mobileMenu .headerLeft').appendTo('.headerFerst .myRow');
			$('.mobileMenu .headerRight').appendTo('.headerFerst .myRow');
	  }
    };

$(window).on('load resize',myW);


});