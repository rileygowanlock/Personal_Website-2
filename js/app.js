var count = true;
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
    
    var offset3 = $(".nextPage").offset().top;
    $(window).scroll(function() {
        if ($(window).scrollTop() >= offset3) {
            $('.main').css({
                visibility: 'hidden'
            });
        } else {
            $('.main').css({
                visibility: 'visible'
            });
        }
    });
    
//    var offset = $(".about-pics").offset().top;
//    $(window).scroll(function() {
//        if ($(window).scrollTop() >= offset && !count) {
//            $('.about-pics').css({
//                position: 'fixed',
//                top: '0px'
//            });
//        } else {
//            $('.about-pics').css({
//                position: 'relative'
//                
//            });
//        }
//    });
//    
    var offset = $(".about-pics").offset().top;
    var offset2 = $(".about-paragraph").offset().top + document.getElementById('paragraph').clientHeight;
    $(window).scroll(function() {
        var position;
        var top;
        if ($(window).scrollTop() < offset) {
            count = 0;
            position = 'relative';
            top = 0;
        } else if ($(window).scrollTop() + document.getElementById('about-fixed').clientHeight >= offset2) {
            if (!count) {
                count = 1;
                top = $(window).scrollTop() - document.getElementById('about-fixed').clientHeight;
                position = 'relative';
            }
        } else {
            count = 0;
            position = 'fixed';
            top = 0;
        }
        $('.about-pics').css({
            position: position,
            top: top
        });
    });

     
//    var offset2 = $(".about-paragraph").offset().top + document.getElementById('paragraph').clientHeight;
//    var top = document.getElementById('paragraph').clientHeight - document.getElementById('about-fixed').clientHeight;
//    $(window).scroll(function() {
//        if ($(window).scrollTop() + screen.height - 135 >= offset2) {
//            $('.about-pics').css({
//                position: 'relative',
//                top: top
//            });
//        }
//    });
    
//    var offset2 = $(".about-paragraph").offset().top + document.getElementById('paragraph').clientHeight;
//    $(window).scroll(function() {
//        if ($(window).scrollTop() + document.getElementById('about-fixed').clientHeight >= offset2 && !count) {
//            var top = $(window).scrollTop() - document.getElementById('about-fixed').clientHeight;
//            count++;
//            $('.about-pics').css({
//                position: 'relative',
//                top: top
//            });
//        }
//    });
    
    var offset4 = $(".project-desc").offset().top;
    $(window).scroll(function() {
        if ($(window).scrollTop() >= offset4) {
            $('.project-desc').css({
                position: 'fixed',
                top: '0px',
                left: '0px'
            });
        } else {
            $('.project-desc').css({
                position: 'relative'
            });
        }
    });
});

$(window).on('beforeunload', function(){
  $(window).scrollTop(0);
});