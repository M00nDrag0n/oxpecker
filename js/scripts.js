$(document).ready(function() {
  // event.preventDefault(); This prevents the toggle from working, Anise.


    $("#revealed").click(function() {
      $('#Info').toggle();

    $("#more").click(function() {
      $("#Extra").toggle();

      $("#Extra").click(function() {
        $("#Note").toggle();

});
});
});
 });
