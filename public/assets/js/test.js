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