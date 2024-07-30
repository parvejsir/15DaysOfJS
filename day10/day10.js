// Activity 1: Basic event handling
// Task 1-change the content of the paragraph using click on button event
const para = document.querySelector("#para");
const btn1 = document.querySelector("#changeContent");
btn1.addEventListener('click',()=>{
    para.innerText = "...New paragraph content";
});

// Task 2-change visibility of image using double click event
let imageVis = document.querySelector("#visibilityCheck");
imageVis.addEventListener("dblclick", () => {
    imageVis.style.visibility = imageVis.style.visibility === "hidden" ? "visible" : "hidden";
});

// Activity 2: Mousehover events
// Task 3-change bg color using mouseover
const div1 = document.querySelector(".changeColor");
div1.addEventListener("mouseover",()=>{
    div1.style.background = "skyblue";
});

// Task 4-reset bg color using mouseout
div1.addEventListener("mouseout",()=>{
    div1.style.background = "white";
});

// Activity 3: Keyboard events
// Task 5-add a keydown event to input feild that log the which key pressed
const inputBox = document.querySelector("#inputBox");
const outputBox = document.querySelector("#outputBox");
inputBox.addEventListener("keydown", (event) => {
  outputBox.textContent = `Keydown:You pressed "${event.key}".`;
});

// Task 6-use of keyup to input field that display the current value of inputed text
const display = document.querySelector("#showContent");
inputBox.addEventListener("keyup",(event)=>{
    display.innerText = `Keyup: You entered ${event.target.value}`;
});

// Activity 4: Form events
// Task 7-submit event logs inputed data in form
const form = document.querySelector("form");
const fname = document.getElementById("#fname");
const address = document.getElementById("#address");
form.addEventListener("submit", (e) => {
    e.preventDefault();
    // console.log(fname,address);
});

// Task 8-change event to select dropdown that display the selected value 
const selectOption = document.querySelector("select");
const container = document.querySelector("#container");
selectOption.addEventListener("change",()=>{
    container.innerText = `selected value = ${selectOption.value}`;
});

// Activity 5: Event Delegation
// Task 9-which item is select from list logs using click event
const itemList = document.getElementById("list");
const p = document.querySelector("#listContainer");
itemList.addEventListener("click",(event)=>{
    if (event.target && event.target.matches("li.item")) {
        // console.log("Item Name: " + event.target.textContent);
        p.innerText = "Item Name: " + event.target.textContent;
    } 
});

// Task 10-Add an event listner to a parent element that listen for event from dynamically added child element
const add = document.querySelector("#add-item");
add.addEventListener("click",()=>{
    const newitem = document.createElement("li");
    newitem.classList.add("item");
    newitem.textContent = "new";
    itemList.appendChild(newitem);
})