var a = 2, b = 1;
document.write("a: "+ a);
document.write("</br>b: "+ b);
var result = --a - --b + ++b + b--;
document.write("</br>Result: "+ result);
document.write("<br>_____________________________________<br>");


document.write("<br>a: "+ a);
document.write("</br>b: "+ b);
--a;
document.write("<br>--a");
result = --a - --b + ++b + b--;
document.write("</br>Result: "+ result);
document.write("<br>_____________________________________<br>");


document.write("<br>a: "+ a);
document.write("</br>b: "+ b);
--a - --b;
document.write("<br>--a - --b");
result = --a - --b + ++b + b--;
document.write("</br>Result: "+ result);
document.write("<br>_____________________________________<br>");


document.write("<br>a: "+ a);
document.write("</br>b: "+ b);
--a - --b + ++b;
document.write("<br>--a - --b + ++b");
result = --a - --b + ++b + b--;
document.write("</br>Result: "+ result);
document.write("<br>_____________________________________<br>");

document.write("<br>a: "+ a);
document.write("</br>b: "+ b);
--a - --b + ++b + b--;
document.write("<br>--a - --b + ++b + b--");
result = --a - --b + ++b + b--;
document.write("</br>Result: "+ result);
document.write("<br>_____________________________________<br>");
