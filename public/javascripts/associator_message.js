/**
 * Created by Personal on 2016/7/30.
 */
if(!localStorage.arr1){
    localStorage.arr1=JSON.stringify([]);
}
function getarr(larr) {
    return JSON.parse(larr);
}
function setarr(arr) {
    localStorage.setItem("arr1", JSON.stringify(arr));
}
$(function(){
    var scroll = new iScroll('parent2', {
        hScrollbar: false,
        vScrollbar: false,
        checkDOMChanges: true,
        bounce: false
    });
    window.addEventListener('touchmove', function (e) {
        e.preventDefault();
    });
    FastClick.attach(document.body)
    var  arr = getarr(localStorage.arr1);
if (arr.length=== 0) {
        $(".shopcar").hide();
        $(".shopcar").text(0);
    } else {
        $(".shopcar").show();
        for (var i = 0, sum = 0; i < arr.length; i++) {
            sum += arr[i].count;
        }
        $(".shopcar").text(sum);
    }
    $(".message_myorder").click(function () {
        location.href="/html/my_order.html";
    });
    $(".message_mycoupon").click(function () {
        location.href="/html/my_pref.html";
    });
    $(".message_grade").click(function () {
        location.href="/html/associator_pay.html";
    });
    $(".message_mydata").click(function () {
        location.href="/html/message_mydata.html";
    });
    $(".message_weal").click(function () {
        location.href="/html/a_card.html";
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
});
