// Acivity 1: Creating and exporting Modules
import {add,studentInfo} from "./utility.js";
import mul from "./utility.js";
import{add as addition} from "./utility.js";
import * as utility from "./utility.js";
const _ = require('lodash');
const axios = require('axios');

// Task 1-export/import add function
const result = add(0,0,0);
console.log(result);
// output: 0

// Task 2-export/import object
const name = studentInfo.name;
console.log(student);
// {name: 'Parvej', dept: 'Computer Engineering', year: 'Second',gender()}


// Activity 2: Named and default exports

// Task 3-import as alias
const res = addition(1,2,3);
console.log(res);
//output: 6

// Task 4-single export default
const ans = mul(1,0,1);
console.log(ans);
// output:0

// Activity 3: importing entire module
// Task 5-import entire module
const subAns= utility.sub(8,3);
console.log(subAns);
// output: 5

// Activity 4: Using Third-Party Modules
// Task 6-use lodash module
let array = [1, 2, 3, 4];
_.reverse(array);
console.log(array);
// output: [4,3,2,1]

// Task 7-use axios module
axios.get('https://jsonplaceholder.typicode.com/posts')
  .then(response => {
    console.log(response.data);
  })
  .catch(error => {
    console.error(error);
  });



