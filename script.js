var display = document.getElementById("display");
var numbers = document.getElementsByClassName("number");
var operators = document.getElementsByClassName("operator");
var clearBtn = document.getElementById("clear");
var equalsBtn = document.getElementById("equals");

// Add event listeners to the number buttons
for (var i = 0; i < numbers.length; i++) {
  numbers[i].addEventListener("click", function(event) {
    var value = event.target.value;
    display.value += value;
  });
}

// Add event listeners to the operator buttons
for (var i = 0; i < operators.length; i++) {
  operators[i].addEventListener("click", function(event) {
    var value = event.target.value;
    display.value += value;
  });
}

// Add event listener to the clear button
clearBtn.addEventListener("click", function() {
  display.value = "";
});

// Add event listener to the equals button
equalsBtn.addEventListener("click", function() {
  var result = eval(display.value);
  display.value = result;
});
