//1. ways to print in javaScript
//console.log("Hello World");
//alert("Me");
//document.write("This is document write")

//2. JavaScript console API
//console.log("Hello World", 4 + 5, "Another log");
//console.warn("This is warning");
//console.error("This is error");

//3. JavaScript variables
//What are Variables ? -- Container to store data values
var number1 = 13;
var number2 = 21;
//console.log(number1 + number2);

//4. Datatypes in Javascript
//Number
var num1 = 12;
var num2 = 12.5;

//String
var str1 = 'this is a string';
var str2 = "this is also a string";

//Objects
var marks = {
    Akram: 19,
    Asraf: 20,
    Azhar: 21.5
}
//console.log(marks);

//Booleans
//var a = true;
//var b = false;
//console.log(a, b)

var und
//console.log(und)

var n = null;
//console.log(n)

/*
At a very high level, there are two types of data types in JavaScript.
1. Primitive datatype: undefined, null, number, string, boolean, symbol 
2. Reference datatype: Arrays and Objects
*/

var arr = [1, 2.5, 4, "izaz", 12.55];
//console.log(arr);

//Operators in JavaScript
//Arithmatic operators
var x = 55;
var y = 22;
//console.log(x, y, x+y, x-y, x*y, x/y);
//console.log("the value of x + y is" , x+y);
//console.log("the value of x - y is" , x-y);
//console.log("the value of x * y is" , x*y);
//console.log("the value of x / y is" , x/y);

//Assignment operators
var z = y;
z /= 2;
//console.log(z);

//Comparison operators
var a = 10;
var b = 20;
//console.log(a==b);
//console.log(a>=b);
//console.log(a<=b);
//console.log(a<b);
//console.log(a>b);

//Logical operators
//Logical AND
//console.log(true && true)
//console.log(true && false)
//console.log(false && false)
//Logical OR
//console.log(true || true)
//console.log(true || false)
//console.log(false || true)
//console.log(false || false)
//Logical NOT
//console.log(!false)
//console.log(!true)

//Functions in JavaScript
//DRY principle : Do Not Repeat.
function avg(a, b) {
    return (a + b) / 2;
}
c1 = avg(5, 15);
c2 = avg(9, 10);
//console.log(c1);
//console.log(c2);
//console.log(c1, c2)

//Conditionals in JavaScript
//if else
/* var age = 13;
//if (age > 8){
//console.log("You are not a kid");
//}
//else{
//    console.log("You are a kid");
//}

//if else ladder
if (age > 8){
console.log("You are not a kid")
}
else if (age > 12){
    console.log("chhoti bachchi ho kya ")
}
else if (age > 15){
    console.log("bachche nahi ho")
}
else {
    console.log("bachche ho")
}
console.log("End of Ladder")
*/

//var arr = [1,52,38,41,15];
//console.log(arr);
//for ( var i=2; i<arr.length; i++ ) 
//{
//console.log( arr [i] );
//}
//arr.forEach(function(element)
//{
//    console.log(element)
//})
//const ac = 0;
//ac = ac +1;
//let j=10;
//while(j<arr.length)
//{
//    console.log(arr[j]);
//      j++;
//}
//do{
//  console.log(arr[j]);
//    j++;
//} while (j<arr.length);
/*
var arr = [1,52,38,41,15];
console.log(arr);
for ( var i=0; i<arr.length; i++ ){
if (i == 2){
    //break;
    continue; 
}
console.log( arr [i] );
}
*/
let myArr = ["fan", "lapy", 420, null, true];
//Array methods
//console.log( myArr.length);
//myArr.pop(); # to remove last element from the array.
//myArr.push("liton"); # to add new element at the end of array.
//myArr.shift(); # to remove 1st element from the array.
//myArr.unshift("liton"); # to add new element at the starting of array
//const newlen= myArr.unshift("liton");
//console.log(newlen); # to print new length of the array after unshift . 
//console.log(myArr);

// String methods in JavaScript.
let myGoodString = ("Izaz is a good boy with good habits");
//console.log(myGoodString.length); # to print length of the string
//console.log(myGoodString.indexOf("good")); # to print the index number of an element in the string
//console.log(myGoodString.lastIndexOf("good")); to print the index number of last occurance of duplicate element in the string
//console.log(myGoodString.slice(5,7));
d = myGoodString.replace("Izaz", "Liton");
//d = d.replace("good", "bad");
//console.log(d, myGoodString);

let myDate = new Date();
//console.log(myDate);
//console.log(myDate.getTime());
//console.log(myDate.getFullYear());
//console.log(myDate.getDay());
//console.log(myDate.getMinutes());
//console.log(myDate.getHours());

//DOM manipulation methods
let elem = document.getElementById("Click");
//console.log(elem);
let elemClass = document.getElementsByClassName("container");
//console.log(elemClass);
//elemClass[1].style.background= ("green");
elemClass[0].classList.add("bg-primary");
elemClass[0].classList.add("text-success");
//console.log(elem.innerHTML);
//console.log(elem.innerText);
//console.log(elemClass[0].innerHTML);
//console.log(elemClass[0].innerText);
tn = document.getElementsByTagName("div");
//console.log(tn);
//createdElement = document.createElement('p');
//createdElement.innerText= "this is a created para" 
//tn[0].appendChild(createdElement);
//createdElement2 = document.createElement('b')
//createdElement2.innerText= "this is a created bold";
//tn[0].replaceChild(createdElement2, createdElement);
//removeChild(element); ---> removes an element.
//sel = document.querySelector('.container'); # selecting using query
//console.log(sel);

//Events in JavaScript

// window.onload = function(){
//     console.log("The document was loaded");
// }
// firstContainer.addEventListener('click', function(){
//     console.log("clicked on container")
// })
// firstContainer.addEventListener('mouseover', function(){
//     console.log("mouse on container")
// })
// firstContainer.addEventListener('mouseout', function(){
//     console.log("mouse out of container")
// })
// firstContainer.addEventListener('mouseup', function(){
//     console.log("mouse up when clicked on container")
// })
// firstContainer.addEventListener('mousedown', function(){
//     console.log("mouse down when click hold on container")
// })
// let prevHTML = document.querySelectorAll('.container')[1].innerHTML;
// function clicked(){
//     document.querySelectorAll('.container')[1].innerHTML = prevHTML ;
//     console.log("The button was clicked");
// }
// firstContainer.addEventListener('mousedown', function(){
//     document.querySelectorAll('.container')[1].innerHTML = "<b> We have clicked </b>"
//     console.log("clicked on container")
// })

//Arrow function
// summ = (a,b)=>{
//     return a+b;
// }

loglelo = ()=>{
    document.querySelectorAll('.container')[1].innerHTML = "<b> set interval fired </b>"
    console.log("i am your log");
}
//SetTimeout and setinterval
//setTimeout(loglelo,5000);
//clr = setTimeout(loglelo,5000);
//setInterval(loglelo,2000)
//clr = setInterval(loglelo,5000);
//use clearInterval(clr)/Timeout(clr) to cancel setInterval/Timeout.

//JavaScript localStorage
//localStorage.setItem('name', 'Izaz')
//localStorage.getItem('name')

//Json
// obj = {name: "Izaz", length: 1 , a: {this: "that"}}
// jso = JSON.stringify(obj);
// console.log(jso);
// parsed = JSON.parse(`{"name":"Izaz","length":1,"a":{"this":"that"}}`)
// console.log(parsed);

//Template literals - Backticks
/*a = 35 ;
console.log(`This is my ${a}`);*/


xyz = 10
console.log(xyz)












































































