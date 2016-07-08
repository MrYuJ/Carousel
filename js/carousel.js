define(['widget'],function (_widget) {
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
	Carousel.prototype = $.extend({},new _widget(),{
		init : function (config) {
			var CIG = $.extend(this.config,config);
			console.log(CIG);
		},
		/***************接口BEGIN*****************/
		// 用于添加DOM节点
		renderUI : function () {},
		// 用于缓存DOM
		cacheDOM : function () {},
		// 用于绑定事件
		bindUI : function () {},
		// 用于初始化组件属性
		syncUI : function () {},
		// 用于销毁组件前需要处理的函数
		destructor : function () {}
		/****************接口END******************/
	});
	
	return Carousel;
})