/* Create a new button element. Give it a text "click me",background color of red & text color of white
Insert the button as first element inside the body tag. */
let newBtn = document.createElement("button");
newBtn.innerText = "click me";
newBtn.style.backgroundColor = "red";
newBtn.style.color = "white";
document.querySelector("body").prepend(newBtn);


/*Create a <p> tag in html, give it a class & some styling.
  Now create a new class in CSS and try to append this class to <p> element
  Did you notice, how you overwrite the class name when you add a new
  Solve this problem using classList*/
let parah = document.querySelector("p");
console.log(parah.classList);
/*
DOMTokenList ['content', value: 'content']
0:"content"
length: 1
value: "content"
*/
//to add new class use classList.add
parah.classList.add("newClass");
/*
DOMTokenList ['content', value: 'content']
0: "content"
1: "newClass"
length: 2
value: "content newClass"
*/
parah.classList.remove("newClass");
/*
DOMTokenList ['content', value: 'content']
0: "content"
length: 1
value: "content"
 */