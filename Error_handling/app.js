// try-catch
// try {
//      Normal code
// } catch(err) { //err is error object
//      Handling error
// }

// let a = 5;
// let b = 10;
// console.log("a = ",a)
// console.log("b = ",b)
// console.log("a+b = ",a+b)

// console.log("a+b = ",a+c) //error 
// //AND THEREFORE NEXT LINES DID NOT GET EXECUTED

// console.log("a+b = ",a+b)
// console.log("a+b = ",a+b)
// console.log("a+b = ",a+b)
// console.log("a+b = ",a+b)
// console.log("a+b = ",a+b)

let a = 5;
let b = 10;
console.log("a = ",a)
console.log("b = ",b)
console.log("a+b = ",a+b)
try{
    console.log("a+b = ",a+c); //error 
} catch(err){
    console.log(err);
}

console.log("a+b = ",a+b)
console.log("a+b = ",a+b)
console.log("a+b = ",a+b)
console.log("a+b = ",a+b)
console.log("a+b = ",a+b)