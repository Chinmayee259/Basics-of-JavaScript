//  ************  Variables and Data Types  ****************

//Rules for variables
//1. Variable names are case sensitive; "a" & "A" is different 
//2. Only letters, digits, underscore, and $ is allowed . Not even space
//3. Only a letter, underscore or $ should be the 1st character
//4. Reserve words cannot be variable names

//Generally we use camel case for writing the variable name such as fullName, isFollow

// Defining a variable with let keyword
//1. var: Variable can be re-declared & updated.A global scope variable.
//2. let: Variable cannot be re-decalres but can be updated. A block scope variable.
//3. const: Variable cannot be re-declared or updated.A block scope variable.

let name = "Tony Starck";   //Data Type: String
console.log(name);  //Tony Stark

let age = 24;   //Data Type: numbers
console.log(age);   
//let age = 34 //error
age = 30; //can update
console.log(age);     //30

//Define a variable with const keyword
const totalPrice = 178.00;
//totalPrice = 30;// error
console.log(totalPrice);

//Block scope variable
{
    let p = 2;
    console.log(p);
}
//console.log(p); //Error

//Object 
const Student = { 
    age : 30,
    Name : 'Sanjay',
}
console.log(Student["age"]);    //30
console.log(Student["Name"]);   //Sanjay
Student["age"] = Student["age"]+1;  
console.log(Student["age"]);    //31

//Different data types
//Primary data types:  Number, Boolean, String, BigInt, Undefined, Null, Symbol
//typeOf variable
