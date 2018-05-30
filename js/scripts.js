$(document).ready(function(){

/***********************/
/* flash card scripts */
/*********************/

$("#html-flashcard").click(function() {
  $("#html-flashcard").toggle();
  $("#html-flashcard-info").toggle();
  $("#html-flashcard-border").addClass("bordered bg-warning");
});

$("#html-flashcard-info").click(function() {
  $("#html-flashcard-border").removeClass();
  $("#html-flashcard").toggle();
  $("#html-flashcard-info").toggle();
});

$("#block-elements").click(function() {
  $("#block-elements").toggle();
  $("#block-elements-info").toggle();
  $("#block-elements-border").addClass("bordered bg-warning");
});

$("#block-elements-info").click(function() {
  $("#block-elements-border").removeClass();
  $("#block-elements").toggle();
  $("#block-elements-info").toggle();
});

$("#inline-elements").click(function() {
  $("#inline-elements").toggle();
  $("#inline-elements-info").toggle();
  $("#inline-elements-border").addClass("bordered bg-warning");
});

$("#inline-elements-info").click(function() {
  $("#inline-elements-border").removeClass();
  $("#inline-elements").toggle();
  $("#inline-elements-info").toggle();
});



$("#tags").click(function() {
  $("#tags").toggle();
  $("#tags-info").toggle();
  $("#tags-border").addClass("bordered bg-warning");
});

$("#tags-info").click(function() {
  $("#tags-border").removeClass();
  $("#tags").toggle();
  $("#tags-info").toggle();
});

$("#attributes").click(function() {
  $("#attributes").toggle();
  $("#attributes-info").toggle();
  $("#attributes-border").addClass("bordered bg-warning");
});

$("#attributes-info").click(function() {
  $("#attributes-border").removeClass();
  $("#attributes").toggle();
  $("#attributes-info").toggle();
});

$("#relative-path").click(function() {
  $("#relative-path").toggle();
  $("#relative-path-info").toggle();
  $("#relative-path-border").addClass("bordered bg-warning");
});

$("#relative-path-info").click(function() {
  $("#relative-path-border").removeClass();
  $("#relative-path").toggle();
  $("#relative-path-info").toggle();
});

});
