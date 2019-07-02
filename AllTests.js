// Test cases
var assert = require("assert");
var orm = require("config/orm.js");

/** Runs test cases for all cases */
function allTests() {
  test1CreateBurger();
  test2CreateBurger();
}

function test1CreateBurger() {
  var testCase = [{burger_name: 'PeaBurger', devoured: "false" }, true];  
  var table = 'burgers';
  var cols = 'name, color';
  var vals = testCase[0];

  orm.create(table, cols, vals, function(result) {
    assert(result === testCase[1], "case1 not passed");
  })
}

function test1UpdateBurger() {
  var testCase = [{burger_name: "cheeseburger"}, true];  
  var table = 'burgers';
  var vals = testCase[0];

  orm.updateOne(table, vals, function(result) {
    assert(result === testCase[1], "case1 not passed");
  })
}



// Run
test1UpdateBurger();