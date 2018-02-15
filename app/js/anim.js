TweenMax.from('.header_content', 1, {opacity:0});

var code = document.getElementsByClassName("code");

var tlcode = new TimelineMax();
tlcode.staggerFromTo(code, 0.5, {
  scaleX: 0
}, {
  scaleX: 1,
  repeat: -1,
  repeatDelay: 4,
  yoyo: true
}, 0.3);
