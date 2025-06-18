/*For a given array with marks of students -> [85, 97, 44, 37, 76, 60]
Find the average marks of the entire class */

let marks = [85, 97, 44, 37, 76, 60];

let sum = 0 , avg;
for(let el of marks){
    sum += el;
}
avg = sum/marks.length;
console.log("Average marks of the entire class is : " , avg);


/*For a given array with prices of 5 items -> [250,645,300,900,50].
All items have an offer of 10% OFF on them. Change the array to store final price after applying offer*/

let price = [250,645,300,900,50];
let idx = 0;
for(let el of price){
    console.log(`Price at index ${idx} = ${el}`);
    let offer = el/10;
    price[idx] -= offer;
    console.log(`Price after offer is ${price[idx]}`);
    idx++;
    console.log(" ");
}
   

/*Create an array to store companies -> "Bloomberg" , "Microsoft" , "Uber" , "Google" , "IBM" , 'Netflix
a) Remove the first company from the array
b) Remove Uber & Add Ola in its place
c) Add Amazon at the end    */

let companies = ["Bloomberg" , "Microsoft" , "Uber" , "Google" , "IBM" , "Netflix"];
console.log(companies);      //['Bloomberg', 'Microsoft', 'Uber', 'Google', 'IBM', 'Netflix']

let removedCompany = companies.shift();
console.log(companies);     //['Microsoft', 'Uber', 'Google', 'IBM', 'Netflix']

companies.splice(1,1,"Ola")
console.log(companies);     //(5) ['Microsoft', 'Ola', 'Google', 'IBM', 'Netflix']

companies.push("Amazon");
console.log(companies);     //(6) ['Microsoft', 'Ola', 'Google', 'IBM', 'Netflix', 'Amazon']


/*We are given array of marks of students. Filter out of the marks of students that scored 90+ */

let scores = [87,93,45,67,99,96,56]; 
let Toppers = scores.filter((val) => {
        return val > 90; 
});
console.log(Toppers);

/* Take a number as an input from user. Create an array of numbers from 1 to n.
    Use the reduce method to calculate sum of all numbers in an array.
    Use the reduce method  to calculate product of all numbers in the array. */
let n = prompt("Enter a number");   //input from a user     // 4
let i = 1;
let nums = [];  //an empty array
while(i <= n){
    nums[i-1] = i;
    i++
}
console.log(nums);  //(4) [1, 2, 3, 4]

//reduce method to calculate sum of all numbers in an array.
let Sum = nums.reduce((previous , current) => {
    return previous + current;
});
console.log(Sum);   //10

//reduce method  to calculate product of all numbers in the array.
let Product = nums.reduce((previous , current) => {
    return previous * current;
});
console.log(Product);   //24

//reduce method  to calculate factorial of a number (less than 10) given by user.
let Factorial = nums.reduce((previous , current) => {
    return previous * current;
});
console.log("Factorial of", n ,": " , Factorial);   //Factorial of 4 :  24

