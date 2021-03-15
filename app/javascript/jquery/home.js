document.addEventListener("turbolinks:load",function(){
$(function(){
  $("#login-show").click(function(){
    $('#login-modal').fadeIn();
  });

  $("#signup-show").click(function(){
    $('#signup-modal').fadeIn();
  });

  $(".close-modal").click(function(){
    $('#login-modal').fadeOut();
    $('#signup-modal').fadeOut();
  });

  $(".functions").click(function(){
    $('.functions').fadeOut();
  });

  $(window).scroll(function () {
    const wHeight = $(window).height();
    const scrollAmount = $(window).scrollTop();
    $('.scrollanime').each(function () {
        const targetPosition = $(this).offset().top;
        if(scrollAmount > targetPosition - wHeight + 60) {
            $(this).addClass("fadeInDown");
        }
    });
  });

});
});