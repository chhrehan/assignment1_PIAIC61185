var celcusTemprature = 30;
var fahrenheitTemprature;
fahrenheitTemprature=(celcusTemprature*(9/5))+32;
document.write(celcusTemprature + "&deg;C is "+ fahrenheitTemprature +"&deg;F <br>");
fahrenheitTemprature = 80;
celcusTemprature = (fahrenheitTemprature - 32) *(5/9);
document.write(fahrenheitTemprature +"&deg;F is " + celcusTemprature + "&deg;C");