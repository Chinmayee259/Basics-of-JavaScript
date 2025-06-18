/*
    The 3 Musketeers of web development (e.g : Home)

    1) HTML = Hyper Text Markup Language (structure of website) (e.g : Structure of home using bricks)
    2) CSS = Cascading Style Sheets (Style of website) (e.g : Ghar ka colour , Furniture colour etc.)
    3) JS = JavaScript (Logic of website / Functionality)  (e.g : functionality of all the appliances of home)

*/

/* Basic starter code
    <style> tag connects HTML with CSS 
    <script> tag connects HTML with JS 
    
    This practice makes the code
    1) Readable
    2) Modular
    3) Helps with browser caching : Browser cache = a temporary storage area in your browser that saves copies of
       web resources like HTML pages, images, and scripts to speed up page loading when you revisit a website
    
    We can link multiple such css and js file with html */


/*  ****************    Window object   ***************
    The window object in JavaScript is the global object for the browser environment. 
    It represents the browser window or tab that contains a web page. 
    Almost everything in browser-side JavaScript is a property or method of the window object.

    Key Points about the window Object:
    1) Global Scope
        All global variables and functions are actually properties and methods of the window object.
        e.g. var name = "Chinmayee";
             console.log(window.name); // Chinmayee

    2) No Need to Write window. Explicitly
       You can call methods like alert(), setTimeout() directly, 
       but they're actually window.alert(), window.setTimeout().
       e.g  alert("Hello!"); // same as window.alert("Hello!");

    3) Represents Browser Window
       It gives access to the browser window and lets you manipulate things like:
       Size and position (window.innerWidth, window.scrollTo())
       Popups (window.open())

    4) Has Useful Sub-Objects
       i) window.document – the DOM (HTML content)
       ii) window.localStorage – for storing data in the browser
       iii) window.location – current URL details
       iv) window.history – browser history navigation
       v) window.navigator – info about the browser/device
        */

// Alert box
window.alert("Welcome!");

// Current window width and height
console.log(window.innerWidth, window.innerHeight);

// Redirect to another page
//window.location.href = "https://www.google.com";

// Set a timeout
window.setTimeout(() => {
    alert("5 seconds passed!");
}, 5000);


//console.log , console.dir

/*  ****************  DOM : Document Oject Model     *********************
The DOM (Document Object Model) is a programming interface that lets JavaScript interact with HTML and 
CSS to create dynamic web pages.
The DOM is like a tree structure of your webpage that JavaScript can see, change, add, or delete.

Example:

If your HTML is:
<!DOCTYPE html>
<html>
  <head><title>My Page</title></head>
  <body>
    <h1>Hello, Chinmayee!</h1>
    <p>This is a paragraph.</p>
  </body>
</html>

The DOM will look like this:
Document
 └── html
     ├── head
     │   └── title
     └── body
         ├── h1
         └── p


 What You Can Do with the DOM in JavaScript:
| Task                  | Example                                         | Explanation                       |
| --------------------- | ----------------------------------------------- | --------------------------------- |
| **Access elements**   | `document.getElementById("title")`              | Find elements by ID               |
| **Change content**    | `element.textContent = "New Text"`              | Change what's written on the page |
| **Change styles**     | `element.style.color = "red"`                   | Modify CSS                        |
| **Add elements**      | `document.createElement("div")`                 | Dynamically create new tags       |
| **Remove elements**   | `element.remove()`                              | Delete something                  |
| **Listen for events** | `button.addEventListener("click", doSomething)` | React to user actions             |


We can access all HTML code in JS with document object 
To make dynamic changes at runtime
*/

// console.dir(document.body);
// console.log(document.body);
// document.body.childNodes[3].innerText = "abcd";

/*    *****************     DOM Manipulation    *******************
DOM Manipulation means using JavaScript to change, add, remove, or update the content, structure, 
or style of a web page after it has loaded.
=> Why Manipulate the DOM?
    So your webpage can:
    1) Respond to user actions (like clicks or typing)
    2) Update content without reloading
    3) Create interactive experiences (games, apps, dynamic content)
*/

//1) With ID
let Button = document.getElementById("button");  // Selects the HTML element that has id="button".Stores that element in a variable named Button.
console.log(Button);    //button#button     // Prints the full HTML element to the browser console. //It's a <button> element With ID button

/*2) With class name
Returns dir : HTML Collection  and log : Array*/
let heads = document.getElementsByClassName("class1");  //Selects all elements with class "class1". if the DOM changes (like new elements added), it updates automatically.
console.dir(heads);     //HTMLCollection(3)     //Prints the object-like structure.Shows properties and methods (like .length, .item()).Useful for developers to explore deeply.
console.log(heads);     //HTMLCollection(3) [h1.class1, h1.class1, h4.class1]   //Prints the visual representation.
//Even though it looks like an array, HTMLCollection is not a real array, so methods like .forEach() won't work directly.But can loop through head


/*3) With the tag name*/
let  parahs = document.getElementsByTagName("p");   //Selects all <p> elements on the page.Returns an HTMLCollection.Automatically updates if new <p> tags are added to the DOM later.
console.dir(parahs);    //HTMLCollection(2)     //Shows the object with its properties and methods.Helps you see its structure like: .length , .item(index) , indexed elements: parahs[0], parahs[1], etc.
console.log(parahs);    //HTMLCollection(2) [p, p]  //Shows the actual matched elements:

/*4) Query Selector 
        document.querySelector("myID/myClass/tag")
    Returns first element
    
        document.querySelectorAll("myID/myClass/tag")
    Returns a NodeList . You can loop using .forEach() directly (unlike HTMLCollection).

| Selector                     | What It Returns          | Usage      |
| ---------------------------- | ------------------------ | ---------- |
| `querySelector("#id")`       | First element with ID    | `#myID`    |
| `querySelector(".class")`    | First element with class | `.myClass` |
| `querySelector("p")`         | First `<p>` element      | `"tag"`    |
| `querySelectorAll("p")`      | All `<p>` elements       | NodeList   |
| `querySelectorAll(".class")` | All elements with class  | NodeList   |

*/
let elements = document.querySelector("p");     //First <p> element
console.dir(elements);  //p     

let allElements = document.querySelectorAll("p");   //All <p> elements
console.dir(allElements);   //NodeList(2)      

let idElements = document.querySelector("#button");
console.dir(idElements);    //button#button
//Cannot use document.querySelectorAll("id");



/* ******** Manipulate elements of HTML ******** */
/*1) tagName : The .tagName property in JavaScript returns the tag name (in UPPERCASE) of an HTML element.
    UseCase Example:
    let elements = document.querySelectorAll("*");

    elements.forEach((el) => {
    if (el.tagName === "P") {
        el.style.color = "blue";
    }
    });
*/

console.log(Button.tagName);    //BUTTON
console.log(heads.tagName);     //undefined
console.log(elements.tagName);    //P

/*2) innerText
     innerText is a property used to get or set the visible text content of an HTML element, 
     exactly as it appears to the user on the page. 
     element.innerText      // Get text
     element.innerText = "New Text";  // Set text
*/

let div = document.querySelector("div");
console.dir(div.innerText);
// div.innerText = "abcd"; 
/*OUTPUT
FRUITS
Mango
Apple
Banana */

/*3) innerHTML
     innerHTML is a property used to get or set the HTML content (including tags) inside an element.
     element.innerHTML           // Get current HTML content
     element.innerHTML = "<b>New HTML</b>";  // Set new HTML content
 */
console.dir(div.innerHTML);
/*OUTPUT
<h3>FRUITS</h3>
        <ul>
            <li>Mango</li>
            <li>Apple</li>
            <li>Banana</li>
        </ul> */
// div.innerHTML = "<div><b>inner div</b></div>"

/* 4)textContent
    textContent is a property used to get or set the raw text inside an HTML element, 
    including hidden text. It ignores any HTML tags. 
    element.textContent           // get the text
    element.textContent = "New text";  // set the text
*/
//h2 is hidden
let headingtwo = document.querySelector("h2");
console.log(headingtwo);    //<h2 style="visibility: hidden;">Heading 2</h2>
console.log(headingtwo.innerText); //empty line
console.log(headingtwo.textContent);    //Heading 2


/*  DOM Manipulation */
//Attributes
/* getAttribute()
    The getAttribute() method is used to get the value of any attribute 
    (like id, href, src, class, data-*) from an HTML element.
    Common Attributes You Can Get:
| Attribute  | Purpose                                                 |
| ---------- | ------------------------------------------------------- |
| `"id"`     | Gets the element's ID                                   |
| `"class"`  | Gets the class name(s)                                  |
| `"href"`   | Gets the URL of a link (`<a>`)                          |
| `"src"`    | Gets the image source (`<img>`)                         |
| `"alt"`    | Gets alt text of images                                 |
| `"type"`   | Input type (`text`, `password`, etc)                    |
| `"value"`  | Gets value of inputs (⚠️ use `.value` for live updates) |
| `"data-*"` | Gets custom data attributes                             |
*/
console.log(div.getAttribute("id"));    //I1
console.log(div.getAttribute("name"));  //division

/* setAttribute
    setAttribute() is used to add or update an attribute and its value for any HTML element.
    element.setAttribute("attributeName", "value");
    Common Uses of setAttribute():
| Attribute    | Purpose                        |
| ------------ | ------------------------------ |
| `"href"`     | Change link target             |
| `"src"`      | Change image or video          |
| `"class"`    | Change or add a CSS class      |
| `"id"`       | Dynamically set element ID     |
| `"disabled"` | Disable a form input or button |
| `"value"`    | Set the value of input field   |
| `"data-*"`   | Set custom data attributes     |
*/
//elements : <p> First para </p>
elements.setAttribute("src", "image2.jpg");
console.log(elements);  //<p src="image2.jpg"> First para </p>

/* node.style
    The node.style (or element.style) property is used to directly change the inline CSS styles of an HTML element 
    using JavaScript.
    SYNTAX :- element.style.propertyName = "value";
    Important: Use camelCase for CSS properties with dashes.For example: background-color → backgroundColor
    font-size → fontSize
    element.style.cssText = "color: red; font-weight: bold; background: yellow;";
*/
console.log(div.style);     //It returns a CSSStyleDeclaration object. Get inline styles directly using JavaScript.
div.style.backgroundColor = "green";    //changed 
div.style.fontSize = '20px';    //set
//div.style.visibility = "hiddne";

/* ************    INSERT ELEMENT ************* 
    STEPS
    1) Create that element
        let el = document.createElement("div")
    2) Add that element
        i) node.append(el) //adds at the end of the node(inside)
        ii) node.prepend(el) //adds at the start of the node(inside)
        iii) node.before(el) //adds before the node(outside)
        iv) node.after(el) //adds after the node(outside)
*/
let newBtn = document.createElement("button");
newBtn.innerText = "click me";
console.log(newBtn.innerText);  //click me
div.append(newBtn); //adds at the end of the div(inside)
//elements.prepend(newBtn); //adds at the start of the elements(inside)

let newHeading = document.createElement("h1");
newHeading.innerText = "NEW HEADING";
console.log(newHeading.innerText);
document.querySelector("body").prepend(newHeading);     //adds at the start of the body(inside)

/* *****************Delete Node ********************* 
    node.remove() //removes the node
    */
let removeEl = document.querySelector("h4");
//removeEl.remove(); 

//appendChild()
//removeChild()







    



