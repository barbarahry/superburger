// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(document).ready(function(){

  console.log("ANDY RULES")

$("#create-burger").on("click", function (event) {
  // Make sure to preventDefault on a submit event.
  event.preventDefault();
 
  var newBurger = {
    neworder: $("#input_burger").val().trim()//,
//    devoured: $("[name=devoured]:checked").val().trim()
 //   devoured: $("[devoured]:checked").val().trim()
  };
  console.log("\nnewBurger: " + newBurger.neworder);
  
  // Send the POST request.
  $.ajax("/",{
    // url: "/",
    type: "POST",
    data: newBurger
  }).then(
    function () {
      console.log("created new burger");
      // Reload the page to get the updated list
      location.reload();
    }
  );
});


$(".change-devoured").on("click", function(event) {
  console.log("\nchange-devoured    !!    change-devoured");
  var id = $(this).data("id");
   var newEat = 1;

   var newDevoured = {
    devoured: newEat
   };

   // Send the PUT request.
   $.ajax("/" + id, {
     type: "PUT",
     data: newDevoured
   }).then(
     function() {
       console.log("changed Devoured for", newEat);
       // Reload the page to get the updated list
       location.reload();
     }
   );
 });
/*
$("#delete-burger").on("click", function(event) {
  console.log("delete-burger");
   var id = $(this).data("id");
 
   // Send the DELETE request.   api/burgers/
   $.ajax("/" + id, {
     type: "DELETE"
   }).then(
     function() {
       console.log("deleted burger", id);
       // Reload the page to get the updated list
       location.reload();
     }
   );
 });
*/
 $(".delete-burger").on("click", function(event) {
  console.log("\n.delete-burger     !!     .delete-burger");
   var id = $(this).data("id");
 
   // Send the DELETE request.   api/burgers/
   $.ajax("/" + id, {
     type: "DELETE"
   }).then(
     function() {
       console.log("deleted burger", id);
       // Reload the page to get the updated list
       location.reload();
     }
   );
 });

})
