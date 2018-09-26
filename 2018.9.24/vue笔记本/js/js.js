/**
 * Created by lenovo on 18/9/19 019.
 */
//时间
var shijian=document.querySelector(".shijian")
var dateNow = new Date();
var year = dateNow.getFullYear();
//获取年
var month = dateNow.getMonth()+1;
//月
var date = dateNow.getDate();
//日期
var hours = dateNow.getHours();
//小时
var minutes = dateNow.getMinutes();
//分钟
var seconds = dateNow.getSeconds();
//秒
var day = dateNow.getDay();
//星期
var num=shijian.innerHTML=year+"年"+month+"月"+date+"日"+hours+":"+minutes+":"+seconds;
//结束td3的日期