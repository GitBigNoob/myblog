var div1;           //外层div
var height = 30;    //外层div高度
var rollIndex = 0;  //当前滚动的索引
var millisec = 2000;    //滚动间隔时间（毫秒）
var intervalIds = new Array();  //计时器 id 数组
var datas = ["欢迎光临我的博客", "这是老师让弄的", "emmmmm"];
window.onload = function() {
    div1 = document.getElementById("div1");
    div1.style.height = height + "px";
    //鼠标进入停止滚动
    div1.onmouseover = function() {
        clearInterval(intervalIds[0]);
    }
    //鼠标离开开始滚动
    div1.onmouseout = function() {
        intervalIds[0] = setInterval("addItem()", millisec);
    }
    addItem();  //首先加载第一项
    intervalIds[0] = setInterval("addItem()", millisec);
}
//添加滚动项
function addItem(){
    var content = datas[rollIndex];
    console.log("滚动item: " + rollIndex)
    if(div1.childNodes.length <= 1) {
        var div = document.createElement("div");
        div.setAttribute("class", "child");
        div.innerHTML = content;
        div1.appendChild(div);
        //设置两个 div 的背景色
        if(rollIndex % 2 == 0)
            div.style.background = "#24252e";
        else
            div.style.background = "#24252e";
    }
    else {
        div1.childNodes[0].innerHTML = content;
        div1.appendChild(div1.childNodes[0]);
        div1.scrollTop = 0; //兼容Firefox
    }
    rollIndex++;
    rollIndex = rollIndex < datas.length ? rollIndex : 0;
    if(div1.childNodes.length > 1) {
        clearInterval(intervalIds[1]);
        intervalIds[1] = setInterval("setScroll()", 20);
    }
}
//设置外层div.scrollTop
function setScroll(){
    div1.scrollTop++;
    if(div1.scrollTop >= height) {
        clearInterval(intervalIds[1]);
        console.log("stop");
    }               
}