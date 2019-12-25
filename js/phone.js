
$(".ph-menulist").hide();
$("#menu").click(function () {
    $("#t-none").show();
    if ($("#menu").next("div").is(":hidden")) {
        $(".ph-menulist").show();
    } else {
        $(".ph-menulist").hide();
    }
})

$('#t-none').on('touchstart',function(){
    $(".ph-menulist").hide();
    $("#t-none").hide();
})

