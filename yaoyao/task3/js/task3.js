window.onload = function() {
//data存放学校数据
var data = [
{
	text:'北京',val:['北京大学','清华大学']
},
{
	text:'武汉', val:['武汉大学','武汉理工大学']
}
];

//获取节点
function get(val) {
	return document.getElementById(val);
}
var yes = get("yes");
var no = get("no");
var city = get("city-select");
var school = get("school-select");
var select_group = get("select-group");
var work = get("work");

//单选框控制内容
yes.onclick = function(){
	if (yes.checked) {
		select_group.style.display = "block";
		work.style.display = "none";
	}
}
no.onclick = function() {
	if (no.checked) {
		select_group.style.display = "none";
		work.style.display = "block";
	};
}

//联动
function select(){
	//清空第二个选择框
	school.innerHTML = "";
	//遍历第一个选择框
	for(var i = 0; i <= data.length; i ++) {
		//如果某个元素被选中
		if(city.value == data[i].text){
			//遍历这个元素的val值
			for(var j = 0; j < data[i].val.length; j ++) {
				//创建option
				var option = document.createElement("option");
				option.innerHTML = data[i].val[j];
				option.value = data[i].val[j];
				school.appendChild(option);
			}
		}
	}
}
//点击第一个选择框的时候执行联动函数
city.onclick = function() {
	select();
}

}