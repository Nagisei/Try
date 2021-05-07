/**
 * 
 * @authors PQ
 * @date    2021-03-19 14:10:32
 * @version $Id$
 */


function redp1(){
	document.getElementById("p1").innerHTML = "<span style='color: red;'>p1</span>";
}



function fnactivep3(){
	document.getElementById("p3").classList.add("fn-active");
}

function removep8() {
	var parent=document.getElementById("ul");
	var child=document.getElementById("p8");
	parent.removeChild(child);
}

function opentaobao() {
	window.open("https://www.taobao.com/");
}

function addp9() {
	var u = document.getElementById("ul");
	//1. 创建1个li标签
	var createLi = document.createElement("li");
	//2. 创建文本
	var text = document.createTextNode("p9");
	//3. 把创建的文本加入到创建的li标签中
	createLi.appendChild(text)
	//4. 把创建的li加入到ul中
	u.appendChild(createLi)
}

function screenp7() {
	document.getElementById("div1").style.width=screen.availWidth;//设置到屏幕宽度
	//document.getElementById("div1").style.height=screen.availHeight;//设置到屏幕高度
}

var ul = document.getElementsByTagName("ul")[0];  
var list = ul.getElementsByTagName("li");  



//以下是点击li出现序号，因为和其他点击功能发生冲突，所以先注释掉了
// function foo(){  
//     for(var i = 0, len = list.length; i < len; i++){  
//         var that = list[i];  
//         list[i].onclick = (function(k){  
//             var info = that.innerHTML;  
//             return function(){  
//                 alert("当前点击 li 为：" + info + "。  序号为：" + k); 
//             };  
//         })(i);  
//     }  
// }  
// foo();