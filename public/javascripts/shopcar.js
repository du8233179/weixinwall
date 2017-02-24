//检测是否有缓存
if (!localStorage.arr1) {
    localStorage.arr1 = JSON.stringify([]);
}
function getarr(larr) {
    return JSON.parse(larr);
}
function setarr(arr) {
    localStorage.setItem("arr1", JSON.stringify(arr));
}
//写入页面
(function () {
    //var scroll = new iScroll('parent2', {
    //    hScrollbar: false,
    //    vScrollbar: false,
    //    checkDOMChanges: true,
    //    bounce: false,
    //
    //});
    //window.addEventListener('touchmove', function (e) {
    //    e.preventDefault();
    //});
    $("#parent2")[0].addEventListener('touchmove', function (e) {
        e.stopPropagation();
    });
    var arr = getarr(localStorage.arr1);
    for (var i = 0, item_arr = []; i < arr.length; i++) {
        item_arr.push(
            '<div class="swiper-container"><div class="swiper-wrapper"> <div class="swiper-slide"> <div class="shopcar_content_item"> <ul> <li><b></b></li> <li><img src="' + arr[i].img + '" alt=""></li> <li> <div> <header>' + arr[i].name + '</header> <p>' + arr[i].content + '</p> <footer> <p>￥<span class="shopcar_price">' + arr[i].price + '</span></p> <div><b class="shopcar_less" class="shopcar_add"></b><span class="count">' + arr[i].count + '</span><b class="shopcar_add"></b></div> </footer><b class="item_id">' + arr[i].id + '</b></div> </li> </ul> </div> </div> <div class="remove">删除</div> </div> </div>'
        )
    }
    $(".shopcar_content").append(item_arr.join(""));
}());


var mySwiper = new Swiper('.swiper-container', {
    onTouchEnd: function(swiper){
       return false;
    },
    slidesOffsetAfter: 80,
});
$(function () {
    FastClick.attach(document.body);
    var arr = getarr(localStorage.arr1);
    if (arr.length === 0) {
        $(".shopcar").hide();
        $(".shopcar").text(0);
        $(".go_shopping").show();
        $(".shopcar_mask").show();
    } else {
        $(".shopcar").show();
        renovate_shopcar();
    }

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
    $(".all_select").click(function () {
        if ($(".all_select>b").hasClass("checked")) {
            $(".all_select>b").removeClass("checked").css("border","1px solid #999");
            $(".shopcar_content_item>ul>li>b").removeClass("checked").css("border","1px solid #999");
            get_total();
        } else {
            $(".all_select>b").addClass("checked").css("border","none");
            $(".shopcar_content_item>ul>li>b").addClass("checked").css("border","none");
            get_total();
        }
    }).click();
  //选择操作
    $(".shopcar_content_item").click(function () {
        if ($(this).children("ul").children(":first").children("b").hasClass("checked")) {
            $(this).children("ul").children(":first").children("b").removeClass("checked").css("border","1px solid #999");
            $(".all_select>b").removeClass("checked").css("border","1px solid #999");
            get_total();
        } else {
            $(this).children("ul").children(":first").children("b").addClass("checked").css("border","none");
            if ($(".shopcar_content_item").length === $(".shopcar_content .checked").length) {
                $(".all_select>b").addClass("checked").css("border","none");

            }
            get_total();
        }
    });
    //加操作
    $(".shopcar_add").click(function () {
        $(this).parents("ul").children(":first").children("b").addClass("checked");
        if ($(".shopcar_content_item").length === $(".shopcar_content .checked").length) {
            $(".all_select>b").addClass("checked");
        }

        for (var i = 0; i < arr.length; i++) {
            if ($(this).parents("footer").next().text() == arr[i].id) {
                arr[i].count += 1;
                setarr(arr);
                renovate_shopcar();
                $(this).prev().text(Number($(this).prev().text()) + 1);
            }
        }

        get_total();
        return false;
    });
    //减少操作
    $(".shopcar_less").click(function () {
        $(this).parents("ul").children(":first").children("b").addClass("checked");
        if ($(".shopcar_content_item").length === $(".shopcar_content .checked").length) {
            $(".all_select>b").addClass("checked");
        }
        for (var i = 0; i < arr.length; i++) {
            if ($(this).parents("footer").next().text() == arr[i].id) {
                if (arr[i].count == 1) {
                    arr[i].count == 1;
                    $(this).next().text(1);
                } else {
                    arr[i].count -= 1;
                    setarr(arr);
                    $(this).next().text(Number($(this).next().text()) - 1);
                    renovate_shopcar();
                }

            }
        }

        get_total();
        return false;
    });
    //删除
    $(".remove").click(function () {
        $(".shopcar_mask").show();
        $(".shopcar_hint").show(200);
        $(".shopcar_hint>.shopcar_index").text($(this).parents(".swiper-container").index());
        $(".shopcar_hint>.remove_item_id").text($(this).prev()
            .children("div").children("ul").children(":eq(2)").children("div").children(".item_id").text());

    });
    //确认删除
    $(".shopcar_hint>div>b").click(function () {
        for (var a = 0; a < arr.length; a++) {
            if (arr[a].id == $(".shopcar_hint>.remove_item_id").text()) {
                break;
            }
        }
        if (a < arr.length) {

            arr.splice(a, 1);
            setarr(arr);
            renovate_shopcar();
            $(".swiper-container").eq($(".shopcar_hint>.shopcar_index").text()).empty();


        }
        if ($(".shopcar").text() == 0) {
            $(".shopcar").text("");
            $(".go_shopping").show();
            $(".shopcar_mask").show();
            $(".shopcar").hide();
            $(".shopcar_hint").hide();
        } else {
            $(".shopcar_mask").hide();
            $(".shopcar_hint").hide();

        }
        for (var i = 0, sum = 0, count = 0; i < $(".shopcar_checked").length; i++) {
            sum += Number($(".shopcar_checked")
                    .eq(i).parents("ul")
                    .children(".shopcar_intr")
                    .children("div").children("span").children("b")
                    .text()) * Number($(".shopcar_checked").eq(i).
                    parents("ul").children(".shopcar_intr").children("div").
                    children(".shopcar_count").text());
            count += Number($(".shopcar_checked").eq(i).
                parents("ul").children(".shopcar_intr").children("div").
                children(".shopcar_count").text());
        }


    });
    //取消删除
    $(".shopcar_hint>div>span").click(function () {
        $(".shopcar_mask").hide();
        $(".shopcar_hint").hide();
    });
    $(".down_order").click(function () {
        if( $(".shopcar_content .checked").length===0){
            $(".shopcar_mask").show().fadeOut(1000);
            $(".test_hint").show().text("您还没有选择物品呢 亲！").fadeOut(2000);
        }else{
            for (var i = 0, ar = []; i < $(".shopcar_content .checked").length; i++) {
                for (var a = 0; a < arr.length; a++) {
                    if ($(".shopcar_content .checked").eq(i).parents("ul").children(":eq(2)").children("div").children("b").text() == arr[a].id) {
                        ar.push(a);
                    }
                }
            }
            location.href = "/html/order_confirm.html?" + ar.join("");
        }

    });
    function renovate_shopcar() {
        for (var i = 0, sum = 0; i < arr.length; i++) {
            sum += arr[i].count;
        }
        if (sum > 99) {
            $(".shopcar").text(99 + "+");
        } else {
            $(".shopcar").text(sum);
        }
    }

    function get_total() {
        if ($(".shopcar_content .checked").length > 0) {
            for (var i = 0, sum = 0; i < $(".shopcar_content .checked").length; i++) {
                sum += Number($(".shopcar_content .checked").eq(i).parents("ul").children(":eq(2)").children("div")
                        .children("footer").children("p").children("span").text()) * Number($(".shopcar_content .checked").eq(i).parents("ul").children(":eq(2)").children("div")
                        .children("footer").children("div").children(".count").text());
            }
            $(".total>span").text(sum);
        } else {
            $(".total>span").text("0.00");
        }

    }

    get_total();
})