// Asynnc-Await
// async function always returns a promise.
// async function myFunc(){....}
// await pauses the execution of its surrounding asynnc function until the promise is settled

function api() {
    return new Promise((resolve, reject) => {

        setTimeout(() => {
            console.log("weather data");
            resolve("success");
        }, 2000);

    });
}

async function getWeatherData() {
    await api(); //1
    await api(); //2
}

getWeatherData();

function hello() {
    console.log("hello");
}

function getData(dataId) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("data", dataId);
            resolve("success");
        }, 2000);
    });
}

async function getAllData() {
    console.log("getting data1.....");
    await getData(1);
    console.log("getting data1.....");
    await getData(2);
    console.log("getting data1.....");
    await getData(3);
}

getAllData();


// IIFE :Immediately Invoked Function Expression
// IIFE is a function that is called immediately as soon as it is defined.
// (func)();
// Here (func) is a function and () is to execute it 

// (function () {
//     // ..
// })();

// (() => {
//     // ..
// })();

// (async () => {
//     // ..
// })();

// (async function () {
//     console.log("getting data1.....");
//     await getData(1);
//     console.log("getting data1.....");
//     await getData(2);
//     console.log("getting data1.....");
//     await getData(3);
// })();

// No need to call getAllData();