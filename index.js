function countdown(callback) {
  setTimeout(function() {
    callback();
  }, 2000);
}

function createMultiplier(multiplierValue) {
  return function(value) {
    return multiplierValue * value;
  }
}
var doubler = createMultiplier(2);
var tripler = createMultiplier(3);

/*
Create a createMultiplier() function. Make sure it returns the right thing!
Create a doubler variable that uses the createMultiplier() function to create a function that doubles any given number.
Create a tripler variable that does the same thing as the doubler, but it triples the value instead.
*/

function multiplier(a, b) {
  return a * b;
}


var doublerWithBind = multiplier.bind(null, 2);
var triplerWithBind = multiplier.bind(null, 3);
