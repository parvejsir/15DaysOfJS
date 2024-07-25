// Activity 1: Array creation and access element of array
// Task 1-array of 1 to 5 number
const numArray = new Array();
for(let i=1;i<=5;i++){
    numArray.push(i);
}
console.log(numArray);     //output: [1,2,3,4,5]

//Task 2-access first and last element 
const first = numArray[0];
const last = numArray[numArray.length -1];
console.log(`first = ${first} last = ${last}`);      //output: first = 1 last = 5

// Activity 2: Array Methods
// Task 3-push
numArray.push(6);
console.log(numArray);      //output: [1,2,3,4,5,6]

// Task 4-pop
numArray.pop();
console.log(numArray);       //output: [1,2,3,4,5]

// Task 5-shift
numArray.shift();
console.log(numArray);       //output: [2,3,4,5]

// Task 6-unshift
numArray.unshift(0);
console.log(numArray);        //output: [0,2,3,4,5]

// Activity 3: Array methods
// Task 7-map
const doubleNumber = numArray.map((num)=>{
    return num*2;
});
console.log(doubleNumber);         //output: [0,4,6,8,10]

//Task 8-filter
const evenCheck = numArray.filter((num)=>{
    return num%2 == 0;
});
console.log(evenCheck);          //output: [0,2,4]

// Task 9-reduce
const sum = numArray.reduce((num1,num2)=>{
    return num1+num2;
}); 
console.log(`sum = ${sum}`);    //output: sum = 14

// Activity 4: Array iteration by different loops
// Task 10-for loop
for(let i=0;i<numArray.length;i++){
    console.log(numArray[i]);
}                                 //output: 0 2 3 4 5

// Task 11-forEach loop
numArray.forEach(element => {
    console.log(element);
});                               //output: 0 2 3 4 5

// Activity 5: Multi-dimensional Array
// Task 12-create matrix
let row = 3;
let col = 3;
let matrix = [];
for(let i = 0; i<row;i++){
    matrix[i] = [];
    for(let j = 0;j<col;j++){
        matrix[i][j] = i;
    }
}
console.log(matrix);            // output:  [[0,0,0],[1,1,1],[2,2,2]]

// Task 13-access element of matrix
console.log(matrix[1][2]);       //output: 1
