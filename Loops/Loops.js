//for loop
for(let count = 1; count <= 5; count++){
    console.log("Learning Javascript");
}
console.log("Loop has ended.");

//Calculate sum of 1 to 5
let sum = 0;
for(let i = 1; i <= 5; i++){
    sum = sum + i;
}
console.log("Sum = " , sum);    //15
console.log("Loop has ended.");

//Print 1 to 5 using for loop
for(let i = 1; i <= 5; i++){
    console.log("i = " , i);
}
//console.log(i); //Error //due to let keyword
console.log("Loop has ended.");

// for(var i = 1; i <= 5; i++){
//     console.log("i = " , i);
// }
// console.log(i); //Output 6 //due to var keyword
// console.log("Loop has ended.");



//  While loop
/*  Syntax
while(condition){
    //do some work
}   */

//Print 1 to 5 using while loop
let i = 0;
while(i <= 5){
    console.log("i = " , i);
    i++;
}
console.log("Loop has ended.");


//  do-while loop :-  at least 1 time it will run
/*  Syntax
do{
    //do some work
} while(condition);
*/

i = 20;
do{
    console.log("i = " , i); //20
    i++;
}while(i <= 5)
console.log("Loop has ended.");

//Print 1 to 5 Using do-while loop
i = 0;
while(i <= 5){
    console.log("i = " , i);
    i++;
}
console.log("Loop has ended.");


//for-of loop :- used for strings and array operations not for objects
/* Syntax
for(let char of String){
    //do some work
}   */

//Print each character of a string
let str = "JavaScript";
for(let char of str){
    console.log(char);
}

//Print length of given string
let size = 0;
for(let val of str){
    size++;
}
console.log("Length of the string is : " , size);  //10
console.log("Loop has ended.");

//for-in loop   :-  used for objects and array operations
/*  Syntax
for(let key in Object){
    //do some work
}   */

//Print key and value of an object
let Student = {
    name : "Mani",
    age : 20,
    cgpa : 8.2,
    isPass : true,
};

for(let key in Student){
    console.log("key = " , key , " " , "value = " , Student[key]);
}
console.log("Loop has ended.");








