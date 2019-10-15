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


// $(document).ready(function(){
//     $( ".shape" ).draggable().click(function(){
//         imageId = "#"+this.id;
//     });
// });

// $(document).ready(function(){
//     $( ".shape" ).draggable();
// });


// $(document).ready(function(){
//     var degrees = 0;
//     $( ".shape" ).draggable({ containment: "#containment-wrapper", scroll: false })
//     .click(function(){
//           imageId = "#"+this.id;
//           if ( $(this).is('.ui-draggable-dragging') ) {
//                 return;
//           }
//
//           $('.shape').click(function rotateMe(e) {
//
//               degrees += 90;
//
//               $(this).css({
//                 'transform': 'rotate(' + degrees + 'deg)',
//                 '-ms-transform': 'rotate(' + degrees + 'deg)',/* IE 9 */
//                 '-moz-transform': 'rotate(' + degrees + 'deg)',/* Firefox */
//                 '-webkit-transform': 'rotate(' + degrees + 'deg)', /* Safari and Chrome */
//                 '-o-transform': 'rotate(' + degrees + 'deg)'/* Opera */
//               });
//
//           });
//     });
// });
