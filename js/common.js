$(".top-link ul li a").bind('click', function () {
    $(".top-link ul li a").removeClass("a-bottom");
    $(this).addClass("a-bottom");
});

$("#btn-about").click(
    function () {
        $(this).addClass("selected");
        $("#btn-teame").removeClass("selected");
        $("#txt-about").removeClass("txtnone");
        $("#txt-teame").addClass("txtnone");
    }

)

$("#btn-teame").click(
    function () {
        $(this).addClass("selected");
        $("#btn-about").removeClass("selected");
        $("#txt-teame").removeClass("txtnone");
        $("#txt-about").addClass("txtnone");
    }
)

