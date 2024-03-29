//function hoisting 
/*myfunction();
function myfunction(){
    console.log('Hello');
}*/
    
 
//using let
/*function example(){
    if (true){
        let count = 20;
        console.log(count);
    }
    console.log(count);
} */

/*let x = 10
let y ="20"
let z = true
let empty = null
console.log(x+y)
console.log(y+x)
console.log(x+z)
console.log(x+empty)
console.log(y+z)
console.log(y+empty)*/

/*let x=5
if (x>5){
console.log("7")
}
else if(x<5){
console.log("3")
}
else{
console.log("4")
} */

let a=5;
switch (a){
    case 1:
        console.log("1")
    break;
    case 5:
        console.log("3")
    break;
    default:
        console.log("4")
}