$(function(){

    $('.counter').counterUp({
        delay: 10,
        time: 1500
    });
// count
    $(".count").countMe(10,20);
// animatre
    $(".num").numScroll({
            number: 1122334455,
            'time': 3000,
            'delay': 30,
            'symbol':true,
            'fromZero':true
    });
// animate roll
$('.counterRoll').rollNumber({
      number: 123456
    });
})