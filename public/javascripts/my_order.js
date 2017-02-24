/**
 * Created by Personal on 2016/8/2.
 */
//var swiper = $('.swiper-container').swiper({
//    effect : 'coverflow',
//    freeMode : true
//
//});

var mySwiper = new Swiper('.swiper-container',{
    slidesOffsetAfter : 80
});
var scroll1=new iScroll('parent', {
    hScrollbar: false,
    vScrollbar: true,
    checkDOMChanges: true,
    bounce: false
});
$(function(){
    //   new iScroll('parent2', {
    //    hScrollbar: false,
    //    vScrollbar: false,
    //    checkDOMChanges: true,
    //    bounce: false
    //});
    //window.addEventListener('touchmove', function (e) {
    //    e.preventDefault();
    //});
    $(".mall_head ul b").width($(".mall_head ul li:first").width());
    for (var i = 0, sum = 0; i < $(".mall_head>ul>li").length; i++) {
        sum += $(".mall_head>ul>li").eq(i).width() + 46;
    }
    $(".mall_head>ul").width(sum);
    FastClick.attach(document.body);
    //删除
    $(".my_order_remove").click(function(){
        $(".shopcar_mask").show();
        $(".shopcar_hint").show(200);
        $(".shopcar_hint>p").text($(this).parents(".my_order_wrap").index());
        console.log()
    });
    //确认删除
    $(".shopcar_hint>div>b").click(function(){
        $(".my_order_wrap").eq($(".shopcar_hint>p").text()).remove();
        $(".shopcar_mask").hide();
        $(".shopcar_hint").hide();
    });
    //取消删除
    $(".shopcar_hint>div>span").click(function(){
        $(".shopcar_mask").hide();
        $(".shopcar_hint").hide();
    });
    //跳转详情
    $(".my_order_item").click(function(){
        location.href="/html/my_order_detail.html";
    });
    $(".mall_head ul li").click(function () {
        if ($(window).width() / 2 - ($(this).offset().left + $(this).width() / 2) >= -scroll1.x) {
            scroll1.scrollTo(0, 0, 400);
        }else if(($(this).offset().left + $(this).width() / 2-$(window).width() / 2) >=scroll1.x -scroll1.maxScrollX){
            scroll1.scrollTo(scroll1.maxScrollX, 0, 400);
        } else {
            scroll1.scrollTo(scroll1.x - (($(this).offset().left + $(this).width() / 2) - ($(window).width() / 2)), 0, 400);
        }
        var n = parseInt($(".mall_head ul")[0].style.transform.match(/\d+/)[0]);
         $(".mall_head ul b").animate(
            {"left": $(this).offset().left + n}, 150
        );
        $(".mall_head ul li").removeClass("color_darken");
        $(this).addClass("color_darken");

        $(".mall_head ul b").width($(this).width());
    });

});