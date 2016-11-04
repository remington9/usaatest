$(document).ready(function() {


    $({countNum: 0}).animate({countNum: 1423}, {
        duration: 6000,
        easing:'linear',
        step: function() {
            //happens every count
            $('#counter').text(Math.floor(this.countNum));
        },
        complete: function() {
            //places last number otherwise stops at 1422
            $('#counter').text('1,423');
            $('#counter').css('color','#5affa8')
            $('#counter').css('font-size', '3.4em')
        }
    });

    $('.progress .progress-bar').progressbar();
});