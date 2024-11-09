


var p = new Peel('#peel-press');
p.setMode('book');
p.setPeelPath(130, 160, 50, 60, -70, 210, -130, 160);
p.t = 0;
var tween = new TweenLite(p, 1.5, {
  t:1,
  paused:true,
  ease: Power2.easeOut,
  onUpdate: function() {
    p.setTimeAlongPath(this.target.t);
  },
});
p.handlePress(function(evt) {
  if (p.t > .5) {
    tween.reverse();
  } else {
    tween.play();
  }
});