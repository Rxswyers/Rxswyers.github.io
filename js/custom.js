$(document).ready(function(){
  //If the link to the main page is clicked, it will load the page
  $("#main").click(function(){
    $("#stuff").load("main.html");
  });
  //If the services link is clicked, the services page will load
  $("#services").click(function(){
    $("#stuff").load("services.html");
    $("#servicesLi").addClass("active");
  });
});
