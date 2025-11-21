// Q1. You are creating a website for yout college. Create a class User with 2 properties, name & email. It also has a method called viewData() that allows user to view website data

class User {
    constructor(name, email) {
        this.name = name;
        this.email = email;
    }

    viewData() {
        console.log("Website data");
    }
}

let Stud1 = new User("Chinmayee", "chinmayeeburte25@gmail.com")
let Teacher1 = new User("Kavita", "kavitab@gmail.com")

// Q2.Create a new class called Admin which inherits from User. Add a new method called editData to Admin the allows it to edit website data

class Admin extends User {
    constructor(name, email) {
        super(name, email)
    }
    editData() {
        DATA = "some new editated value";
    }
}

let admin1 = new Admin("admin1", "admin1@gmail.com");