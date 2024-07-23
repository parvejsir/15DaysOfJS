// Activity 1:Function declaration
// Task 1-check even or odd
function checkOddOrEven(num){
    if(num%2 == 0){
        return "even";
    }else{
        return "odd";
    }
}
let num = 0;
console.log(checkOddOrEven(num));               //output: even

// Task 2-find square
function findSquare(num){
    return num*num;
}
num = 1;
console.log(findSquare(num));                   //output: 1

// Activity 2: Function Expression
// Task 3-find maximum number between two numbers
function findMax(num1 , num2){
    if(num1 > num2){
        console.log(`${num1} is greater`);
    }else if(num1 == num2){
        console.log("numbers are equal");
    }else{
        console.log(`${num2} is greater`);
    }
}
findMax(5,15);                                    //output: 15 is greater

// Task 4-concat the two string
function concatString(str1 , str2){
    return str1+" "+str2;
}
let str1 = "Parvej";
let str2 = "Alam";
let result = concatString(str1,str2);
console.log(result);                           //output: Parvej Alam


// Activity 3: Arrow function
// Task 5-find sum of two number
let sum = (a,b)=>{
    return a+b;
}
let result1 = sum(5,3);
console.log(`sum: ${result1}`);                   //output: sum: 8

// Task 6-check specific character in string
let includesCharacter = (str,ch)=>{
    return str.includes(ch);
}
console.log(includesCharacter("hello",'i'));                //output: false

// Activity 4: Function Parameters and Default Values
// Task 7-product of two number
function product(a,b=0){
    return a*b;
}
let a = 5;
console.log(`product: ${product(a)}`);             //output: product: 0

// Task 8
function greetingMessage(name,age=18){
    return `Welcome-name:  ${name}, age: ${age}`;
}
console.log(greetingMessage("Munna",20));                 //output:Welcome- name: Munna, age: 20 


// Activity 5: Higher-Order Functions
// Task 9-repeat function 
function repeatFunctionCall(func,n){
    for(let i=0;i<n;i++){
        func();
    }
}

function hello(){
    console.log("Hello ");
}
repeatFunctionCall(hello,5);                                 //output: Hello Hello Hello Hello Hello


// Task 10-link one function twp other function
function functionToFunction(func1 ,func2, val){
    return func2(func1(val));
}

function func1(val){
    console.log("take value")
    return val*val;
}
function func2(val){
    console.log("print result")
    return val*val*val;
}

console.log(functionToFunction(func1,func2,2));     //output: take Value
                                                            // print result
                                                            // 64