/**
 * Created by Personal on 2016/8/2.
 */
//var swiper = $('.swiper-container').swiper({
//    effect : 'coverflow',
//    freeMode : true
//
//});
if(!localStorage.arr1){
    localStorage.arr1=JSON.stringify([]);
}
function getarr(larr) {
    return JSON.parse(larr);
}
function setarr(arr) {
    localStorage.setItem("arr1", JSON.stringify(arr));
}


$(function () {
    var arr = getarr(localStorage.arr1);

    if (arr ===0) {
        $("#nav1 b").hide();
        $("#nav1 b").text(0);
    } else {
        $("#nav1 b").show();
        for (var i = 0, sum = 0; i < arr.length; i++) {
            sum += arr[i].count;
        }
        $("#nav1 b").text(sum);
    }

    $(".add").click(function (event) {
        $("#nav1 b").show();
        var offset = $('#nav1 b').offset();
        flyer = $('<img class="u-flyer" src="'+$(this).parents("li").children("img")[0].src+'"/>');
        flyer.fly({
            start: {
                left: event.clientX-40,
                top: event.clientY-30
            },
            end: {
                left: offset.left,
                top: $(window).height(),
                width: 0,
                height: 0
            },
            onEnd: function () {
                $("#nav1 b").text(Number($("#nav1 b").text()) + 1);
                $(".u-flyer").first().remove();
            }

        });

        arr = getarr(localStorage.arr);
        for (var i = 0; i < arr.length; i++) {
            if (arr[i].img == $(this).parents("li").children("img")[0].src) {
                break;

            }
        }
        if (i == arr.length) {
            arr.push(
                {
                    img: $(this).parents("li").children("img")[0].src,
                    name: $(this).parents("li").children(".pname").text(),
                    content: $(this).parents("li").children(".pintr").text(),
                    price: $(this).parents("li").children("div").children(".span_big").children("b").text(),
                    count: 1,
                });
        } else {
            arr[i].count += 1;
        }
        setarr(arr);
    });
});