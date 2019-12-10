export function dateToString(date){
			
	var week = ["星期日","星期一","星期二","星期三","星期四","星期五","星期六"]
	
	var str = "";
	
	var m = date.getMonth() + 1;
	var d = date.getDate();
	var h = date.getHours();
	var f = date.getMinutes();
	var s = date.getSeconds();
	var w = date.getDay();
	
  str += getDB(m) + "-" + getDB(d) + " ";	
  str += getDB(h) + ":" + getDB(f) + ":" + getDB(s) + " ";
	return str;
}

function getDB(num){
	return num < 10 ? "0" + num : num;
}