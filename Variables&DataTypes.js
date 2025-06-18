//  ************Variables and Data Types****************

let name = "Tony Starck";   //String
console.log(name);  //Tony Stark

let age = 24;   //numbers
console.log(age);   
//let age = 34 //error
age = 30; //can update
console.log(age);


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
    Name : 'Atul',
}
console.log(Student["age"]);    //30
console.log(Student["Name"]);   //Atul
Student["age"] = Student["age"]+1;  
console.log(Student["age"]);    //31