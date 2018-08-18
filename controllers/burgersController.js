var express = require("express");

var router = express.Router();

// Import the model (burger.js) to use its database functions.
var burger = require("../models/burger.js");

// Create all our routes and set up logic within those routes where required.
router.get("/", function(req, res) {
  //console.log("\nGETing: :");
  burger.all(function(data) {
    var hbsObject = {
      burgers: data
    };
    //console.log("GET METHOD HIT")
    console.log(hbsObject);
    res.render("index", hbsObject);
  });
});

router.post("/", function(req, res) {
//  console.log("\nPOSTing: :");
  //console.log("\nreq.body.neworder: " + req.body.neworder);
  burger.create([
    //creating here new entry in db. Refering to columns  as named in db.
    "burger_name", "devoured"
  ], [
    
    //requesting here new burger (req.body.neworder) that has been entered using ajax in burgers.js:
    //var newBurger = {
    //neworder: $("#input_burger").val().trim()
     // };
    req.body.neworder, 0
  ], function(result) {
    // Send back the ID of the new quote
    res.json({ id: result.insertId });
  });
});


 router.put("/:id", function(req, res) {
   var condition = "id = " + req.params.id;
   console.log("\nrouter.put");
   console.log("router.put condition", condition);
   console.log("router.put req.body.devoured", req.body.devoured);

   burger.update({
//     devoured: req.body.devoured
     devoured: 1
   }, condition, function(result) {
     if (result.changedRows == 0) {
       // If no rows were changed, then the ID must not exist, so 404
       return res.status(404).end();
     } else {
       res.status(200).end();
     }
   });
 });

 //router.delete("/api/burgers/:id", function(req, res) {
 router.delete("/:id", function(req, res) {
  console.log("\nrouter.delete  !!");
   var condition = "id = " + req.params.id;
   console.log("\nrouter.delete condition :: " + condition);

   burger.delete(condition, function(result) {
     if (result.affectedRows == 0) {
       // If no rows were changed, then the ID must not exist, so 404
       return res.status(404).end();
     } else {
       res.status(200).end();
     }
   });
 });

// Export routes for server.js to use.
module.exports = router;
