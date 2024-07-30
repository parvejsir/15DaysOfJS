// Day 9: DOM Manipulation
// Activity 1: Selecting and Manipulating Elements of html page by js queires
// Task 1
let para = document.getElementById("para");
para.innerText = "This is awesome paragraph."     

// Task 2
let div1 = document.getElementsByClassName("task2");
div1[0].style.backgroundColor="blue";

// Activity 2: Creating and Appending elements
// Task 3-create new div tag
console.log(1)
let body = document.querySelector("body");
let newDiv = document.createElement("div");
newDiv.innerText = "This div tag made by dom queires";
newDiv.style.backgroundColor="yellow"
body.append(newDiv);
console.log(1)
 
console.log(1)
// Task 4-add new li tag into existing ul tag
let list = document.querySelector("ul");
let item = document.createElement("li");
item.innerText = "Ant Man-Enter in page by DOM queires";
item.style.backgroundColor="yellow"
list.append(item);
console.log(1)


// Activity 3: Removing elements
// Task 5-remove element
let div = document.querySelector("#div");
let btn1= document.getElementById("button1");
let btn2= document.getElementById("button2");
btn1.addEventListener('click',()=>{
    div.remove();
    alert("remove div tag has content(DIV TAG)")
});

// Task 6-remove last child
btn2.addEventListener('click',()=>{
    alert("remove last child of unordered list")
    list.removeChild(list.lastChild);
});



// Activity 4: Modifying Attributes and Classes
// Task 7-change Attributes
let img = document.querySelector("img");
img.setAttribute("src","https://static1.colliderimages.com/wordpress/wp-content/uploads/2024/07/dr-doom-robert-downey-jr.jpg");

// Task 8-add and remove css class
div1[0].classList.add("div2");
div1[0].classList.remove("div");

// Activity 5: Event handling
// Task 9-click event
let btn = document.querySelector("#toggle");
btn.addEventListener('click',()=>{
    if(body.style.background == "white"){
        body.style.background="black";
        body.style.color="white";
    }else{
        body.style.background="white";
        body.style.color="black";
    }
});


// Task 10-mouseover event
btn.addEventListener("mouseover",()=>{
    btn.style.borderRadius="10px";
    btn.style.borderColor="red";
});


