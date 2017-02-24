/**
 * Created by Personal on 2016/8/2.
 */
//var swiper = $('.swiper-container').swiper({
//    effect : 'coverflow',
//    freeMode : true
//
//});


$(function () {
    window.addEventListener('touchmove', function (e) {
        e.preventDefault();
    });
    FastClick.attach(document.body);
    $(".confirm_set").click(function () {
        if ($(".oldpassword input").val() == "") {
            $(".shopcar_mask").show().fadeOut(1000);
            $(".test_hint").show().text("旧密码不能为空").fadeOut(2000);
            $(".oldpassword input").focus();
        } else if ($(".oldpassword input").val() == "1234") {

            if ($(".newpassword input").val() == "") {
                $(".shopcar_mask").show().fadeOut(1000);
                $(".test_hint").show().text("新密码不能为空").fadeOut(2000);
                $(".newpassword input").focus();
            } else if ($(".confirm_new_password input").val() == "") {
                $(".shopcar_mask").show().fadeOut(1000);
                $(".test_hint").show().text("确认密码不能为空").fadeOut(2000);
                $(".confirm_new_password input").focus();
            } else if ($(".newpassword input").val().length<6) {
                $(".shopcar_mask").show().fadeOut(1000);
                $(".test_hint").show().text("密码不能小于6位").fadeOut(2000);
                $(".newpassword input").focus();
            } else if ($(".confirm_new_password input").val() == $(".newpassword input").val()) {
                $(".shopcar_mask").show().fadeOut(1000);
                $(".test_hint").show().text("修改成功").fadeOut(2000);
                $(".test_word input").blur();
                setTimeout(function(){
                    location.href="/html/associator_message.html";
                },2000);
            }else{
                $(".shopcar_mask").show().fadeOut(1000);
                $(".test_hint").show().text("新密码和确认密码不一致").fadeOut(2000);
                $(".newpassword input").focus();
            }
        }else{
            $(".shopcar_mask").show().fadeOut(1000);
            $(".test_hint").show().text("密码错误").fadeOut(2000);
            $(".oldpassword input").focus();
        }
    });
});