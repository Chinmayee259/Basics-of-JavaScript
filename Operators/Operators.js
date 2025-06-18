//Comment , Conditional Statements and Operators

console.log("Hello code");
//This is a comment
/* Multi
Line 
code
*/

//Arithmetic operators
let a = 3;
let b = 4;
console.log("a + b = ", a+b);
console.log("a - b = ", a-b);
console.log("a * b = ", a*b);
console.log("a / b = ", a/b);
console.log("a mod b = ", a%b);
console.log("a ** b = " , a**b);

//Unary operators
console.log("a = " , a , "b = " , b);
console.log("++a" , ++a);
console.log("a++" , a++);
console.log("a" , a);
console.log("--a" , --a);
console.log("a--" , a--);
console.log("a" , a);

//Assignment operator
let c = 7; //equal to

a += 1; // a = a + 1
console.log("a = " , a); //4
a -= 1 // a = a - 1
console.log("a = " , a); //3
a *= 2; // a = a * 2
console.log("a = " , a); // 6
a /= 2; // a = a / 2
console.log("a = ", a); //3
a **= 2; // a = a ** 2
console.log("a = ", a); //9
a %= 2; // a = a % 2
console.log("a = " , a); //1


//Comparision operators
let d = "3";
console.log("a == b " , a==b); //false
console.log("5 == 5 "); // true
console.log("a != b ", a!=b) //true
console.log("a == b" , a==b) //true
console.log("a === d " , a === d); //false  // === equal to and type
console.log(" a !=== b " , a !== b) // true // !=== not equal and type
console.log(" a > b " , a > b); // false 
console.log(" a < b " , a < b); // true


//Logical operator
let cond1 = a > b;
let cond2 = a === b;
console.log("cond1 && cond2 ", cond1 && cond2); //false
console.log("cond1 || cond2 " , cond1 || cond2); //false
console.log("!(a < b)", !(a > b)); //true

//Ternary operator
//Syntax = condition ? statement if true : statement if false
let result = age >= 18 ? "adult" : "Not an adult.";
console.log(result);









