
$(".header_about").hide();
$("#menu").click(function () {
    $("#t-none").show();
    if ($("#menu").next("div").is(":hidden")) {
        $(".header_about").show();
    } else {
        $(".header_about").hide();
    }
})

$('#t-none').on('touchstart',function(){
    $(".header_about").hide();
    $("#t-none").hide();
})

