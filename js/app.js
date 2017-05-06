$(document).ready(function(){
    $(document).foundation();
    $(window).scroll(function(){
        if ($(window).scrollTop() > 50){
            $("#titlePage").css({"filter": "contrast(220%) grayscale(100%) brightness(40%)",
                                 "-webkit-filter": "contrast(220%) grayscale(100%) brightness(40%)"});
            $("#job, #name").css({"filter": "grayscale(100%) brightness(40%)",
                                  "-webkit-filter": "grayscale(100%) brightness(40%)"});
        } else {
            $("#titlePage").css({"filter": "contrast(220%) grayscale(0%) brightness(100%)",
                                 "-webkit-filter": "contrast(220%) grayscale(0%) brightness(100%)"});
            $("#job, #name").css({"filter": "grayscale(0%) brightness(100%)",
                                 "-webkit-filter": "grayscale(0%) brightness(100%)"});
        }
    });
    
    var offset = $(".about-pics").offset().top;
    $(window).scroll(function() {
        if ($(window).scrollTop() >= offset) {
            $('.about-pics').css({
                position: 'fixed'
            });
            $('.main').css({
                visibility: 'hidden'
            });
        } else {
            $('.about-pics').css({
                position: 'relative'
            });
            $('.main').css({
                visibility: 'visible'
            });
        }
    });
    
    var offset2 = $(".portfolio").offset().top;
    $(window).scroll(function() {
        if ($(window).scrollTop()>= offset2) {
            $('.about-pics').css({
                position: 'relative'
            });
        }
    });
});

$(window).on('beforeunload', function(){
  $(window).scrollTop(0);
});