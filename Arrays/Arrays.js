//Arrays : Collection of items under 1 name.Linear.

//Create an array
let marks = [23, 45, 67, 88, 25];
console.log(marks);

//length of array
console.log(marks.length);  //5

//type of array
console.log(typeof(marks)); //object

//Array indices
console.log(marks[3]); //88
console.log(marks[0]);  //23
console.log(marks[9]);  //undefined

//Arrays are mutable
marks[3] = 36;
console.log(marks[3]);  //36

let cities = ["Pune" , "Mumbai" , "Hydrabad" ,"Gujrat"];
//Loop on array : to print all elements of arrays
for(let i = 0; i < cities.length; i++){
    console.log("cities[",i,"] = ",cities[i]);
}

//for-of loop
for(let el of cities){
    console.log("city = ",el.toUpperCase());
}