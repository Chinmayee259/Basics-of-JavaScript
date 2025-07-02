/* Create a toggle button that changes the screen to dark-mode when clicked and light mode when clicked again*/

let modeBtn = document.querySelector("#Toggle");
let currMode = "light";

// modeBtn.addEventListener("click", () => {
//     if(currMode =="light"){
//         currMode = "dark";
//         document.querySelector("body").style.backgroundColor = "black";
//     }
//     else{
//         currMode = "light";
//         document.querySelector("body").style.backgroundColor = "white";
//     }
//     console.log(currMode);
// });

let body = document.querySelector("body");
modeBtn.addEventListener("click", () => {
    if(currMode =="light"){
        currMode = "dark";
        body.classList.add("dark");
        body.classList.remove("light");
    }
    else{
        currMode = "light";
        body.classList.add("light");
        body.classList.remove("dark");
    }
    console.log(currMode);
});