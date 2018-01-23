//获取当前时间 带时分秒（如：2017-06-26 19:35:43）
exports.getCurrentTime = function() {
	var now=new Date();
	var year=now.getFullYear();
	var month=now.getMonth()+1;
	var day=now.getDate();
	var hours=now.getHours();
	var minutes=now.getMinutes();
	var seconds=now.getSeconds();
	month = month<10?`0${month}`:month;
	day = day<10?`0${day}`:day;
	hours = hours<10?`0${hours}`:hours;
	minutes = minutes<10?`0${minutes}`:minutes;
	seconds = seconds<10?`0${seconds}`:seconds;
	var time = year + "-" + month + "-" + day+" "+hours+":"+minutes+":"+seconds;
	return time ;
}