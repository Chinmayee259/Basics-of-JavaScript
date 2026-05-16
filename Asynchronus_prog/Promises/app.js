// Promises
// Promise is for "eventual" completion of task. It is an object in JS.
// It is a solution to callback hell
// Syntax :-
// let promise = new Promise((resolve,reject) => {...})
// resolve and reject are callbacks provided by JS

// Promise have 3 states : 1)pending state 2)fulfilled state(resolved) 3)reject state
let promise = new Promise((resolve, reject) => {
    console.log("I am a promise");
    resolve("success");
    // reject("some error..");
})

// in console
// I am a promise
// promise
// Promise {<fulfilled>: 'success'}
// [[Prototype]]: Promise
// [[PromiseState]]: "fulfilled"
// [[PromiseResult]]: "success"

// I am a promise
// app.js:12 Uncaught (in promise) some error..



// This is how API returns (reslove or reject) the promises but we have to learn how to use these promises
function getData(dataId, getNextData) {
    return new Promise((resolve, reject) => {
        setTimeout( () => {
        console.log("data",dataId);
        resolve("success")
        // reject("error")
        if(getNextData){
            getNextData();
        }
    }, 5000);
    });
}

// let result = getData(123)
// undefined
// result
// Promise {<pending>}[[Prototype]]: Promise[[PromiseState]]: "pending"[[PromiseResult]]: undefined
// app.js:30 data 123

// If we get a promise from an API .
// If our promise is fullfield => promise.then((res) => {....})
// If our promise is rejected => promise.catch((err)) => {....})

// How to  use promise
// A normal function that returns a promise
const getPromise = () => {
    return new Promise((resolve, reject) => {
        console.log("I am a promise");
        // resolve("success");
        reject("network error")
    });
};

let promise1 = getPromise();
promise1.then((res) => {
    console.log("promise fullfiled",res);
});
promise1.catch((err) => {
    console.log("rejected", err);
});

// Promise chaining
// Asynnc function
function asyncFunc() {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                console.log("some data1");
                resolve("success");
            }, 4000);
        });
}

function asyncFunc2() {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                console.log("some data2");
                resolve("success");
            }, 4000);
        });
}

console.log("fetching data1..");
let p1 = asyncFunc();
p1.then((res) => {
    console.log(res);
    console.log("fetching data2..");

    let p2 = asyncFunc2();
    p2.then((res) => {
        console.log(res);
    });
});


// A simpler function
// asyncFunc().then((res) => {
//     console.log(res);
//     console.log("fetching data2..");

//     asyncFunc2().then((res) => {
//         console.log(res);
//     });
// });