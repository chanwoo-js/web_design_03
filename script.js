jQuery(document).ready(function () {
    setInterval(() => {
        $(".images_box").delay(2000);
        $(".images_box").animate({marginLeft : -1200});
        $(".images_box").delay(2000);
        $(".images_box").animate({marginLeft : -2400});
        $(".images_box").delay(2000);
        $(".images_box").animate({marginLeft : +0});
    });
    $(".notice > ul > li > a").click(function () {
        $(".modal_back").addClass("active");
    })
    $(".modal_box button").click(function () {
        $(".modal_back").removeClass("active");
    })
    $("nav > ul > li > a, nav > ul > li > ul, .menu_bg").mouseover(function (){
        $("nav > ul > li > ul").stop().slideDown(500);
        $(".menu_bg").stop().slideDown(500);
    })
    $("nav > ul > li > a, nav > ul > li > ul, .menu_bg").mouseout(function (){
        $("nav > ul > li > ul").stop().slideUp(500);
        $(".menu_bg").stop().slideUp(500);
    })
})