
//$(document).ready(function () {

$(function() {
  $('#one').hover(function() {
    $('#twister').css('animation', 'woo 1s 1');
    $('#twister').css('rotate', '-35deg');
    console.log("left");
  }, function() {
    // on mouseout, reset the background colour
    $('#twister').css('animation', 'resetLeft 1s 1');
    $('#twister').css('rotate', '0deg');
  });

  $('#pack').hover(function() {
    $('#twister').css('animation', 'wee 1s 1');
    $('#twister').css('rotate', '35deg');
    console.log("right");
  }, function() {
    // on mouseout, reset the background colour
    $('#twister').css('animation', 'resetRight 1s 1');
    $('#twister').css('rotate', '0deg');
  });
});
//});