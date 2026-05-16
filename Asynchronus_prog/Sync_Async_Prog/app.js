// Sync in JS
// Synchronus :- means the code runs in a particular sequence of instructions given in the program. Each instruction waits for the previous instruction to complete its execution.

// E.g of Synchronus programming
console.log("Synchronus programming");
console.log("One");
console.log("Two");
console.log("Three");
console.log(" ");

// Asynchronus Programming :- Due to synchronous programming, sometimes imp instructions get blocked due to some previous instructions, which causes a delay in the UI. Asynchronus code execution allows to execute next nstructions immediately and doesn't block the flow.
console.log("Asynchronus Programming");

function hello() {
    console.log("hello");
}
setTimeout(hello, 4000) //timeout

console.log("five");
console.log("six");

// Arrow function
setTimeout(() => {
    console.log("hello");
}, 6000);

console.log("seven");
console.log("eight");


