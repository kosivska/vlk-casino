'use strict';

$(".preview").not(":first").hide();
$(".games .games__menuItem").click(function() {
	$(".games .games__menuItem").removeClass("active").eq($(this).index()).addClass("active");
	$(".preview").hide().eq($(this).index()).fadeIn()
}).eq(0).addClass("active");

$('.carousel').slick({
		dots: true,
		infinite: true,
		arrows: false,
		autoplay: false,
		autoplaySpeed: 1300
	});