/**
 * Created by Personal on 2016/7/30.
 */

$(function(){
    new iScroll('parent2', {
        hScrollbar: false,
        vScrollbar: false,
        checkDOMChanges: true,
        bounce: false
    });
    window.addEventListener('touchmove', function (e) {
        e.preventDefault();
    });
    FastClick.attach(document.body);
    $(".my_pref_content>div").click(function(){
        $(".shopcar_mask").fadeIn(200);
        $(".my_pref_hint").fadeIn(200);
     });
    $(".shopcar_mask").click(function(){
        $(".shopcar_mask").fadeOut(200);
        $(".my_pref_hint").fadeOut(200);
    });
});

