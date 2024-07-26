// Activity 1: Template Literals
// Task 1- pass string of name and age as variable with template literals
let name = "Parvej Alam";
let age = 19;
const str = `name: ${name} age: ${age}`;
console.log(str);                    //output: name: Parvej Alam age: 19

// Task 2-multiline template string
const str2 = `My Name is 
: ${name}`;
console.log(str2);                    //output: My Name is
                                      //        :Parvej Alam

// Activity 2: Destructuring
// Task 3-Array Destructuring
const nums = [1,2,3,4,5];
const [first,second,third,fourth,five] = nums;
console.log(first,second,third);                   //output: 1 2 3

// Task 4-object Destructuring
const book = {
    bookName: 'Half Girlfriend',
    Author: 'Chetan Bhagat',
  };
  
  const { bookName, Author} = book;
  
  console.log(bookName);             // Output: Half Girlfriend
  console.log(Author);               // Output: Chetan Bhagat
 
//   Activity 3: Spread and Rest operators
// Task 5-use of spread operator to create new array which contain previous and newest both item

const arr = [1,2,3];
const newArr = [...arr];
newArr.push(4,5);
console.log(newArr);                   //output: [1,2,3,4,5]

// Task 6-use of rest operator in function to accept arbitary no. of argument
function sum(...args){
    return args.reduce((num1,num2)=>{
        return num1+num2;
    });
}
console.log(sum(1,2,3,4,5));              //output: 15

// Activity 4: use of default parameter
// Task 7-take a default parameter to function 

function product(a,b=1){
    return a*b;
}

const pro1 = product(2,3);
const pro2 = product(5);
console.log(pro1,pro2);                  //output: 6, 5

// Activity 5: Enhanced object literals
// Task 8-create a object

let Name = "munna";
let Age = 19;
const obj = {Name,
    Age,
    info(){
    console.log(`name: ${Name} age: ${Age}`)
}};

console.log(obj);  //{ Name: 'munna', Age: 19, info: [Function: info] }
// Task 9-create a obj with computed property name based on variable
const prop1 = 'name';
const prop2 = 'age';
const person = {
  [prop1]: 'munna',
  [prop2]: 19,
};

console.log(person); //{ name: 'munna', age: 19 }