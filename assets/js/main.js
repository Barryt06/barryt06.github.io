$(".yes-btn").click(function (e) {
  e.preventDefault();
  $("main").removeClass("opacity_hide");
  $(".preloader").addClass("opacity_hide");
});

var mute = false;

const audio = new Audio("assets/audio/song_audio.mp3");
const buttons = document.querySelectorAll(".js-button-clicked");
const mute_button = document.querySelector("#mute");
const mute_icon = document.querySelector("#mute_icon");

mute_button.addEventListener("click", () => {
  if (!mute) {
    audio.muted = true;
    mute = true;
    mute_icon.classList.add("fa-volume-high");
    mute_icon.classList.remove("fa-volume-xmark");
    mute_button.classList.remove("btn-danger");
    mute_button.classList.add("btn-success");
  } else {
    audio.muted = false;
    mute = false;

    mute_icon.classList.add("fa-volume-xmark");
    mute_icon.classList.remove("fa-volume-high");
    mute_button.classList.add("btn-danger");
    mute_button.classList.remove("btn-success");
  }
});
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    if (!mute) {
      audio.volume = 0.5;
      audio.play();
    }
  });
});

$(function () {
  function count($this) {
    var current = parseInt($this.html(), 10);
    $this.html(++current);
    if (current !== $this.data("count")) {
      setTimeout(function () {
        count($this);
      }, 10);
    }
  }
  $(".loaderCounter").each(function () {
    $(this).data("count", parseInt($(this).html(), 10));
    $(this).html("0");
    count($(this));
  });
});
