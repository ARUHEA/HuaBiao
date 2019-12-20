$(".top-link ul li a").bind('click', function () {
    $(".top-link ul li a").removeClass("a-bottom");
    $(this).addClass("a-bottom");
});