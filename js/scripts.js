$(document).ready(function(){

/***********************/
/* flash card scripts */
/*********************/

$("#blockelements").click(function() {
  $("#blockelements").toggle();
  $("#blockelementsinfo").toggle();
  $("#blockelementsborder").addClass("bordered");
});

$("#blockelementsinfo").click(function() {
  $("#blockelementsborder").removeClass();
  $("#blockelements").toggle();
  $("#blockelementsinfo").toggle();
});

});
