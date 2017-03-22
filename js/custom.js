$( document ).ready(function()
{
    console.log( "ready!" );
    $('.dropdown-button').dropdown({
      gutter: 0, // Spacing from edge
      belowOrigin: true, // Displays dropdown below the button
      alignment: 'left', // Displays dropdown with edge aligned to the left of button
      stopPropagation: false // Stops event propagation
    }
  );
  /*
  $("#server_submit").click(function(){
    Materialize.toast('Info submitted', 4000) // 4000 is the duration of the toast
  });
  */
  $('#server_submit').click( function() {
    $.post( 'http://localhost/form', $('#server_form').serialize(), function(data) {
         console.log(data);
         Materialize.toast('Info submitted', 4000) // 4000 is the duration of the toast
       },
       'json' // I expect a JSON response
    );
  });
});