//2019/4/30 下午6:26
function getLocalTime(nS) {
   return new Date(parseInt(nS) * 1000).toLocaleString().replace(/:\d{1,2}$/,' ');     
}


function add0(m){return m<10?'0'+m:m }
function format(shijianchuo)
{
//shijianchuo是整数，否则要parseInt转换
var time = new Date(shijianchuo*1000);
var y = time.getFullYear();
var m = time.getMonth()+1;
var d = time.getDate();
//var h = time.getHours();
//var mm = time.getMinutes();
//var s = time.getSeconds();
return y+'-'+add0(m)+'-'+add0(d)+' ';
}