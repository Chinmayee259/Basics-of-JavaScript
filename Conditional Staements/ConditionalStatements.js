//Conditional statement
//1) if statement
let age = 25;
if(age > 18){
    console.log("can vote.");
}

let mode = "dark";
let color;
if(mode == "dark"){
    color = "black";
}
if(mode == "light"){
    color = "white";
}
console.log("color : " , color); //color : black

//2) if-else statement
let num = 10;
if(num%2 === 0){
    console.log(num , " is even.");
}
else{
    console.log(num , " is odd.");
}

//3) else if
let marks = 70;
if(marks < 50){
    console.log("Your grade is C.");
}
else if(marks > 50){
    console.log("Your grade is A.");
}
else{
    console.log("Your grade is B.");
}

//alert
alert("Hello!!");
//alert()method displays an alert box with a message and an OK button.
//The alert box takes the focus away from the current window, and forces the user to read the message.

//prompt
let  name = prompt("Hello!!!");  //method displays a dialog box that prompts the user for input.
console.log(name); //input from user
//method returns the input value if the user clicks "OK", otherwise it returns null