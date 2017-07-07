
$(function(){  
	window.setInterval(getTimer,10);/*设置不间断定时器执行getTimer函数*/  
})  
  
function getTimer(){  
    var endtime=new Date("2017/07/07 00:00:00");  /*定义结束时间*/  
    var nowtime=new Date();/*获取当前时间*/  
    var cha=endtime.getTime()-nowtime.getTime();/*得到它们相差的时间*/  
    
    var day=Math.floor(cha/1000/60/60/24/10); /*划分出时分秒*/  
    var hour=Math.floor(cha/1000/60/60%24/10);  
    var minute=Math.floor(cha/1000/60%60/10);  
    var second=Math.floor(cha/1000%60/10); 
    
    var day1=Math.floor(cha/1000/60/60/24%10); 
    var hour1=Math.floor(cha/1000/60/60%24%10);  
    var minute1=Math.floor(cha/1000/60%10);  
    var second1=Math.floor(cha/1000%10);
    
    $("#t_day").html(day); /*写到页面中*/  
    $("#t_hour").html(hour);  
    $("#t_minute").html(minute);  
    $("#t_second").html(second); 
    
    $("#t_day1").html(day1);
    $("#t_hour1").html(hour1);  
    $("#t_minute1").html(minute1);  
    $("#t_second1").html(second1); 
} 	