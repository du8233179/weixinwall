/**
 * Created by Personal on 2016/7/30.
 */
$(function(){
    window.addEventListener('touchmove', function (e) {
        e.preventDefault();
    });
    var total=location.search.slice(1);
    $(".confirm_set>span").text(total);
    FastClick.attach(document.body);
    $(".weixin_payment>p>b").css("border","none");
    $(".payment_mode_content>div").click(function(){
       $(".payment_mode_content>div>p>b").removeClass("checked").css("border","1px solid #999");
        $(this).children("p").children("b").addClass("checked").css("border","none");;
    });
    $(".confirm_set").click(function(){
        location.href="/html/payment_success.html";
    });
});
