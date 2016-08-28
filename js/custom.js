$(document).ready(function(){
  //If the link to the main page is clicked, it will load the page
  $("#main").click(function(){
    $("#stuff").load("main.html");
  });
  //If the services link is clicked, the services page will load
  $("#services").click(function(){
    $("#stuff").load("services.html");
    //$("#servicesLi").addClass("active");
  });
  //If the projects link is clicked, the projects page will load
  $("#projects").click(function(){
    $("#stuff").load("projects.html");
    //$("#projectsLi").addClass("active");
  });
  //If the custom pc's link is clicked, the pc page will load
  $("#pcs").click(function(){
    $("#stuff").load("pc.html");
  });
});