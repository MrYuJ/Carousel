define(['jquery'],function ($) {
	function Widget () {
		// 组件最外层容器
		this.boundingBox = null;
	}
	Widget.prototype = {
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
		destructor : function () {},
		/****************接口END******************/

		/***************方法BEGIN*****************/
		// 用于渲染组件
		render : function (container) {
			this.renderUI();
			this.cacheDOM();
			this.handlers = {}; //清空handlers里的事件
			this.bindUI();
			this.syncUI();
			// 如果有传container则append到container，没有则append到body
			$(container || document.body).append(this.boundingBox);
		},
		// 用于销毁组件
		destroy : function () {
			this.destructor(); //先执行销毁前需要处理的函数
			this.boundingBox.off().remove(); //把boundingBox绑定的事件与DOM都移除
		},
		// 用于自定义事件的绑定事件
		on : function (type,handler) {
			if (typeof this.handlers[type] == "undefined") {
				this.handlers[type] = [];
			}
			this.handlers[type].push(handler);
			return this; //实现连缀语法
		},
		// 用于自定义事件的触发事件
		fire : function (type,data) {
			if (this.handlers[type] instanceof Array) {
				var handler = this.handlers[type];
				for (var i = 0,len = handler.length;i < len;i++) {
					handler[i](data);
				}
			}
		} 
		/****************方法END******************/
	}
	return Widget;
});


