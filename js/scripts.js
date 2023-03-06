if($(window).width() < 1025) {
    $('.nav-drop').removeClass('animated fadeInUp');
}

$(function () {
    $(document).scroll(function () {
      var $nav = $(".navbar");
      $nav.toggleClass('static', $(this).scrollTop() > $nav.height());
    });
});

$(window).on('load', function() {
    $('.book-flight-area').addClass('fadeInUp');
});