define(['widget'],function (_widget) {
	var $carouselBox,$carouselImgList,$imgSize,$firstImg,$carouselBtnR,
		$carouselRtnL;
	function Carousel() {
		this.config = {
			boxWidth : 1000,
			boxHeight : 270,
			imgWidth : 640,
			imgHeight : 270,
			speed : 500,
			verticalAlign : "middle",
			scale : 0.9,
		};
	} 
	Carousel.prototype = $.extend({},new _widget(),{
		init : function (config) {
			$.extend(this.config,config);
			this.render();
			return this;
		},
		/***************接口BEGIN*****************/
		// 用于添加DOM节点
		renderUI : function () {

		},
		// 用于缓存DOM
		cacheDOM : function () {
			$carouselBox = $(".carousel-box");
			$carouselImgList = $(".carousel-img-list");
			$imgSize = $carouselImgList.find("li").size();
			$firstImg = $carouselImgList.find("li").eq(0);
			$carouselBtnR = $(".carousel-btn-r");
			$carouselRtnL = $(".carousel-btn-l");
		},
		// 用于绑定事件
		bindUI : function () {},
		// 用于初始化组件属性
		syncUI : function () {
			console.log(Math.floor($imgSize/2));
			var btnWidth = (this.config.boxWidth - this.config.imgWidth)/2;
			var btnHeight = this.config.boxHeight;
			$carouselBox.css({
				"width" : this.config.boxWidth,
				"height" : this.config.boxHeight
			});
			$carouselImgList.css({
				"width" : this.config.boxWidth,
				"height" : this.config.boxHeight
			});
			// 设置第一张照片的位置
			$firstImg.css({
				"left" : btnWidth,
				"z-index" : Math.floor($imgSize/2)
			});
			$carouselBtnR.css({
				"width" : btnWidth,
				"height" : btnHeight
			}); 
			$carouselRtnL.css({
				"width" : btnWidth,
				"height" : btnHeight
			});  
		},
		// 用于销毁组件前需要处理的函数
		destructor : function () {}
		/****************接口END******************/
	});
	
	return Carousel;
})