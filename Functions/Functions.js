//Function :- Block of code that a specific task,can be invoked whenever needed
/* Function definition:-
function functionName(){
    //do some work
}

function functionName(para1,para2,...){
    //do some work
}

function call :-
functionName();
*/

function myFunction(){
    console.log("Learning JavaScript");
}
myFunction();   
myFunction();
//2 Learning JavaScript

function Message(msg){
    console.log(msg);
}
Message("I love JS");

//Sum of 2 numbers
function sum(a,b){
    console.log(a+b);
}
sum(1,4);   //5
sum(5,7);   //12

//Multiplication of 2 numbers
function mult(a,b){
    //Local variable - block scope
    let m = a*b;
    return m;
}
console.log(mult(3,4));  //12
let val = (mult(2,7));  
console.log("val = ",val);   //14



//Arrow Functions :- It is a function variable that stores value as well as function
/* Syntax
const or let functionName = (para1, para2,..) => {
    //do some work
};
*/

const arrowSum = (a , b) =>{
    console.log(a+b);
};

let arrowMult = (a, b) =>{
    return(a*b);
};
console.log(arrowMult);     /*(a, b) =>{
                                    return(a*b);
                            }*/

arrowMult = 5;
console.log(arrowMult);     //5

const printHello = () => console.log("hello");
printHello();   //hello
console.log(printHello);        //() => console.log("hello")


//for-each method :- It is a higher order method or function as it uses function as a parameter or return a function
/* Syntax
    arr.forEach(val) => {
        console.log(val);
}) 
*/
//In JS function can be passed as parameter and also can be return 
// arr.forEach(callBackFunction)
/*callBackFunction is a function to execute for-each element in the array. 
It is a function passed as an argument to another function */

let arr = [1,2,3,4,5,6];

arr.forEach(function printVal(val){
    console.log(val);
});

console.log("Using arrowFunction")
//arrowFnctiom
arr.forEach((val) => {
    console.log(val);
});

let city = ["Pune","Solapur","Mumbai"];
city.forEach((val)=>{
    console.log(val.toUpperCase());
});

//there are 3 types of arguments that can be passed in forEach method : value ,index, array . Canot use for strings
city.forEach((val, idx, city) => {
    console.log(val.toUpperCase(), idx, arr);
});


