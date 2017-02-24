/**
 * Created by Personal on 2016/7/30.
 */
$(function () {
    window.addEventListener('touchmove', function (e) {
        e.preventDefault();
    });
    FastClick.attach(document.body);
    $(".send_hint").show();
    var stop = setInterval(function () {
        $(".send_hint>p>span").text(Number($(".send_hint>p>span").text()) - 1);
        if ($(".send_hint>p>span").text() == 0) {
            clearInterval(stop);
            $(".send_hint").hide();
            $(".again_send").show();
        }
    }, 1000);
    $(".again_send").click(function () {
        $(this).hide();
        $(".send_hint").show();
        $(".send_hint>p>span").text(60);
        stop = setInterval(function () {
            $(".send_hint>p>span").text(Number($(".send_hint>p>span").text()) - 1);
            if ($(".send_hint>p>span").text() == 0) {
                clearInterval(stop);
                $(".send_hint").hide();
                $(".again_send").show();
            }
        }, 1000);
    });
    $(".confirm_set").click(function () {
        if ($(".test_word input").val() == "") {
            $(".shopcar_mask").show().fadeOut(1000);
            $(".test_hint").show().text("验证码不能为空").fadeOut(2000);
            $(".test_word input").focus();
        } else if ($(".test_word input").val() == "1234") {

            if ($(".new_password input").val() == "") {
                $(".shopcar_mask").show().fadeOut(1000);
                $(".test_hint").show().text("新密码不能为空").fadeOut(2000);
                $(".new_password input").focus();
            } else if ($(".confirm_new_password input").val() == "") {
                $(".shopcar_mask").show().fadeOut(1000);
                $(".test_hint").show().text("确认密码不能为空").fadeOut(2000);
                $(".confirm_new_password input").focus();
            } else if ($(".new_password input").val().length<6) {
                $(".shopcar_mask").show().fadeOut(1000);
                $(".test_hint").show().text("密码不能小于6位").fadeOut(2000);
                $(".new_password input").focus();
            } else if ($(".confirm_new_password input").val() == $(".new_password input").val()) {
                $(".shopcar_mask").show().fadeOut(1000);
                $(".test_hint").show().text("修改成功").fadeOut(2000);
                $(".test_word input").blur();
                setTimeout(function(){
                    location.href="/html/associator_message.html";
                },2000);
            }else{
                $(".shopcar_mask").show().fadeOut(1000);
                $(".test_hint").show().text("新密码和确认密码不一致").fadeOut(2000);
                $(".new_password input").focus();
            }
        }else{
            $(".shopcar_mask").show().fadeOut(1000);
            $(".test_hint").show().text("验证码错误").fadeOut(2000);
            $(".test_word input").focus();
        }
    });
});



















