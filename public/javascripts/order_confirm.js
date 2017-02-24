/**
 * Created by Personal on 2016/8/2.
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
    $(".box_code_select")[0].addEventListener('touchmove', function (e) {
        e.stopPropagation();
    });

    FastClick.attach(document.body);
    var items_index=location.search.slice(1);

    var arr=getarr(localStorage.arr1);
   for(var i= 0,ar=[],total=0;i<items_index.length;i++){
      ar.push(
     '<div class="order_confirm_item"><img src="'+arr[items_index[i]].img+'" alt=""><div><p>'+arr[items_index[i]].name+'</p><h6>'+arr[items_index[i]].content+'</h6> <h5>单价:￥<span>'+arr[items_index[i]].price+'</span></h5></div><h4>×<span>'+arr[items_index[i]].count+'</span></h4></div>'
      );
       total+=arr[items_index[i]].count*arr[items_index[i]].price;
   }
   $(".order_confirm_content").append(ar.join(""));
      $(".total>span").text(total);
    //img: $(this).parents("li").children("img")[0].src,
    //    name: $(this).parents("li").children(".pname").text(),
    //    content: $(this).parents("li").children(".pintr").text(),
    //    price: $(this).parents("li").children("div").children(".span_big").children("b").text(),
    //    count: 1,
   $(".order_box_code").click(function(){
       $(".box_code_select").show();
   });
    $(".box_code_select>div>span").click(function(){
        $(".order_box_code>b").text($(this).text());
        $(".box_code_select").hide();
    });
    $(".box_code_select>b").click(function(){
        $(".box_code_select").hide();
    });

    $(".accounts").click(function(){
        if($(".order_name>input").val()==""){
            $(".shopcar_mask").show().fadeOut(1000);
            $(".test_hint").show().text("名字不能为空哦 亲！").fadeOut(2000);

            $(".iscroll").css("transform","translate(0px, 0px) scale(1) translateZ(0px)");
            $(".order_name>input").focus();
        }else if($(".order_box_code>b").text()==""){
            $(".shopcar_mask").show().fadeOut(1000);
            $(".test_hint").show().text("包厢号一定要选哦 亲！").fadeOut(2000);
            $(".iscroll").css("transform","translate(0px, -90px) scale(1) translateZ(0px)");
        }else if($(".order_connect_mode>input").val()==""){
            $(".shopcar_mask").show().fadeOut(1000);
            $(".test_hint").show().text("电话不能为空哦 亲！").fadeOut(2000);
            $(".iscroll").css("transform","translate(0px, -161px) scale(1) translateZ(0px)");
            $(".order_connect_mode>input").focus();
        }else if(!(/^1[34578]\d{9}$/.test($(".order_connect_mode>input").val()))){
            $(".shopcar_mask").show().fadeOut(1000);
            $(".test_hint").show().text("电话格式不对哦 亲！").fadeOut(2000);
            $(".iscroll").css("transform","translate(0px, -161px) scale(1) translateZ(0px)");
            $(".order_connect_mode>input").focus();
        }else{
            location.href="/html/payment_mode.html?"+$(".total>span").text();
        }
    });

});