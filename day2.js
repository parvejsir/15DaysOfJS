// Activity 1: Arithmetic Operations

let num1=3;
let num2=3;
// Task 1:add two number
let sum=num1+num2;
console.log(sum); //output 6
// Task 2: subtract two number
let diff=num2-num1;
console.log(diff);//output 0
// Task 3: multiply two number
let mul=num2*num1;
console.log(mul);//output 9
// Task 4: divide two numer
let div=num2/num1;
console.log(div);//output 1
// Task 5: remainder when one number is divided by another 
let rem=num2%num1;
console.log(rem);//output 1


// Activity 2: Assignment Operators
// Task 6: Use the += operator to add a number 
num1+=3
console.log(num1); //output 5 (now num1 is 3+3=6)
// Task 7: Use the -= operator to subtract a number 
num2-=1;
console.log(num2);//output 2 (now num2 is 3-1=2)

// Activity 3: Comparison Operators
// Task 8: compare two numbers using > and < 
console.log(num1>num2); //output false
console.log(num1<num2); //output false
// Task 9: compare two numbers using >= and <= 
console.log(num1>=num2); //output true
console.log(num1<=num2); //output true
// Task 10:compare two numbers using == and ===
let numberstr='3';
console.log(num2==numberstr); //output true
console.log(num2===numberstr);//output false

// Activity 4: Logical Operators
// Task 11: uses the && operator to combine two conditions 
if(num1==1 && num2==2)
    console.log("both true");  
else
    console.log("at least one false"); // output: at least one false

// Task 12: uses the || operator to combine two conditions 
if(num1==1 ||  num2==2)
    console.log("at least one true"); 
else
    console.log("both false"); //output:both false

// Task 13: uses the ! operator to negate a condition 
if(num1!=1)
    console.log("num1 is not equal to 1"); //output: num1 is not equal to 1 is run becuse num1=3 and ! negate the conditiojn of equality

// Activity 5: Ternary Operator
// Task 14: uses the ternary operator to check if a number is positive or negative 
2>0?console.log("2 is positive"):console.log("2 is negative"); //output 2 is positive

