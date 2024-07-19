// Activity 1 --> Variable declaration
// Task1  --> Declare a variable using var 
var num = 404;
console.log("var number: ",num);  

// Task2  --> Declare a variable using let 
let str = "Welcome Guys";  
console.log("let string: ",str); 
// Activity 2 --> Constant declaration
// Task3  --> Declare a variable using const 
const day = "friday";
console.log("const variable day: ", day);  

// Activity 3
// Task4  --> Create variables of different data types and print their data type
let num1 = 2;
let str1 = "string";
let bool1 = true;
let obj1 = {
    "name":"parvej",
    "age":19
};
let array1 = [1,2,3];
let undefinedDataType = null;
console.log(" number type = ",typeof(num1),
            "\n String type = ",typeof(str1),
            "\n boolean type = ",typeof(bool1),
            "\n object type = ",typeof(obj1),
            "\n array type = ",typeof(array1),
            "\n null type = ",typeof(undefinedDataType));

// Activity 4
// Task5  --> Declare a variable using let,and reassign it value
let flag = 1;
console.log("initial value: ",flag);  
flag = 0;
console.log("initial value: ",flag); 
// Activity 5
// Task6 --> try reassigning a variable declared using const and observe the error
const val = "Parvej";
console.log("const val: ",val);  //output = const val: nitika
// val = "Alam";
// console.log(val)  //output error TypeError: Assignment to constant variable