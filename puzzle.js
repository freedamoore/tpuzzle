$(document).ready(function() {
var degrees = 0;
var imageId = '#shape1';

$("button").click(function() {

  degrees += 90;

  if (this.id === "btn1")
    imageId = "#shape1";
  else if (this.id === "btn2")
    imageId = "#shape2";
  else if (this.id === "btn3")
    imageId = "#shape3";
  else
    imageId = "#shape4";

  $(imageId).css({
    'transform': 'rotate(' + degrees + 'deg)',
    '-ms-transform': 'rotate(' + degrees + 'deg)',
    /* IE 9 */
    '-moz-transform': 'rotate(' + degrees + 'deg)',
    /* Firefox */
    '-webkit-transform': 'rotate(' + degrees + 'deg)',
    /* Safari and Chrome */
    '-o-transform': 'rotate(' + degrees + 'deg)' /* Opera */
  });

});

  $(".shape").draggable({
      containment: "#containment-wrapper",
      scroll: false
    });
});
