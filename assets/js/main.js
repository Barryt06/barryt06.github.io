$('.yes-btn').click(function (e) {
  e.preventDefault();
  $('main').removeClass('opacity_hide');
  $('.preloader').addClass('opacity_hide');
});


const audio = new Audio("assets/audio/song_audio.mp3");
const buttons = document.querySelectorAll(".js-button-clicked");

buttons.forEach(button => {
  button.addEventListener("click", () => {
    audio.play();
  });
});

$(function () {
  function count($this) {
    var current = parseInt($this.html(), 10);
    $this.html(++current);
    if (current !== $this.data('count')) {
      setTimeout(function () { count($this) }, 10);
    }
  }
  $(".loaderCounter").each(function () {
    $(this).data('count', parseInt($(this).html(), 10));
    $(this).html('0');
    count($(this));
  });
});
