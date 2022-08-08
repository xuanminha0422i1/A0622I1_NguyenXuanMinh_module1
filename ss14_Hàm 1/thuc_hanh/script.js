function square(number) {
 var result = number * number;
 return result;
}
// var square0f2 = square(2);
// document.write("square of 2 is: " + square0f2 + "<br/>");
//
// var square0f5 = square(5);
// document.write("square of 5 is: " + square0f5);
function calculate() {
 var input = document.getElementById("input").value;
 var result = square(input);
 document.getElementById("result").innerHTML = result;
}