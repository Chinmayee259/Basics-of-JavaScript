// Prototypes in JS
// A JavaScript object is an entity having state and behavior(properties and method).
// A JS objects have a special property called prototype.We can set prototype using __proto__
// If object & prototype have same method, object's method will be used.

//Direct way of creating an object
const student = {
    fullName : "Chinmayee Burte.", //state or property
    marks: 94.4, //state or property
    printMarks: function() {  //method or behavior
        console.log("marks = ", this.marks);
    }
}

//We can make our own prototype
const employee = { 
    calcTax() {
        console.log("tax rate is 10%");
    }

    // calcTax: function() {
    //     console.log("tax rate is 10%";)
    // }
}

const karanArjun1 = {
        salary: 50000,
        calcTax() {
            console.log("tax rate is 20%"); // If object & prototype have same method, object's method will be used.
        }
};

const karanArjun2 = {
        salary: 50000,
};

const karanArjun3 = {
        salary: 50000,
};

const karanArjun4 = {
        salary: 50000,
};

karanArjun1.__proto__ = employee; //employee is prototype
karanArjun2.__proto__ = employee;
karanArjun3.__proto__ = employee;
karanArjun4.__proto__ = employee;


//Classes in JS
// Class is a program-code template for creating objects.
// Those objects will have some state/9variables) & some behaviour(functions) inside it 

// class MyClass {
//     constructor() {...}
//     myMethod() {...}
// }

// let mtObj = new MyClass();

//Constructor
//Constructor() method is automatically invokes by new , initializes Object

class ToyotaCar {
    constructor(brand, mileage) {
        console.log("Creating an object");
        this.brand = brand;
        this.mileage = mileage;
    }

    start() {
        console.log("start");
    }

    stop() {
        console.log("stop");
    }

    // setBrand(brand) {
    //     this.brand = brand;
    // }
}

let fortuner = new ToyotaCar("fortuner",10);
console.log("fortuner", fortuner);

let lexus = new ToyotaCar();


//Inheritance in JS
// Inheritance is passing down properties and methods from parent class to child class

// class Parent {

// }

// class Child extends Parent {

// }

// If Child & Parent have same method, child's method will be used.[Method Overriding]

class Parent {
    hello() {
        console.log("Hello");
    }
}

class Child extends Parent {
    
}

let Obj = new Child();


class Person {

    constructor(name) {
        console.log("Enter child constructor");
        this.species = "Homo sapiens";
        this.name = name;
    }
    
    eat() {
        console.log("eat");
    }

    sleep() {
        console.log("sleep");
    }

    work() {
        console.log("Do nothing")
    }
}

class Engineer extends Person {
    work() {
        console.log("Solve problem"); //METHOD OVERRIDING 
    }
}

let Chinmayee = new Engineer();


// super keyword
// Used to call the constructor of its parent class to access the parent's properties and methods.
// super(args) -> calls parent's constructor
// super.parentMethod(args)

class Doctor extends Person {
    constructor(specialization,name) {
        console.log("Enter child constructor");
        super(name); // to invoke parent class constructor
        this.specialization = specialization;
        console.log("Exit child constructor");
    }
    work() {
        super.eat() //parent class eat will invoked before entering child class work() 
        console.log("Treat patients");  //METHOD OVERRIDING 
    }
}

let Aakash = new Doctor("Cardiologist","Aakash Mehta");