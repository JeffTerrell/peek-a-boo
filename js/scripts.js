$(document).ready(function() {
  $(".clickable").click(function() {
    $("#walrus-showing").slideDown();
    $("#walrus-hidden").slideToggle();
  });
});

$(document).ready(function() {
  $(".click").click(function() {
    $(".showing").slideToggle();
    $(".hidden").slideToggle();
  });
});