//$(function() {
function getPubuliu(getUrl) {
	$.get(getUrl, {
		page: 1
	}, function(data) {
//		console.log(data);
		addHtml(data.list);
		$("#loadingDiv").css("display", "none");
		$("body").css("overflow", "auto");
		//监听滚动加载数据
		currentPage = 1;
		var pages = data.count;

		function nextPage() {
			//如果总页数为0,直接return
			if(pages == 0) {
				return;
			}
			currentPage++;
			//当前页大于总页数,显示没有更多的提示语
			if(currentPage > pages) {
				//				console.log('没有更多')
				return;
			}
			//如果当前页大于1,显示正在加载的提示语
			if(currentPage > 1) {
				$('#loading').show();
				//				console.log('正在加载...')
			}
			//进行异步请求数据
			var response = $.ajax({
				type: "get",
				url: getUrl,
				data: {
					"page": currentPage
				},
				success: function(data) {
					addHtml(data.list);
				},
				async: true
			});
		}
		//页面滚动时,加载函数
		$(window).on('scroll', function() {
			if($(window).scrollTop() >= ($('html,body')[0].clientHeight - $('.banner').height()) * 1.2) {
				nextPage();
			}
		});
	})

	function addHtml(data) {
		var html = '';
		var photolist = '';
		$.each(data, function() {
			//console.log(this)
			html += "<div class='white-panel'><img class='lazy thumb' data-original=http://www.foyuanzhilu.cn" + this.img_url + " id=" + this.id + "></div>";
			photolist += "<li id=" + this.id + ">" + this.content + "<div class=photoText>" +
				"<h3>" + this.title + "</h3>" +
				"<p>" + this.desc + "</p>" + "</div></li>"
		});
		$(html).appendTo($("#gallery-wrapper"));
		$('img.lazy').lazyload({
			effect: 'fadeIn'
		});
		$(photolist).appendTo($("#listUl"));
		img_details();
	}
	// 图片点击详情
	function img_details() {
		$('#gallery-wrapper img').on('click', function() {
			$("body").css("overflow", "hidden");
			$('.listBox').css('display', 'flex');
			$('.alert').show().delay(2000).hide(0);
			var img_id = $(this).attr('id');

			var curr_index = 0;
			$.each($('#listUl li'), function(index, item) {
				if($(item).attr('id') == img_id) {
					curr_index = index;
				}
			});
			var ul_width = $('#listUl li').length * $('.ulBox').width();
			$('#listUl li').width($('.ulBox').width());
			$('#listUl').width(ul_width);
			var left = $('.ulBox').width() * curr_index;
			$('.curr_num').html(curr_index + 1);
			$('#listUl').css('left', -left + 'px');

			//上一页
			function prev() {
				curr_index--;
				if(curr_index < 0) {
					curr_index = 0;
					return false;
				}
				left = $('.ulBox').width() * curr_index;
				$('#listUl').css('left', -left + 'px');
			}

			function next() {
				curr_index++;
				if(curr_index > $('#listUl li').length - 1) {
					curr_index = $('#listUl li').length - 1;
					return false;
				}
				left = $('.ulBox').width() * curr_index;
				$('#listUl').css('left', -left + 'px');
			}
			$('.prev')[0].onclick = function() {
				prev();
				$('.curr_num').html(curr_index + 1);
			}
			//下一页
			$('.next')[0].onclick = function() {
				next();
				$('.curr_num').html(curr_index + 1);
			}
			$('.num').html($('#listUl li').length);
			$('.close').on('click', function() {
				$("body").css("overflow", "auto");
				$('.listBox').css('display', 'none');
			});
			$(document).on('keydown', function(e) {
				if(e.keyCode === 37) {
					prev();
					$('.curr_num').html(curr_index + 1);
				}
				if(e.keyCode === 39) {
					next();
					$('.curr_num').html(curr_index + 1);
				}
				if(e.keyCode === 27 || e.which === 27) {
					$("body").css("overflow", "auto");
					$('.listBox').css('display', 'none');
				}
			});
			//点击背景关闭
			$('#listUl').on('click', function() {
				$("body").css("overflow", "auto");
				$('.listBox').css('display', 'none');
				//				console.log('listul')
			})
			$('#listUl li').on('click', function(e) {
				e.stopPropagation();
				//				console.log('listulli')
			})
		});
	}
}

//})