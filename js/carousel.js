;(function ($) {
	function Carousel(carouselBox) {

	} 
	Carousel.prototype = {

	};
	/**
	 * 初始化方法去实例化全部的对象
	 * @param  {carouselBoxes 传进来的DOM集合}
	 */
	Carousel.init = function (carouselBoxes) {
		//这个this指Carousel
		var _this = this; 
		carouselBoxes.each(function () {
			//这个this指carouselBoxes循环出来的每一个carouselBox
			new _this(this); 
		});
	};
	window.Carousel = Carousel;
})($)