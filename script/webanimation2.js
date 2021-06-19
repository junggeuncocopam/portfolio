
$(function () {
    $(window).scroll(function () {
        var navbar = $(this).scrollTop();
        console.log(navbar);
        var $header = $('header');
        if (navbar > 860) {
            $header.addClass('activated');
        } else {
            $header.removeClass('activated');
        }
    })
})

$(function () {
    $(window).scroll(function () {
        var navbar = $(this).scrollTop();
        console.log(navbar);
        var $header = $('body');
        if (navbar > 500) {
            $header.addClass('activated');
        } else {
            $header.removeClass('activated');
        }
    })
})

// on page load...
moveProgressBar();
// on browser resize...
$(window).resize(function () {
    moveProgressBar();
});

// SIGNATURE PROGRESS
function moveProgressBar() {
    console.log("moveProgressBar");
    var getPercent = ($('.progress-wrap').data('progress-percent') / 60);
    var getProgressWrapWidth = $('.progress-wrap').width();
    var progressTotal = getPercent * getProgressWrapWidth;
    var animationLength = 3000;

    // on page load, animate percentage bar to data percentage length
    // .stop() used to prevent animation queueing
    $('.progress-bar').stop().animate({
        left: progressTotal
    }, animationLength);
}