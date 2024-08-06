// Activity 1: Basic Error Handling with try and catch
//Task 1-write a function which throw error  and use try catch block for error handle

function func1(){
    throw new Error("ERROR");
};
try {
    func1();
} catch (error) {
    console.log(error.message);
}
//ERROR
//Task 2-create a function that divide two no. and if denominator is 0 than throw error

function div(){
    const a=1;
    const b=0;
    if (b==0){
        throw new Error('Undefined');
    }
    else{
        return (a/b);
    }
}

try {
    div()
    
} catch (error) {
    console.log(error.message);
}

// Activity 2: Finally Block
//Task 3-use finally block

try {
    console.log('check code block');
    div();
} catch (error) {
    console.log('throw error block');
    console.log(error.message);
}
finally{
    console.log('finally block');
}

// check code block
// throw error block
//undefined
// finally block

// Activity 3: Custom Error Objects
//Task 4-create a custom error class that extends the built-in Error class.Throw an instance of this custom error in a function and handle it using a try catch block
class undefinedDivision extends Error {
    constructor(message){
        super(message);
        this.name = "undefinedDivisionError"; 
    }
}
function div2() {
    let a1 = 1;
    let b1 = 0;

    if (b1 === 0){
        throw new undefinedDivision('denominator is zero so division is undefined');
    }else{
        return a1 / b1;
    }
}
try {
    
    let result1 = div2();
    console.log("Result:", result);
} catch (error) {
    if (error instanceof undefinedDivision) {
        console.error(`Caught a custom error: ${error.name} - ${error.message}`);
    } else {
        console.error(`Caught an unexpected error: ${error.message}`);
    }
}
//Caught a custom error: undefinedDivisionError - denominator is zero so division is undefined

//Task 5 

class ValidationOfStringError extends Error {
    constructor(message) {
        super(message); 
        this.name = "validation error:"; 
    }
}
function validateString(input) {
    if (typeof input !== 'string' || input.trim() === '') {
        throw new ValidationOfStringError('string is not enterd yet!');
    }
    return "Input is valid!";
}
try {
    const userInput = '';
    const result = validateString(userInput);
    console.log(result);
} catch (error) {
    if (error instanceof ValidationOfStringError) {
        console.error(`Caught a validation error: ${error.name} - ${error.message}`);
    } else {
        console.error(`Caught an unexpected error: ${error.message}`);
    }
}
//Caught a validation error: Validation error: - string is not enterd yet! 



// Activity 4: Error Handling in Promises
//Task 6 - create a promise that randomly resolves or rejects .use .catch() to handle teh rejection 
function promiseOne(){
    return new Promise((resolve,reject)=>{
        let random = Math.random();
        if(random >= 0.5){
            resolve("Randomly resolve");
        }else{
            reject(new error("Randomly rejected"));
        }
    });
};
promiseOne().then((msg)=>{
    console.log("Promise resolved with: ",msg);
})
.catch((error)=>{
    console.log("Promise rejected with: ",error.message);
});


//Task 7 -Use a try-catch within an async function to handle errors from a promise that randomly rejected or resolved
async function randomHandle() {
    try {
        const res = await promiseOne();
        console.log("Promise resolved with:", res);
    } catch (error) {
        console.log("Promise rejected with:", error.message);
    }
}
randomHandle();



// Activity 5: Graceful Error Handling in Fetch
//Task 8 -use the fetch api to request data from an invalid URL and handle error using .catch()
const src='https://www.adoptapet.com/public/apis/pet_list.json';

const dataFetchingApi = () => {
    return new Promise((resolve, reject) => {
        fetch(src)
            .then(response => {
                if (!response.ok) {
                    reject(new Error(`Error: ${response.status}`));
                } else {
                    response.json().then(data => resolve(data));
                }
            })
            .catch(error => {
                reject(error);
            });
    });
};

dataFetchingApi()
    .then(data => console.log(data))
    .catch(error => console.log(error));
//Error: Error: 404

//Task 9-use the fetch api to request data from an invalid URL and handle error using try-catch block

const dataFetchingApi1=async()=>{
    try{
        let response=await fetch(src);
        if (!response.ok) {
            throw new Error(`Error: ${response.status}`);
        }
        let data = await response.json();
        console.log(data);
    }
    catch(error){
        console.log(error);
    }       
};
dataFetchingApi1();
// output 
// Error: Error: 404