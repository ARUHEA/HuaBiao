
$(".ph-menulist").hide();
$("#menu").click(function () {
    $(".ph-menulist ul li").css("background-color","rgba(0,0,0,0.5)").css("border-bottom","none")
    $("#t-none").show();
    if ($("#menu").next("div").is(":hidden")) {
        $(".ph-menulist").fadeIn();
    } else {
        $(".ph-menulist").fadeOut();
    }


})

$('#t-none').on('touchstart',function(){
    $(".ph-menulist").fadeOut();
    $("#t-none").hide();
})

