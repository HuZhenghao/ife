/*
	Created by HuZhenghao in 2017/3/16
*/
var car = document.getElementById('car');
var input = document.getElementById('input');
var button = document.getElementById('button');

//初始化小方块位置
function init(){
	car.style.top = "240px";
	car.style.left = "240px";
	car.style.transform = "rotate(0deg)";
}
//改变小方块方向
function setDir(deg){
	//利用正则表达式匹配transform属性的度数（包括负数）
	var preDegree = parseInt((car.style.transform).match(/[-]*\d+/g)[0]);
	car.style.transform = 'rotate(' + (deg + preDegree) + 'deg)'; 
}
//定义移动函数
function go(){
	var degree = parseInt((car.style.transform).match(/[-]*\d+/g)[0]);
	//现有的旋转度数除以360的余数来判断前进方向
	switch(degree % 360){
		case -0:
		case 0:
		//判断小方块是否到边缘
		if (car.style.top !== '40px') {
			car.style.top = (parseInt(car.style.top)-40) + "px";
		};break;
		case -270:
		case 90:
		if (car.style.left !== '400px') {
			car.style.left = (parseInt(car.style.left)+40) + "px";
		};break;
		case -180:
		case 180:
		if (car.style.top !== '400px') {
			car.style.top = (parseInt(car.style.top)+40) + "px";
		};break;
		case -90:
		case 270:
		if (car.style.left !== '40px') {
			car.style.left = (parseInt(car.style.left)-40) + "px";
		};break;
	}
}
//定义点击执行后的执行函数
function run(){
	switch(input.value.trim().toLowerCase()){
		case "go":
			go();break;
		case "tun lef":
			setDir(-90);break;
		case "tun rig":
			setDir(90);break;
		case "tun bac":
			setDir(180);break;
		case "tra lef":
			if (car.style.left !== '40px') {
				car.style.left = (parseInt(car.style.left)-40) + "px";
			}break;
		case "tra top":
			if (car.style.top !== '40px') {
				car.style.top = (parseInt(car.style.top)-40) + "px";
			};break;
		case "tra rig":
			if (car.style.left !== '400px') {
				car.style.left = (parseInt(car.style.left)+40) + "px";
			};break;
		case "tra bot":
			if (car.style.top !== '400px') {
				car.style.top = (parseInt(car.style.top)+40) + "px";
			};break;
		case "mov lef":
			car.style.transform = "rotate(-90deg)";
			go();break;
		case "mov top":
			car.style.transform = "rotate(0deg)";
			go();break;
		case "mov rig":
			car.style.transform = "rotate(90deg)";
			go();break;
		case "mov bot":
			car.style.transform = "rotate(180deg)";
			go();break;
	}
}
/*
绑定键盘事件，w:tra top a:tra left s:tra bot d:tra rig
			 ↑:go ←:tun lef ↓:tun bac →: tun rig
			 i:mov top j:mov lef k:mov bot l:mov rig	
*/
document.onkeydown = function(event){
	var e = event || window.event;
	switch(e.keyCode){
		case 87:
			if (car.style.top !== '40px') {
				car.style.top = (parseInt(car.style.top)-40) + "px";
			};break;
		case 65:
			if (car.style.left !== '40px') {
				car.style.left = (parseInt(car.style.left)-40) + "px";
			}break;
		case 83:
			if (car.style.top !== '400px') {
				car.style.top = (parseInt(car.style.top)+40) + "px";
			};break;
		case 68:
			if (car.style.left !== '400px') {
				car.style.left = (parseInt(car.style.left)+40) + "px";
			};break;
		case 38:
			go();break;
		case 37:
			setDir(-90);break;
		case 40:
			setDir(180);break;
		case 39:
			setDir(90);break;
		case 73:
			car.style.transform = "rotate(0deg)";
			go();break;
		case 74:
			car.style.transform = "rotate(-90deg)";
			go();break;
		case 75:
			car.style.transform = "rotate(180deg)";
			go();break;
		case 76:
			car.style.transform = "rotate(90deg)";
			go();break;
	}
}
init();
button.onclick = function(){
	run();
}