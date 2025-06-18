/*1) Create a H2 heading element with text - "Hello JavaScript". Append "from Apna College students" to 
this text using JS*/
/* STEPS
    1)first access the element
    2)Using a JS property change the text
*/

let h2 = document.querySelector("h2");  //Accessing using tag
console.dir(h2.innerText);  //Hello JavaScript
h2.innerText =  h2.innerText + "from Apna College students";    //JS property :- concate
console.dir(h2.innerText);  //Hello JavaScriptfrom Apna College students


/* 2) Create 3 divs with common class name - "box" . Access them & add some unique text to each of them*/
let divs = document.querySelectorAll(".box");
console.dir(divs);
for(let i = 0; i< divs.length; i++){    //can use for of loop and string interpolation
    divs[i].innerText = divs[i].innerText + (i+1);
}
console.dir(divs);