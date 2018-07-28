$(function(){
	$('.main-slider').slick({
  arrows:false,
  dots: true,
	});


function myW(){


if ($(window).width()<768) {
			$('.headerFerst .headerLeft').appendTo('.mobileMenu');
			$('.headerFerst .headerRight').appendTo('.mobileMenu');
			// $('.headerSecond .headerLeft').appendTo('.mobileMenu');
			// $('.headerSecond .headerRight').appendTo('.mobileMenu');
}else {
			$('.mobileMenu .headerLeft').appendTo('.headerFerst .myRow');
			$('.mobileMenu .headerRight').appendTo('.headerFerst .myRow');
			// $('.mobileMenu .headerLeft').appendTo('.headerSecond .myRow');
			// $('.mobileMenu .headerRight').appendTo('.headerSecond .myRow');
	  }
    };



	$('.toggleBtn').on('click',function(){
		$('.headerBottom').slideToggle();
	});

	

$(window).on('load resize',myW);





























});