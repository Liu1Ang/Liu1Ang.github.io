(function() {
	mui('body').on('tap', 'a', function() {
		var url = this.getAttribute('href');
		window.location.href = url;
	});
	//获得slider插件对象
	var gallery = mui('#banner');
	gallery.slider({
		interval: 3000 //自动轮播周期，若为0则不自动播放，默认为0；
	});
	//请留言
	mui('body').on('tap', '#con-left', function() {
		mui('#form')[0].classList.add('active');
		mui('#form')[0].classList.remove('active1');
		mui('.win span')[0].classList.add('min');
		mui('.win span')[0].classList.remove('max');
	});
	//最小化
	mui('#form').on('tap', 'p', function() {
		if(mui('.win span')[0].className == 'min') {
			mui('#form')[0].classList.remove('active');
			mui('#form')[0].classList.add('active1');
			mui('.win span')[0].classList.add('max');
			mui('.win span')[0].classList.remove('min');
		} else {
			mui('#form')[0].classList.remove('active1');
			mui('#form')[0].classList.remove('active');
			mui('.win span')[0].classList.remove('max');
			mui('.win span')[0].classList.add('min');
		}
	});
	//弹出框
	mui('#popover').on('tap', '.old', function() {
		mui('#popover')[0].classList.add('none');
	});
	mui('#popover').on('tap', '.close', function() {
		mui('#popover')[0].classList.add('none');
	});
	mui('#popover').on('tap', '.now', function() {
		mui('#popover')[0].classList.add('none');
		mui('#form')[0].classList.add('active');
	});
	setInterval(function() {
		if(mui('#popover')[0].className == 'mui-popover none' && mui('#form')[0].className != 'form active') {
			mui('#popover')[0].classList.remove('none');
		}
	}, 50000);
})();