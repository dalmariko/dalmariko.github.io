$(function(){
	$('.main-slider').slick({
  arrows:false,
  dots: true,
	});


function myW(){
if ($(window).width()<768) {
			$('.headerFerst .headerLeft').appendTo('.mobileMenu');
			$('.headerFerst .headerRight').appendTo('.mobileMenu');
			$('.headerFerst .toggleBtn').appendTo('.mobileMenu');
}else {
			$('.mobileMenu .headerLeft').appendTo('.headerFerst .myRow');
			$('.mobileMenu .headerRight').appendTo('.headerFerst .myRow');
			$('.mobileMenu .toggleBtn').appendTo('.headerFerst .myRow');
	  }
    };

$(window).on('load resize',myW);


$('.toggleBtn').on('click',function(){
$('.headerBottom').slideToggle(); 
});





























});