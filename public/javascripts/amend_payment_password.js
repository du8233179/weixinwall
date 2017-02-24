/**
 * Created by Personal on 2016/7/30.
 */
$(function () {
    var num = "", n = 1, isset = false;
    $(".import_password input").bind('input propertychange', function () {
        var pas = $(".import_password input").val();
        for (var i = 0, arr = []; i < pas.length; i++) {
            arr.push("*");
        }
        $(".import_password>div>div").text(arr.join(""));

    });
    $(".set_password_confirm").click(function () {
        if ($(".import_password input").val() == "123456") {
             isset = true;
            $(".shopcar_mask").show().fadeOut(1000);
            $(".test_hint").show().text("密码正确，请输入新密码").fadeOut(2000);
            $(".import_password>p").text("密码正确，请输入新密码");
            $(".import_password>div>div").text("");
            $(".import_password input").val("");
            $(".import_password input").focus();
        }else if (isset) {
            if ($(".import_password input").val().search(/[0-9]{6}/) != -1 && n == 1) {
                n++;
                num = $(".import_password input").val();
                $(".shopcar_mask").show().fadeOut(1000);
                $(".test_hint").show().text("请再次确认密码").fadeOut(2000);
                $(".import_password>p").text("请再次确认新密码");
                $(".import_password>div>div").text("");
                $(".import_password input").val("");
                $(".import_password input").focus();

            } else if ($(".import_password input").val().search(/[0-9]{6}/) != -1 && n == 2) {
                if (num == $(".import_password input").val()) {
                    setTimeout(function () {
                        $(".shopcar_mask").fadeIn(100).fadeOut(1000);
                        $(".test_hint").fadeIn(100).text("修改成功").fadeOut(2000, function () {
                            location.href = "/html/message_mydata.html";
                        });
                        $(".import_password>p").text("修改成功");

                    }, 400);

                } else {
                    n = 1;
                    num = "";
                    $(".shopcar_mask").show().fadeOut(1000);
                    $(".test_hint").show().text("俩次输入密码不一致,请重新输入").fadeOut(2000);
                    $(".import_password>p").text("请重新输入");
                    $(".import_password>div>div").text("");
                    $(".import_password input").val("");
                    $(".import_password input").focus();

                }
            } else {
                $(".shopcar_mask").show().fadeOut(1000);
                $(".test_hint").show().text("格式不正确,请重新输入").fadeOut(2000);
                $(".import_password>p").text("格式不正确,请重新输入");
                $(".import_password>div>div").text("");
                $(".import_password input").val("");
                $(".import_password input").focus();
            }
        }else{
            $(".shopcar_mask").show().fadeOut(1000);
            $(".test_hint").show().text("密码不正确，请重新输入").fadeOut(2000);
            $(".import_password>p").text("密码不正确,请重新输入");
            $(".import_password>div>div").text("");
            $(".import_password input").val("");
            $(".import_password input").focus();
        }

        //if ($(".import_password input").val().search(/[0-9]{6}/) != -1 && n == 1) {
        //    num = $(".import_password input").val();
        //    n++;
        //    $(".shopcar_mask").show().fadeOut(1000);
        //    $(".test_hint").show().text("请再次输入密码").fadeOut(2000);
        //    $(".import_password>p").text("请再次输入密码");
        //    $(".import_password>div>div").text("");
        //    $(".import_password input").val("");
        //    $(".import_password input").focus();
        //} else if ($(".import_password input").val().search(/[0-9]{6}/) != -1 && n == 2) {
        //    if (num == $(".import_password input").val()) {
        //        setTimeout(function () {
        //            $(".shopcar_mask").fadeIn(100).fadeOut(1000);
        //            $(".test_hint").fadeIn(100).text("修改成功").fadeOut(2000, function () {
        //                location.href = "/html/message_mydata.html";
        //            });
        //            $(".import_password>p").text("修改成功");
        //
        //        }, 400);
        //
        //    } else {
        //        n = 1;
        //        num = "";
        //        $(".shopcar_mask").show().fadeOut(1000);
        //        $(".test_hint").show().text("俩次输入密码不一致,请重新输入").fadeOut(2000);
        //        $(".import_password>p").text("请重新输入");
        //        $(".import_password>div>div").text("");
        //        $(".import_password input").val("");
        //        $(".import_password input").focus();
        //
        //    }
        //} else {
        //    $(".shopcar_mask").show().fadeOut(1000);
        //    $(".test_hint").show().text("格式不正确,请重新输入").fadeOut(2000);
        //    $(".import_password>p").text("格式不正确,请重新输入");
        //    $(".import_password>div>div").text("");
        //    $(".import_password input").val("");
        //    $(".import_password input").focus();
        //}
    });
});