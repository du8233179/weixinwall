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

$(function () {
    FastClick.attach(document.body);
    var arr = getarr(localStorage.arr1);
    var count = 0;
    if (arr.length > 0) {
        $(".storedcard_detail_shoppingcar").show();
        for (var i = 0, sum = 0; i < arr.length; i++) {
            sum += arr[i].count;
            if (arr[i].img == $("#detail_img")[0].src) {
                count = arr[i].count;
            }

        }
        $(".storedcard_detail_shoppingcar>p").text(sum);
    }
    if (count > 0) {
        $("#less").css("visibility", "visible");
        $("#count").css("visibility", "visible");
        $("#count").text(count);
    } else {
        $("#less").css("visibility", "hidden");
        $("#count").css("visibility", "hidden");
    }
    //加操作
    $("#add").click(function () {
        $("#less").css("visibility", "visible");
        $("#count").css("visibility", "visible");
        for (var i = 0; i < arr.length; i++) {
            if (arr[i].img == $("#detail_img")[0].src) {
                break;
            }

        }
        if (i == arr.length) {
            arr.push(
                {
                    img: $("#detail_img")[0].src,
                    name: $("#name").text(),
                    content: "",
                    price: $("#price").text(),
                    count: 1,
                });


        } else {
            arr[i].count += 1;
        }
        setarr(arr);
        $("#count").text(arr[i].count);
        $(".storedcard_detail_shoppingcar>p").text(Number($(".storedcard_detail_shoppingcar>p").text()) + 1);
    });
    //减操作
    $("#less").click(function () {
        for (var i = 0; i < arr.length; i++) {
            if (arr[i].img == $("#detail_img")[0].src) {
                break;
            }
        }
        if (arr[i].count > 1) {
            arr[i].count -= 1;
            $("#count").text(Number($("#count").text()) - 1);
            $(".storedcard_detail_shoppingcar>p").text(Number($(".storedcard_detail_shoppingcar>p").text()) - 1);

        } else {
            arr.splice(i, 1);
            $("#less").css("visibility", "hidden");
            $("#count").css("visibility", "hidden");
            $("#count").text(Number($("#count").text()) - 1);
            $(".storedcard_detail_shoppingcar>p").text(Number($(".storedcard_detail_shoppingcar>p").text()) - 1);
        }
        setarr(arr);

    });
    //购物车
    $(".storedcard_detail_shoppingcar").click(function () {
        location.href = "/html/shopcar.html";
    });
});