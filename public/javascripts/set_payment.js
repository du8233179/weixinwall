/**
 * Created by Personal on 2016/7/30.
 */
$(function(){
    window.addEventListener('touchmove', function (e) {
        e.preventDefault();
    });
    FastClick.attach(document.body);
    $(".confirm_set").click(function(){
        location.href="/html/set_payment_password.html";
    });
})