/*
	Created by HuZhenghao in 2017/3/16
*/
//获取table，input,并定义对象来存储小方块的状态
var table = document.getElementById('table').childNodes[1];
var input = document.getElementById('input');
var button = document.getElementById('button');
var direction = ["top","right","bottom","left"];
var blockNow = {
	block:getBlock(6,6),
	dir:0,
	x:'6',
	y:'6',
}
//获取小方块
function getBlock(x,y){
	return table.childNodes[y*2].childNodes[x*2+1];
}
//设置小方块方向
function setDir(block,dir){
	block.className = dir;
}
//调用函数在页面上显示小方块初始位置
setDir(blockNow.block,"top");
//定义移动函数，根据类名来取不同的前进方式
function go(){
	//根据当前小方块方向判断前进方向
	switch(blockNow.block.className){
		case "top":
		//判断小方块是否到边缘
		if (blockNow.y > 1) {
			setDir(blockNow.block,"");
			blockNow.y--;
			blockNow.block = getBlock(blockNow.x,blockNow.y);
			setDir(blockNow.block,"top");
		};break;
		case "right":
		if (blockNow.x < 10) {
			setDir(blockNow.block,"");
			blockNow.x++;
			blockNow.block = getBlock(blockNow.x,blockNow.y);
			setDir(blockNow.block,"right");
		};break;
		case "bottom":
		if (blockNow.y < 10) {
			setDir(blockNow.block,"");
			blockNow.y++;
			blockNow.block = getBlock(blockNow.x,blockNow.y);
			setDir(blockNow.block,"bottom");
		};break;
		case "left":
		if (blockNow.x > 1) {
			setDir(blockNow.block,"");
			blockNow.x--;
			blockNow.block = getBlock(blockNow.x,blockNow.y);
			setDir(blockNow.block,"left");
		};break;
	}
}
//计算并设置转向后的方向
function calDir(x){
    var d=(blockNow.dir+x>=0?blockNow.dir+x:3)%4;
    blockNow.dir=d;
    setDir(blockNow.block,direction[d]);
}
//定义点击执行后的执行函数
function run(){
	switch(input.value.trim().toLowerCase()){
		case "go":
			go();break;
		case "tun lef":
			calDir(-1);break;
		case "tun rig":
			calDir(1);break;
		case "tun bac":
			calDir(2);break;
	}
}
button.onclick = function(){
	run();
}