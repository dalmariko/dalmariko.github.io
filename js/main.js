$(function(){
	$('.main-slider').slick({
  arrows:false,
  dots: true,
	});


	  



$(window).on('resize', function(){
if ($(window).width()<768) {
			$('#hsr').appendTo('.mobileMenuRight');
			$('#hfl').appendTo('.mobileMenuLeft');
			$('#hfr').appendTo('.mobileMenuLeft');
			$('.headerBottom').slideUp();
}else {
			$('#hfl').appendTo('.headerFerst  .myRow');
			$('#hfr').appendTo('.headerFerst  .myRow');
			$('#hsr').appendTo('.headerSecond  .myRow');
			$('.headerBottom').slideDown();
	  }
});

$(window).trigger('resize');



	$('.toggleBtn').on('click',function(){
		$('.headerBottom').slideToggle();
	});






















});