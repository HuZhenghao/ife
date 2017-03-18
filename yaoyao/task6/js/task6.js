function get(ele) {
	return document.getElementById(ele);
}
//定义添加事件的兼容函数
function addEvent(ele,event,func) {
	if(ele.addEventListener) {
		ele.addEventListener(event,func,false);
	}
	else if(ele.attachEvent) {
		ele.attachEvent('on' + event,func);
	}
	else{
		ele['on' + event] = func;
	}
}

//定义对象
var MyFloat = function(ele) {
	this.ele = ele;
	this.mask = null;
	this.init();
}
//为myFloat定义方法
MyFloat.prototype = {
	//对浮出层初始化（隐藏）
	init: function() {
		this.mask = get('mask');
		this.mask.style.visibility = 'hidden';
		this.ele.style.visibility = 'hidden';
		this.ele.style.left = '50%';
        this.ele.style.top = '50%';
		this.ele.style.transform = 'translate(-50%,-50%) scale(0,0)';
		//为浮出层的第一个子元素添加拖动功能
		this.setDrag(this.ele.children[0]);
		this.setSize();
	},
	//显示遮罩和浮出层
	show: function() {
		this.mask.style.visibility = 'visible';
		this.ele.style.visibility = 'visible';
		this.ele.style.left = '50%';
        this.ele.style.top = '50%';
		this.ele.style.transform = 'translate(-50%,-50%) scale(1,1)';
	},
	//隐藏遮罩和浮出层
	hide: function() {
		this.mask.style.visibility = 'hidden';
		this.ele.style.visibility = 'hidden';
		this.ele.style.transform = 'translate(-50%,-50%) scale(0,0)';
	},
	//设置拖拽功能
	setDrag: function(ele) {
		//用self存储当前this值
		var self = this;
		//isDown验证此时鼠标是否按下
		var isDown = false;
		addEvent(ele,'mousedown',function(event){
			isDown = true;
			var disX = event.clientX - self.ele.offsetLeft;
			var disY = event.clientY - self.ele.offsetTop;
			//鼠标移动时，根据鼠标相对浏览器边框的距离和到浮出层的距离来计算浮出层的定位
			var move = function(event){
				if(isDown){
					self.ele.style.left = event.clientX - disX + "px";
                	self.ele.style.top = event.clientY - disY + "px";
            	}
			};
			addEvent(document,'mousemove',move);
			//鼠标松开时，将isDown设置为false
			addEvent(document,'mouseup',function() {
				isDown = false;
			});
		});
	},
	//设置改变大小功能
	setSize: function() {
		var self = this;
		var block = document.createElement('div');
		block.style.width = '10px';
		block.style.height = '10px';
		block.style.position = "absolute";
		block.style.right = '0';
		block.style.bottom = '0';
		block.style.cursor = 'nw-resize';
		this.ele.appendChild(block);
		addEvent(block,'mousedown',function(event){
			isDown = true;
			var disX = event.clientX - self.ele.offsetWidth;
			var disY = event.clientY - self.ele.offsetHeight;
			var resize = function(event){
				if(isDown){
					self.ele.style.width = event.clientX - disX + "px";
                	self.ele.style.height = event.clientY - disY + "px";
            	}
			};
			addEvent(document,'mousemove',resize);
			addEvent(document,'mouseup',function() {
				isDown = false;
			});
		});
	}
};
(function() {
	var layer = new MyFloat(get('floatDiv'));
	addEvent(get('btn'), 'click', function(){
		layer.show();
	});
	addEvent(get('mask'), 'click', function(){
		layer.hide();
	});
	addEvent(get('close'), 'click', function(){
		layer.hide();
	});
})()