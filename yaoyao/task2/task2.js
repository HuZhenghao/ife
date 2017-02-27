window.onload = function() {
		//封装getElementById方法
		function getE(val) {
			return document.getElementById(val);
		}
		//获取元素
		var name = getE("name");
		var notice_name = getE("notice_name");
		var password = getE("password");
		var notice_password = getE("notice_password");
		var password_confirm = getE("password_confirm");
		var notice_confirm = getE("notice_confirm");
		var mail = getE("mail");
		var notice_mail = getE("notice_mail");
		var phone = getE("phone");
		var notice_phone = getE("notice_phone");
		var button = getE("button");
		//验证通过标识
		var pass1,pass2,pass3,pass4,pass5;

		//名称输入框获取焦点，显示提示,并回复边框颜色
		name.onfocus = function(){
			notice_name.innerHTML = "必填，长度为4~16个字符";
			name.style.border = "2px solid #cdcdcd";
		}
		//名称输入框失去焦点判断
		name.onblur = function(){
			//姓名为空
			var val = name.value;
			if (val == null || val =="") {
				notice_name.innerHTML = "姓名不能为空";
				name.style.border = "2px solid #dc0110";
				return false;
			}
			//通过输入值的ASCII码来判断是否为中文字符，并计算长度
			var len = 0;
    		for(var i = 0; i < val.length; ++i) {
        		if(val.charCodeAt(i) < 128)
            		len++;
        		else len += 2;
    		}

    		//长度正确,在4~16内
    		if (len >= 4 && len <= 16) {
    			notice_name.innerHTML = "名称格式正确";
    			name.style.border = "2px solid #60ba45";
    			pass1 = true;
    			return true;
    		}

    		//长度不正确
    		else {
    			notice_name.innerHTML = "名称长度不正确";
    			name.style.border = "2px solid #dc0110";
    			return false;
    		}
		}
		
		//密码输入框获取焦点，显示提示,并回复边框颜色
		password.onfocus = function() {
			notice_password.innerHTML = "必填，长度为4~16个字符,包含数字和字母";
			password.style.border = "2px solid #cdcdcd";
		}
		//密码输入框失去焦点判断
		password.onblur = function () {
			//密码为空
			var val = password.value;
			if (val == null || val =="") {
				notice_password.innerHTML = "密码不能为空";
				password.style.border = "2px solid #dc0110";
				return false;
			}
			//通过输入值的ASCII码来判断是否为中文字符，并计算长度
			var len = 0;
			for(var i = 0; i < val.length; ++i) {
        		if(val.charCodeAt(i) < 128){
            		len++;
        		}
        		else {
        			notice_password.innerHTML = "密码不能含有中文";
					password.style.border = "2px solid #dc0110";
					return false;
        		}
    		}
    		//长度正确,在4~16内
    		if (len >= 4 && len <= 16) {
    			notice_password.innerHTML = "密码可用";
    			password.style.border = "2px solid #60ba45";
    			pass2 = true;
    			return true;
    		}
    		//长度不正确
    		else {
    			notice_password.innerHTML = "密码长度不正确";
    			password.style.border = "2px solid #dc0110";
    			return false;
    		}
		}

		//密码确认输入框获取焦点，显示提示,并回复边框颜色
		password_confirm.onfocus = function(){
			notice_confirm.innerHTML = "再次输入相同密码";
			password_confirm.style.border = "2px solid #cdcdcd";
		}
		//密码确认输入框失去焦点判断
		password_confirm.onblur = function () {
			//密码为空
			var val = password_confirm.value;
			if (val == null || val =="") {
				notice_confirm.innerHTML = "密码不能为空";
				password_confirm.style.border = "2px solid #dc0110";
				return false;
			}
			//密码不同
			if (val !== password.value) {
				notice_confirm.innerHTML = "密码输入不一致";
				password_confirm.style.border = "2px solid #dc0110";
				return false;
			}
			//密码相同
			if (val == password.value) {
				notice_confirm.innerHTML = "密码输入一致";
    			password_confirm.style.border = "2px solid #60ba45";
    			pass3 = true;
    			return true;
			}
		}

		//邮箱输入框获取焦点，显示提示,并回复边框颜色
		mail.onfocus = function(){
			notice_mail.innerHTML = "输入邮箱";
			mail.style.border = "2px solid #cdcdcd";
		}
		//验证邮箱格式
		function CheckMail(mail) {
 			var filter  = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
 			if (filter.test(mail)) {
 				return true;
 			}
 			else {			
 				return false;
 			}
		}
		//邮箱输入框失去焦点判断
		mail.onblur = function () {
			//邮箱为空
			var val = mail.value;
			if (val == null || val =="") {
				notice_mail.innerHTML = "邮箱不能为空";
				mail.style.border = "2px solid #dc0110";
				return false;
			}
			//邮箱格式错误
			if(CheckMail(val)) {
				notice_mail.innerHTML = "邮箱格式正确";
				mail.style.border = "2px solid #60ba45";
				pass4 = true;
				return true;
			}
			else {
				notice_mail.innerHTML = "邮箱格式错误";
    			mail.style.border = "2px solid #dc0110";
    			return false;
			}
		}

		//手机输入框获取焦点，显示提示,并回复边框颜色
		phone.onfocus = function(){
			notice_phone.innerHTML = "填写正确的手机号码";
			phone.style.border = "2px solid #cdcdcd";
		}
		//手机输入框失去焦点判断
		phone.onblur = function(){
			//手机为空
			var val = phone.value;
			if (val == null || val =="") {
				notice_phone.innerHTML = "手机号码不能为空";
				phone.style.border = "2px solid #dc0110";
				return false;
			}
			//通过输入值的ASCII码来判断是否为数字，并计算长度
			var len = 0;
    		for(var i = 0; i < val.length; ++i) {
        		if(val.charCodeAt(i) >= 48 && val.charCodeAt(i) <= 57){
            		len++;
        		}
        		else {
        			notice_phone.innerHTML = "手机号码格式不正确";
					phone.style.border = "2px solid #dc0110";
					return false;
        		}
    		}
    		if (len == 11) {
    			notice_phone.innerHTML = "手机号码格式正确";
				phone.style.border = "2px solid #60ba45";
				pass5 = true;
				return true;
    		}
    		else {
    			notice_phone.innerHTML = "手机号码格式不正确";
				phone.style.border = "2px solid #dc0110";
				return false;
    		}
    	}
    	//根据前面设置的pass值来判断是否全部验证通过
    	button.onclick = function() {
    		if (pass1 && pass2 && pass3 && pass4 && pass5) {
    			alert("提交成功");
    			pass1 = 0;
    			pass2 = 0;
    			pass3 = 0;
    			pass4 = 0;
    			pass5 = 0;
    		}
    		else{
    			alert("提交失败");
    		}
    	}

	}
