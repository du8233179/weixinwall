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
})