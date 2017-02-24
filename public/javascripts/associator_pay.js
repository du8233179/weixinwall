/**
 * Created by Personal on 2016/7/30.
 */
$(function(){
    window.addEventListener('touchmove', function (e) {
        e.preventDefault();
    });
    FastClick.attach(document.body);
    $(".privilege").click(function(){
        location.href="/html/associator_priv.html";
    });
});