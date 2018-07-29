$(function(){
	$('.main-slider').slick({
  arrows:false,
  dots: true,
	});


function myW(){


if ($(window).width()<768) {
			$('.headerSecond ul.headerRight').appendTo('.mobileMenuRight');
			$('.headerFerst  ul.headerLeft').appendTo('.mobileMenuLeft');
			$('.headerFerst  ul.headerRight').appendTo('.mobileMenuLeft');
}else {
			$('.mobileMenuLeft  .headerLeft').appendTo('.headerFerst  .myRow');
			$('.mobileMenuLeft  .headerRight').appendTo('.headerFerst  .myRow');
			$('.mobileMenuRight  .headerRight').appendTo('.headerSecond  .myRow');
	  }
    };

$(window).on('load resize',myW);

	$('.toggleBtn').on('click',function(){
		$('.headerBottom').slideToggle();
	});

	































});