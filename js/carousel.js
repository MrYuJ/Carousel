;(function ($) {
	function Carousel() {
		this.config = {
			boxWidth : 1000,
			boxHeight : 270,
			carouselWidth : 640,
			carouselHeight : 270,
			speed : 500,
			verticalAlign : "middle",
			scale : 0.9,
		};
	} 
	Carousel.prototype = {
		init : function (config) {
			var CIG = $.extend(this.config,config);
			console.log(CIG);
		}
	};
	window.Carousel = Carousel;
})($)