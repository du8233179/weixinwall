/**
 * Created by Personal on 2016/7/30.
 */
if (!localStorage.arr1) {
    localStorage.arr1 = JSON.stringify([]);
}

function getarr(larr) {
    return JSON.parse(larr);
}
function setarr(arr) {
    localStorage.setItem("arr1", JSON.stringify(arr));
}
 new Swiper('.swiper-container', {
    pagination : '.swiper-pagination'
})
$(function () {
    var scroll = new iScroll('parent2', {
        hScrollbar: false,
        vScrollbar: false,
        checkDOMChanges: true,
        bounce: false
    });
    window.addEventListener('touchmove', function (e) {
        e.preventDefault();
    });
    //写入数据
    FastClick.attach(document.body);
    var arr = getarr(localStorage.arr1);
    renovate_shopcar();
    for(var a=0;a<arr.length;a++){
        if (arr[a].id == location.search.slice(1)) {
            break;
        }
    }
   //加操作
    $("#add").click(function () {
        var offset = $('.storedcard_detail_shoppingcar').offset();
        flyer = $('<img class="img" style="width:50px;height:50px;border-radius:50%;" src="' + $("img")[0].src + '"/>');
        flyer.fly({
            start: {
                left: event.clientX - 40,
                top: event.clientY - 30
            },
            end: {
                left: offset.left,
                top: $(window).height(),
                width: 0,
                height: 0
            },
            onEnd: function () {
                if(!$(".storedcard_detail_shoppingcar").is(":animated")){
                    $(".storedcard_detail_shoppingcar").animate(
                        {  bottom: "-=8px"
                        },100).animate(
                        {  bottom: "+=8px"
                        },100)

                }
                //renovate_shopcar();
                $(".storedcard_detail_shoppingcar>p").text( Number($(".storedcard_detail_shoppingcar>p").text())+1);
                $(".img").first().remove();

            }
        });
        for (var i = 0; i < arr.length; i++) {
            if (arr[i].id == location.search.slice(1)) {
                break;
            }
        }
        if (i == arr.length) {
           // arr.push(
           //     {   id:location.search.slice(1),
           //         img: $("#detail_img")[0].src,
           //         name: $("#name").text(),
           //         content: "",
           //         price: $("#price").text(),
           //         count: 1,
           //     });
           //setarr(arr);

        } else {
            arr[i].count += 1;
        }
        setarr(arr);
   });

    //购物车
    $(".storedcard_detail_shoppingcar").click(function () {
        location.href = "/html/shopcar.html";
    });
    function renovate_shopcar() {
        for (var i = 0, sum = 0; i < arr.length; i++) {
            sum += arr[i].count;
        }
        if (sum > 99) {
            $(".storedcard_detail_shoppingcar>p").text(99 + "+");
        } else {
            $(".storedcard_detail_shoppingcar>p").text(sum);
        }
    }
});