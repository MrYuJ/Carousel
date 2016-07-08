require.config({
	paths:{
		jquery : 'jquery-2.1.1',
		carousel : 'carousel',
		widget : 'widget'
	}
});

require(['jquery','carousel'],function ($,Carousel) {
	var myCarousel = new Carousel();
	myCarousel.init({
		boxWidth : 640,
		boxHeight : 270,
		carouselWidth : 640,
		carouselHeight : 270,
		speed : 700,
		verticalAlign : "middle",
		scale : 0.9
	});
});
