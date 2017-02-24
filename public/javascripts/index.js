if (!localStorage.arr1) {
    localStorage.arr1 = JSON.stringify([]);
}
function getarr(larr) {
    return JSON.parse(larr);
}
function setarr(arr) {
    localStorage.setItem("arr1", JSON.stringify(arr));
}


$(function () {
    new iScroll('recommend_wrap', {
        hScrollbar:false,
        vScrollbar:false,
        checkDOMChanges: true,
        bounce: false
    });
    var scroll1 = new iScroll('parent', {
        hScrollbar: false,
        vScrollbar: true,
        checkDOMChanges: true,
        bounce: false
    });
    var arr = getarr(localStorage.arr1);
    var scroll = new iScroll('parent1', {
        hScrollbar: false,
        vScrollbar: false,
        checkDOMChanges: true,
        bounce: false,
        //bounce:true,

        onScrollEnd: function () {
            if (Number($(".mall_body")[0].style.transform.match(/\d+/g)[1]) + $("#parent1").height() - 159 >= $(".mall_body").height() - 10) {
                var show = $(".mall_logo>b").hasClass("icon_tiao") ? "kuai_show" : "tiao_show";
                if ($(".mall_logo>b").is(":hidden")) {
                    show = "recommend";
                }
                $(".mall_body").append('<div class="' + show + '"><div><img src="/images/classify3.jpg" alt=""/><b></b></div><header>红酒</header> <section>意大利1988红酒</section> <footer>￥<span>889.00</span>/瓶</footer> <b class="shop_car"></b> <p class="item_id">r44534</p></div><div class="' + show + '"><div><img src="/images/classify3.jpg" alt=""/><b></b></div><header>红酒</header> <section>意大利1988红酒</section> <footer>￥<span>889.00</span>/瓶</footer> <b class="shop_car"></b> <p class="item_id">r44534</p></div><div class="' + show + '"><div><img src="/images/classify3.jpg" alt=""/><b></b></div><header>红酒</header> <section>意大利1988红酒</section> <footer>￥<span>889.00</span>/瓶</footer> <b class="shop_car"></b> <p class="item_id">r44534</p></div><div class="' + show + '"><div><img src="/images/classify3.jpg" alt=""/><b></b></div><header>红酒</header> <section>意大利1988红酒</section> <footer>￥<span>889.00</span>/瓶</footer> <b class="shop_car"></b> <p class="item_id">r44534</p></div><div class="' + show + '"><div><img src="/images/classify3.jpg" alt=""/><b></b></div><header>红酒</header> <section>意大利1988红酒</section> <footer>￥<span>889.00</span>/瓶</footer> <b class="shop_car"></b> <p class="item_id">r44534</p></div><div class="' + show + '"><div><img src="/images/classify3.jpg" alt=""/><b></b></div><header>红酒</header> <section>意大利1988红酒</section> <footer>￥<span>889.00</span>/瓶</footer> <b class="shop_car"></b> <p class="item_id">r44534</p></div><div class="' + show + '"><div><img src="/images/classify3.jpg" alt=""/><b></b></div><header>红酒</header> <section>意大利1988红酒</section> <footer>￥<span>889.00</span>/瓶</footer> <b class="shop_car"></b> <p class="item_id">r44534</p></div><div class="' + show + '"><div><img src="/images/classify3.jpg" alt=""/><b></b></div><header>红酒</header> <section>意大利1988红酒</section> <footer>￥<span>889.00</span>/瓶</footer> <b class="shop_car"></b> <p class="item_id">r44534</p></div><div class="' + show + '"><div><img src="/images/classify3.jpg" alt=""/><b></b></div><header>红酒</header> <section>意大利1988红酒</section> <footer>￥<span>889.00</span>/瓶</footer> <b class="shop_car"></b> <p class="item_id">r44534</p></div><div class="' + show + '"><div><img src="/images/classify3.jpg" alt=""/><b></b></div><header>红酒</header> <section>意大利1988红酒</section> <footer>￥<span>889.00</span>/瓶</footer> <b class="shop_car"></b> <p class="item_id">r44534</p></div>');

            }
        },
        onScrollMove: function () {
            if ((this.y < this.maxScrollY) && (this.pointY < 50)) {
                this.scrollTo(0, this.maxScrollY, 400);
                return;
            }

        }
    });
    window.addEventListener('touchmove', function (e) {
        e.preventDefault();
    });

    for (var i = 0, sum = 0; i < $(".mall_head>ul>li").length; i++) {
        sum += $(".mall_head>ul>li").eq(i).width() + 46;
    }
    $(".mall_head>ul").width(sum);
    FastClick.attach(document.body);

    if (arr.length === 0) {
        $(".shopcar").hide();
        $(".shopcar").text(0);
    } else {
        $(".shopcar").show();
        renovate_shopcar();
    }
    $(".mall_head ul b").width($(".mall_head ul li:first").width());
    $(".mall_logo>b").click(function () {
        if ($(".mall_body>div").hasClass("kuai_show")) {
            $(".mall_body>div").removeClass("kuai_show").addClass("tiao_show");
            $(".mall_logo>b").removeClass("icon_tiao").addClass("icon_kuai");
        } else {
            $(".mall_body>div").removeClass("tiao_show").addClass("kuai_show");

            $(".mall_logo>b").removeClass("icon_kuai").addClass("icon_tiao");
        }
    });
    $(".mall_head ul li").click(function () {
        if($(this).index()==0){
            $("#recommend_wrap").show();
            $("#parent1").hide();

            scroll.stop();
            scroll.scrollTo(0, 0);
            if ($(window).width() / 2 - ($(this).offset().left + $(this).width() / 2) >= -scroll1.x) {
                scroll1.scrollTo(0, 0, 400);
            }else if(($(this).offset().left + $(this).width() / 2-$(window).width() / 2) >=scroll1.x -scroll1.maxScrollX){
                scroll1.scrollTo(scroll1.maxScrollX, 0, 400);
            } else {
                scroll1.scrollTo(scroll1.x - (($(this).offset().left + $(this).width() / 2) - ($(window).width() / 2)), 0, 400);
            }
            var n = parseInt($(".mall_head ul")[0].style.transform.match(/\d+/)[0]);
            $(".mall_head ul li").removeClass("color_darken");
            $(this).addClass("color_darken");
            $(".mall_head ul b").animate(
                {"left": $(this).offset().left + n}, 150
            );
            $(".mall_head ul b").width($(this).width());
        }else{
            $("#recommend_wrap").hide();
            $("#parent1").show();

            scroll.stop();
            scroll.scrollTo(0, 0);
            if ($(window).width() / 2 - ($(this).offset().left + $(this).width() / 2) >= -scroll1.x) {
                scroll1.scrollTo(0, 0, 400);
            }else if(($(this).offset().left + $(this).width() / 2-$(window).width() / 2) >=scroll1.x -scroll1.maxScrollX){
                scroll1.scrollTo(scroll1.maxScrollX, 0, 400);
            } else {
                scroll1.scrollTo(scroll1.x - (($(this).offset().left + $(this).width() / 2) - ($(window).width() / 2)), 0, 400);
            }


            if ($(this).index() === 0) {
                $(".mall_logo>b").hide();
                $(".mall_body>div").removeClass().addClass("recommend");
            } else {
                $(".mall_logo>b").show();
                if ($(".mall_logo>b").hasClass("icon_tiao")) {
                    $(".mall_body>div").removeClass().addClass("kuai_show");
                } else {
                    $(".mall_body>div").removeClass().addClass("tiao_show");
                }
            }
            var n = parseInt($(".mall_head ul")[0].style.transform.match(/\d+/)[0]);
            $(".mall_head ul li").removeClass("color_darken");
            $(this).addClass("color_darken");
            $(".mall_head ul b").animate(
                {"left": $(this).offset().left + n}, 150
            );
            $(".mall_head ul b").width($(this).width());

        }







    });
    $(".nav ul li").click(function () {
        if ($(this).index() == 0) {
            location.href = "http://beta.wx.agokara.com/";
        } else if ($(this).index() == 1) {
            location.href = "/";
        } else if ($(this).index() == 2) {
            location.href = "/html/shopcar.html";
        } else if ($(this).index() == 3) {
            location.href = "/html/associator_message.html";
        }
    });
    $(".mall_body").click(function (e) {
        $(".shopcar").fadeIn(900);
        var target = e.target;
        if (target.nodeName == "IMG") {
            location.href = "/html/item_detail.html?" + $(target).parents("div").children(".item_id").text();
        }
        if (target.className == "shop_car") {

            var offset = $('.shopcar').offset();
            flyer = $('<img class="img" style="width:50px;height:50px;border-radius:50%;" src="' + $(target).parents("div").children("div").children("img")[0].src + '"/>');
            flyer.fly({
                start: {
                    left: event.clientX - 40,
                    top: event.clientY - 30
                },
                end: {
                    left: offset.left,
                    top: offset.top,
                    width: 0,
                    height: 0
                },
                onEnd: function () {

                    for (var i = 0, sum = 0; i < arr.length; i++) {
                        sum += arr[i].count;
                    }
                    renovate_shopcar();
                    $(".img").first().remove();

                }
            });
            for (var i = 0; i < arr.length; i++) {
                if (arr[i].id == $(target).parents("div").children(".item_id").text()) {
                    break;

                }
            }
            if (i === arr.length) {
                arr.push(
                    {
                        id: $(target).parents("div").children(".item_id").text(),
                        img: $(target).parents("div").children("div").children("img")[0].src,
                        name: $(target).parents("div").children("header").text(),
                        content: $(target).parents("div").children("section").text(),
                        price: $(target).parents("div").children("footer").children("span").text(),
                        count: 1
                    });
            } else {

                arr[i].count += 1;
            }
            setarr(arr);
        }

    })

    function renovate_shopcar() {
        for (var i = 0, sum = 0; i < arr.length; i++) {
            sum += arr[i].count;
        }
        if (sum > 99) {
            $(".shopcar").text(99 + "+");
        } else {
            $(".shopcar").text(sum);
        }
    }
   $("#recommend_wrap .recommend").click(function(){
       location.href="../html/item_detail.html"
   })
});
