// Callback :- A callback is function passed as an argument to another function

// Callback in synchronous programming
function sum(a, b) {
    console.log(a + b);
}

function calculator(a, b, sumCallback) {
    sumCallback(a, b);
}

calculator(1, 2, sum);  //Do not pass with parenthesis sum()
// or we can pass an arrow function as
// calculator(1, 2, (a, b) => {
//     console.log(a + b);
// });


// Asynchronous callback
const hello = () => {
    console.log("hello");
}

setTimeout(hello, 2000); // Here hello is callback in setTimeout() method


// Callback hell :- Nested callbacks stacked below one another forming a pyramid structure.(Pyramid of doom)
// This style of programming becomes difficult to understand & manage.
// function getData(dataId, getNextData) {
//     setTimeout( () => {
//         console.log("data",dataId);
//         if(getNextData){
//             getNextData();
//         }
//     }, 2000);
// }

// getData(1);
// getData(2);
// getData(3);

// getData(1, () => {
//     console.log("Getting data....");
//     getData(2, () => {                  // This arrow function dosen't get executed immediately
//         console.log("Getting data....");
//         getData(3)
//     });
// });
// But such callback is bad and difficult to understand and manage
// This is callback hell and it is a problem.
// To solve this we have Promises.


// Promise Chaning

function getData(dataId, getNextData) {
    return new Promise((resolve, reject) => {

        setTimeout(() => {
            console.log("data", dataId);

            resolve("success");

            if (getNextData) {
                getNextData();
            }

        }, 3000);

    });
}

// Promise Chain
let p1 = getData(1);
p1.then((res) => {
    console.log(res);
    getData(2).then((res) => {
        console.log(res);
    })

});

// getData(1)
// .then((res) => {
//     return getData(2);
// })
// .then((res) => {
//     return getData(3);
// })
// .then((res) => {
//     console.log(res);
// });



