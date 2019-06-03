		$(".nav li a").attr('target','_self');
			$('.nav li').hover(function(){
				$(this).find('span').css({'left':'0','width':'100%','right':'0'});
			},function(){
				$(this).find('span').css({'width':'0'});
			});
// 鼠标滑过出现/隐藏下拉菜单
		$('.fbgb').hover(function() {
				$('.fbgb-down').css({'display':'inline-block'})
			}, function() {
				$('.fbgb-down').css('display', 'none')
			})

     // 头部点击当前li背景色变为蓝色
$(document).on('click','#navlist li',function(){
				$(this).addClass('cur').siblings().removeClass('cur');
			})


