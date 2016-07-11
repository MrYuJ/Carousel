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
		boxWidth : 1000,
		boxHeight : 270,
		imgWidth : 640,
		imgHeight : 270,
		speed : 400,
		verticalAlign : "middle",
		scale : 0.9
	});
});
