//Inline event handling (i.e Event handling in HTML) is not a good practice
//Priority :- Event Handling in JavaScript > Inline event handling
/*Event Handling in JavaScript
    SYNTAX :-
    node.event = (e) => {
        //handle here (e.target, e.type, e.clientX, e.clientY)
    }

Here e is an event object
*/

//Overwriting of events
let btn = document.querySelector("#btn");

btn.onclick = () => {
    console.log("Handler1");
}

btn.onclick = () => {
    console.log("Handler2");
}


//Accessing button with id btn1
let btn1 = document.querySelector("#btn1");
btn1.onclick = (evt) => {
    console.log("evt =", evt);
    console.log("evt.type =", evt.type);
    console.log("evt.clientX =", evt.clientX);
    console.log("evt.clientY =", evt.clientY);
    console.log("btn1 was clicked");
    let a = 25;
    a++;
    console.log("a =", a);
}


let div = document.querySelector("div");
div.onmouseover = (evt) => {
    console.log(evt);
    console.log(evt.type);
    console.log(evt.clientX);
    console.log(evt.clientY);
    console.log("You are inside div");

};

