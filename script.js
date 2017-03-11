$(document).ready(function(){

$("#starter-btn").click(function(){
     $("#main").toggle();
     $("#desserts").toggle();
     $("#starters-cont").toggle();
	});


$("#main-btn").click(function(){
     $("#starters").toggle();
     $("#desserts").toggle();
     $("#main-cont").toggle();
  });


$("#desserts-btn").click(function(){
     $("#starters").toggle();
     $("#main").toggle();
     $("#desserts-cont").toggle();
  });

});