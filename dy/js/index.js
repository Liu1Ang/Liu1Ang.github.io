$(function() {
    var $wrap = $('#wrap'),
        $picUl = $('.pic'),
        $tabLi = $('.tab li'),
        $prev = $('.prev'),
        $next = $('.next'),
        widLi = $picUl.children().eq(0).width(),
        len = $tabLi.length,
        idx = 0,
        timer = null;

    //get first; set all
    $tabLi.click(function() {
        $(this).addClass("on").siblings().removeClass("on")
        idx = $(this).index();

        $picUl.animate({
            left: -idx * widLi
        }, 500)
    })
    // 点击下一张
    $next.click(function() {
        idx++;
        idx %= len; // 序号为小圆按钮的长度时到达第一张
        $tabLi.eq(idx).addClass("on").siblings().removeClass("on")
        $picUl.animate({
            left: -idx * widLi
        }, 500)
    })

    $prev.click(function() {
        idx--;
        if (idx < 0) {
            idx = len - 1
        };

        $tabLi.eq(idx).addClass("on").siblings().removeClass("on")
        $picUl.animate({
            left: -idx * widLi
        }, 500)
    })

    // 自动轮播
    auto();

    function auto() {
        timer = setInterval(function() {
            $next.trigger("click") // 触发click
        }, 3000)
    }

    $wrap.hover(function() {
        clearInterval(timer);
    }, function() {
        auto();
    })
})