function getDateDemo(){

    /*
    
        //声明时间
        var date = new Date();
        alert(date);//当前时间
        alert(date.toLocaleString());//转化为本地时间
        alert(date.getFullYear());//显示年份
        alert(date.getMonth() + 1);//显示月份 0-11，需要加1
        alert(date.getDate());//显示一月中的日期
        alert(date.getDay());//显示一周的日期，星期几
        alert(date.getHours());//获取小时时间
        alert(date.getMinutes());//获取当前分钟
        alert(date.getSeconds());//获取当前秒数
        alert(date.getMilliseconds());//获取当前的毫秒数
        alert(date.getTime());//获取从1970年1月1日午夜零时，到当前时间的毫秒值
    */	
        //分别获取年、月、日、时、分、秒
        var myDate = new Date();
        var year = myDate.getFullYear();
        var month = myDate.getMonth() + 1;
        var date = myDate.getDate();
        var hours = myDate.getHours();
        var minutes = myDate.getMinutes();
        var seconds = myDate.getSeconds();
        
        //月份的显示为两位数字如09月
        if(month < 10 ){
            month = "0" + month;
        }
        if(date < 10 ){
            date = "0" + date;
        }
        
        //时间拼接
        var dateTime = "现在是" + year + "年" + month + "月" + date + "日" + hours + "时" + minutes + "分" + seconds + "秒";
        var stage = "";
        //判断现在的时间处于什么阶段
        if(hours >= 6 && hours <= 12){
            stage += "现在是凌晨赶紧去睡觉"
        }else if(hours <= 10){
            stage += "早上好";
        }else if(hours <= 12){
            stage += "上午好";
        }else if(hours <= 14){
            stage += "中午好";
        }else if(hours <= 18){
            stage += "下午好";
        }else{
            stage += "晚上好";
        }
        //document.write(dateTime);//打印当前时间
        
        var divNode = document.getElementById("time");
        var div = document.getElementById('s');
        divNode.innerHTML = dateTime;
        div.innerHTML = stage;
    
}	
window.setInterval("getDateDemo()",1000);//每隔1秒，调用一次getDateDemo()