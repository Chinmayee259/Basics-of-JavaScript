/*Create a function using the "function" keyword that takes a String as an argument and returns the number
of vowels in the string*/

function Vowels(string){
    let countOfVowels = 0;
    for(let char of string){
        if(char === 'A' || char === 'E' || char === 'I' || char === 'O' || char === 'U' ||char === 'a' ||char === 'e' || char === 'i' || char === 'o' || char === 'u'){
            countOfVowels += 1;
        }
    }
    return countOfVowels;
}

console.log(Vowels("India is a beautiful country"));

let arrowVowels = (string) => {
    let countOfVowels = 0;
    for(let char of string){
        if(char === 'A' || char === 'E' || char === 'I' || char === 'O' || char === 'U' ||char === 'a' ||char === 'e' || char === 'i' || char === 'o' || char === 'u'){
            countOfVowels += 1;
        }
    }
    return countOfVowels;
}

console.log(arrowVowels);
console.log(arrowVowels("India is a beautiful country"));


//For a given array of numbers, print the square of each value using the forEach loop
console.log("Square of each number in an array");
let numbers = [1,2,3,4,5];

numbers.forEach((val) =>{
    console.log(`Square of ${val} is ${val*val}`);
});

//using callBackFunction
let Square = (val) =>{
    console.log(val*val);
};
numbers.forEach(Square);
