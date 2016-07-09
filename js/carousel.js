define(['widget'],function (_widget) {
	var $carouselBox,$carouselImgList,$carouselImgListLi,$imgSize,$firstImg,
		$carouselBtnR,$carouselRtnL;
	function Carousel() {
		this.config = {
			boxWidth : 1000,
			boxHeight : 270,
			imgWidth : 640,
			imgHeight : 270,
			speed : 500,
			verticalAlign : "middle",
			scale : 0.9,
			opacity : 0.7
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
			$carouselImgListLi = $carouselImgList.find("li");
			$imgSize = $carouselImgListLi.size();
			$firstImg = $carouselImgListLi.eq(0);
			$carouselBtnR = $(".carousel-btn-r");
			$carouselRtnL = $(".carousel-btn-l");
		},
		// 用于绑定事件
		bindUI : function () {},
		// 用于初始化组件属性
		syncUI : function () {
			var _this = this;
			var btnWidth = (_this.config.boxWidth - _this.config.imgWidth)/2;
			var btnHeight = _this.config.boxHeight;
			$carouselBox.css({
				"width" : _this.config.boxWidth,
				"height" : _this.config.boxHeight
			});
			$carouselImgList.css({
				"width" : _this.config.boxWidth,
				"height" : _this.config.boxHeight
			});
			// 设置第一张照片的位置
			$firstImg.css({
				"left" : btnWidth,
				"z-index" : Math.floor($imgSize/2)
			});
			$carouselBtnR.css({
				"width" : btnWidth,
				"height" : btnHeight,
				"z-index" : Math.ceil($imgSize/2)
			}); 
			$carouselRtnL.css({
				"width" : btnWidth,
				"height" : btnHeight,
				"z-index" : Math.ceil($imgSize/2)
			});  
			_this.remainImgPos();
		},
		// 用于销毁组件前需要处理的函数
		destructor : function () {},
		/****************接口END******************/

		/****************方法BEGIN******************/
		// 设置除了第一张图片外剩余图片的位置关系，均分为左右两边
		remainImgPos : function () {
			var _this = this;
			var btnWidth = (_this.config.boxWidth - _this.config.imgWidth)/2;
			var btnHeight = _this.config.boxHeight;
			var firstImgWidth  = _this.config.imgWidth;
			var firstImgHeight = _this.config.imgHeight;
			var firstImgZIndex = Math.floor($imgSize/2);
			var firstImgLeft   = btnWidth;
			var firstImgOpacity= 1;
			// 每下一张照片的间隙值：按钮区域宽度 / 层级数
			var gap = btnWidth / Math.floor($imgSize/2);
			// 设置右边图片位置关系
			/*slice:已应用的 index 参数集合中其中一个元素的位置；
			如果省略 end 参数，则 index 之后的所有的所有元素都会包含在结果中。
			已应用的 index 参数基于零，引用的是 jQuery 对象中元素的位置，而非 DOM 树中的。
			所以去除第一个元素得到剩下的所有元素应该是slice(1)*/
			var $remainImgListLi = $($carouselImgListLi.slice(1));
			// 剩下所有元素的前半部分元素作为右边的图片
			var $rightImgListLi = $($remainImgListLi.slice(0,($remainImgListLi.size())/2));
			$rightImgListLi.each(function () {
				// 以第一张图片为基准设置下一张图片
				firstImgWidth  = firstImgWidth * _this.config.scale;
				firstImgHeight = firstImgHeight * _this.config.scale;
				firstImgLeft   = firstImgLeft - gap;
				firstImgZIndex = firstImgZIndex -1;
				firstImgOpacity= firstImgOpacity * _this.config.opacity;
				$(this).css({
					"width"  :  firstImgWidth ,
					"height" :  firstImgHeight,
					"right"  :  firstImgLeft,
					"top"    :  (_this.config.imgHeight - firstImgHeight) / 2,
					"opacity":  firstImgOpacity,
					"z-index":  firstImgZIndex
				});
			});
			// 剩下所有元素的前半部分元素作为左边的图片
			var $leftImgListLi      = $($remainImgListLi.slice(($remainImgListLi.size())/2));
			var $lastRightImgListLi = $rightImgListLi.last();
			var lastRightImgWidth   = $lastRightImgListLi.width();
			var lastRightImgHeight  = $lastRightImgListLi.height();
			var lastRightImgZIndex  = parseInt($lastRightImgListLi.css("zIndex"));
			var lastRightImgOpacity = $lastRightImgListLi.css("opacity");
			$leftImgListLi.each(function (i,value) {
				$(this).css({
					"width"  :  lastRightImgWidth ,
					"height" :  lastRightImgHeight,
					"left"   :  gap * i,
					"top"    :  (_this.config.imgHeight - lastRightImgHeight) / 2,
					"opacity":  lastRightImgOpacity,
					"z-index":  lastRightImgZIndex
				});
				// 以右边最后一张图片为基准设置左边的图片
				// 右边最后一张图片与左边第一张图片相同
				i = i + 1;
				lastRightImgWidth   = lastRightImgWidth / _this.config.scale;
				lastRightImgHeight  = lastRightImgHeight / _this.config.scale;
				lastRightImgZIndex  = lastRightImgZIndex + 1 ;
				lastRightImgOpacity = lastRightImgOpacity / _this.config.opacity;
			});
		}
		/****************方法END******************/

	});
	
	return Carousel;
})