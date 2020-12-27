var first= prompt("Enter First Number", first);
var second = prompt("Enter Second Number");
first = parseInt(first);
second = parseInt(second);
var substraction = first - second;
var multiplication = first * second;
var division = first / second;
var modulus = first % second;

document.write("Substraction of " + first + " and " + second + " is "+ substraction);
document.write("<br>Multiplication of " + first + " and " + second + " is "+ multiplication);
document.write("<br>Division of " + first + " and " + second + " is "+ division);
document.write("<br>Modulus of " + first + " and " + second + " is "+ modulus);
