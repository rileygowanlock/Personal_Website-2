$(document).ready(function() {
    $(document).foundation();
})

$(document).ready(function(){
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
});