//Array Methods

//Two types of methods 1) that change the original array 2)returns a new array


let foodItems = ["Potatoes" , "Banana", "Leechi"];
console.log(foodItems); //(3) ['Potatoes', 'Banana', 'Leechi']

//push() :- Add to end of the array
foodItems.push("Chips");
console.log(foodItems);     //(4) ['Potatoes', 'Banana', 'Leechi', 'Chips']

//pop() :- Delete from the end
let deletedItem = foodItems.pop();
console.log(foodItems);     //(3) ['Potatoes', 'Banana', 'Leechi']
console.log("deletedItem = " , deletedItem);    //deletedItem =  Chips

//toString() :-  Convert array to string. Original array remains uncanged 
console.log("Array to string : " , foodItems.toString());   //Array to string :  Potatoes,Banana,Leechi


//concate :- join multiple arrays and returns the result
let Banglore = ["Virat Kholi" , "Rajat Patidar" , "Krunal Pandya"];
console.log("Banglore team \n",Banglore);      //(3) ['Virat Kholi', 'Rajat Patidar', 'Krunal Pandya']

let Mumbai = ["Rohit Sharma" , "Hardik Pandya" , "Jasprit Bumrah"];
console.log("Mumbai team \n",Mumbai);        //(3) ['Rohit Sharma', 'Hardik Pandya', 'Jasprit Bumrah']

let India = Banglore.concat(Mumbai);
console.log("India team \n",India);     //(6) ['Virat Kholi', 'Rajat Patidar', 'Krunal Pandya', 'Rohit Sharma', 'Hardik Pandya', 'Jasprit Bumrah']


//unshift() : add to start of array
Banglore.unshift("Bhuvneshwar Kumar");
console.log(Banglore);      //(4) ['Bhuvneshwar Kumar', 'Virat Kholi', 'Rajat Patidar', 'Krunal Pandya']

//shift() : delete from start and return 
let deletedPlayer = Banglore.shift();
console.log(Banglore);      //(3) ['Virat Kholi', 'Rajat Patidar', 'Krunal Pandya']
console.log("deletedPlayer = ",deletedPlayer);


//slice() : Returns a part of an array. Original array remains uncanged 
console.log(India.slice(1,5));      //(4) ['Rajat Patidar', 'Krunal Pandya', 'Rohit Sharma', 'Hardik Pandya']
console.log(India.slice());     //Returns the whole array. Hence used to make a copy of an array

//splice(start , delCount , newEle) : change original array(add, remove, replace)
let numbers = [1,2,3,4,5,6,7,8];
console.log(numbers);       //(8) [1, 2, 3, 4, 5, 6, 7, 8]
numbers.splice(2,2,101,104);
console.log(numbers);       //(8) [1, 2, 101, 104, 5, 6, 7, 8]
numbers.splice(5,0,10,44);
console.log(numbers);       //(10) [1, 2, 101, 104, 5, 10, 44, 6, 7, 8]
console.log(numbers.splice(4));     //(6) [5, 10, 44, 6, 7, 8]
 

//Some imp array methods

// *************** Map  *****************
/*Similar to for earch loop
Creates a new array with the results of some operation.
The value its callBack returns are used ro form new array

// arr.map(callBackFunction(value, index, array)

/* let newArr = arr.map((val) => {
        return val*2;
    }) */

let nums = [90, 45, 77];
nums.map((val) => {
    console.log(val);
});

//Copy of an array
let newArr = nums.map((val)=> {
    return val;
});
console.log(nums);
console.log(newArr);

//Square of elements from array
let square = nums.map((val)=> {
    return val*val;
});
console.log(nums);
console.log(square);

/*Difference between forEach and map
    forEach is used when some operation is to be performed on each element of an array
    map is used when a new array is to be form using the elements of an array
*/


/* ************* Filter method *************
    Creates a new array of elements that give true for a condition or filter
    E.g: all even elements

    let newArr = arr.filter((val) => {
        return val % 2 === 0;
        })
*/
//Even numbers
let arr = [1,2,3,4,5,6,7];
let evenArr= arr.filter((val) => {
    return val % 2 === 0;
});

console.log(evenArr);
//Multiple of three
let multiThree= arr.filter((val) => {
    return val % 3 === 0;
});

console.log(multiThree);

/* *********** Reduce method *************
    Performs some operation and reduces the array to a single value
    It returns single value
    arr.reduce((previous ,  current) => {
        }
    E.g Average of all elements of array 
*/
//Print sum of elements of array
let array1 = [1,2,3,4];
//previous = 1 , current = 2
const output = array1.reduce((previous , current) => {
    return previous + current;
});

console.log(output);    //10

//Print largest of element of array
const largest = array1.reduce((previous , current) => {
    return previous > current ? previous : current;
});
console.log(largest);   //4

