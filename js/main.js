$(function(){
	$('.main-slider').slick({
  arrows:false,
  dots: true,
	});


function myW(){


if ($(window).width()<768) {
			$('#hsr').appendTo('.mobileMenuRight');
			$('#hfl').appendTo('.mobileMenuLeft');
			$('#hfr').appendTo('.mobileMenuLeft');
}else {
			$('#hfl').appendTo('.headerFerst  .myRow');
			$('#hfr').appendTo('.headerFerst  .myRow');
			$('#hsr').appendTo('.headerSecond  .myRow');
	  }
    };

$(window).on('load resize',myW);

	$('.toggleBtn').on('click',function(){
		$('.headerBottom').slideToggle();
	});

	































});