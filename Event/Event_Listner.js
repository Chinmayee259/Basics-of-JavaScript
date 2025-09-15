let btn1 = document.querySelector("#btn1");
//Can overwrite the event
btn1.addEventListener("click", () => {
    console.log("button1 was clicked - Handler1")
})

btn1.addEventListener("click", () => {
    console.log("button1 was clicked - Handler2")
})

/*btn1.addEventListener("click", () => {
    console.log("button1 was clicked - Handler3")
})
*/

btn1.addEventListener("click", () => {
    console.log("button1 was clicked - Handler4")
})

/*
btn1.removeEventListener("click", () => {
    console.log("button1 was clicked - Handler3")
)}
But handler 3 doesnt get removed . It has to get stored in a variable
*/

const handler3 = () => {
    console.log("button1 was clicked - Handler3")
}
btn1.addEventListener("click", handler3)
btn1.removeEventListener("click", handler3)
