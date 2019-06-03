(function() {
	mui('body').on('tap', 'a', function() {
		var url = this.getAttribute('href');
		window.location.href = url;
	});
//	localStorage.clear();
	mui.init({
		pullRefresh: {
			container: "#photo", //下拉刷新容器标识，querySelector能定位的css选择器均可，比如：id、.class等
			up: {
				contentrefresh: "正在加载...", //可选，正在加载状态时，上拉加载控件上显示的标题内容
				contentnomore: '没有更多数据了', //可选，请求完毕若没有更多数据时显示的提醒内容；
				callback: pullup //必选，刷新函数，根据具体业务来编写，比如通过ajax从服务器获取新数据；
			}
		}
	});
	var num = 10;
	var count = 0;
	var min = 0;
	var max = min + num;
	var count1 = 0;

	function pullup() {
		var ListData = JSON.parse(localStorage.getItem('ListData'));
		counts();
		setTimeout(function() {
			mui('#photo').pullRefresh().endPullupToRefresh(count1 >= count - 1);
			fn(ListData);
		}, 1000);
	}
	mui.ajax("photo.json", {
		dataType: 'json',
		success: fn,
		error: function(xhr, type, errorThrown) {
			//异常处理；
			console.log(type);
		}
	});

	function counts() {
		var ListData = JSON.parse(localStorage.getItem('ListData'));
		count = Math.ceil(ListData.length / num); //下拉次数
		count1++;
		if(count1 >= count) {
			mui.toast('没有数据了');
			mui('#photo').pullRefresh().endPullupToRefresh(true);
			console.log(1);
			return false;
		}
		min = num * count1;
		max = count1 === count - 1 ? ListData.length : min + num;
		var html='<h3><span>如何关注</span></h3><div class="concent_top"><p>①复制“微信号或ID”，在“添加朋友”中粘贴搜索号码关注。</p><p>②点击微信右上角的“+”，会出现“添加朋友”，进行“查找公众号”，输入以下公众号的名字，即可找到。</p></div><div class="concent_bottom mui-clearfix">'+
				'<h4>长按下面的二维码或指纹 关注官方公众号</h4><div><p class="mui-pull-left"><img src="../img/index/weixin.png" /></p>'+
					'<p class="mui-pull-left"><img src="../img/index/figure.gif" alt="" /></p></div></div>'
		if(count1 >= count-1){
			console.log(1);
			setTimeout(function(){
				mui('.concent')[0].innerHTML=html;
				console.log(2);
			},2500)
			
		}
	}

	function fn(data) {
		if(!localStorage.getItem('ListData')) {
			localStorage.setItem('ListData', JSON.stringify(data));
		}
		var html = '';
		for(var i = min; i < max; i++) {
			html += '<i class="mui-col-xs-6">' + '<img src="' + data[i].url + '" /></i>';
		};
		mui('#photo .con')[0].innerHTML += html;
	}
	mui('#photo').on('tap', 'img', function() {
		mui('.big')[0].style.display = 'block';
		var url = this.getAttribute('src');
		mui('.big img')[0].setAttribute('src', url);
	});
	mui('body').on('tap', '.big', function() {
		mui('.big')[0].style.display = 'none';
	})
})();