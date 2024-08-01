// Activity 1: Understanding Promises
// Task 1-create a promise that resolve with a message after a 2s 
function firstPromise(){
    return new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("promise is successfull");
    },2000);
});
}

firstPromise().then((res)=>{
    console.log("message:",res);
});
// output: message:Promise is successfull

// Task 2-create a promise that rejects with an error message after 2s
function secondPromise(){
    return new Promise((resolve,reject)=>{
    setTimeout(()=>{
        reject("promise is failed");
    },2000);
});
} 

secondPromise().then((message) => {
    console.log("message:", message);
}).catch((err) => {
    console.log("error:", err);
});
// output: error: promise is failed

// Activity 2: Chaining promises
// Task 3-create a sequence of promises that simulate fetching data from a server.Chain the promises to log messages in a specific order.
console.log("fetching first promise...");
firstPromise().then((message)=>{
    console.log(message);
    console.log("fetching second promise...");
    return secondPromise().catch((message)=>{
        console.log(message);
    });
});
// output:
// fetching  first promise
// promise is successfull
// fetching second promise
// promise is failed


// Activity 3: Using Asynch/Await
// Task 4-write a async function that waits for a promise to resolve 
function data(){
    return new Promise((reslove,reject)=>{
        setTimeout(()=>{console.log("data is fetching...");
        reslove("promise resolve");
    } , 2000);
    });
}

async function getData(){
    const output = await data();  
    console.log(output);
}
getData();
// output:
// data is fetching
// promise resolve

// Task 5-write an async function that handles a rejected promise using try-catch block
async function handleRejection(){
    try{
        await secondPromise();
    }
    catch(err){
        console.log(err);
    }
}
handleRejection();
// output: promise is failed

// Activity 4: Fetching data from API
// Task 6-use the fetch api to get data from a public api and log response using promise

let src = "https://openlibrary.org/search.json?title=the+lord+of+the+rings";
const book = ()=>{
    return new Promise((resolve,reject)=>{
        fetch(src)
        .then(response =>{
            //if response status is not 200 of (ok)
            if(!response.ok){
                reject(new Error(`Error: ${response.status} - Resource not found`));
            }else{
                response.json().then(data => resolve(data));
            }
        })
        .catch(error => reject(error));
    });
};
book().then((data) => {
    console.log(data);
}).catch((error) => {
    console.log(error);
});

// Task 7-use the fetch api to get data from a public api and log response using async/await
let src1 = "https://openlibrary.org/search.json?title=the+lord+of+the+rings";
const getBooks = async()=>{
    try{
        let response = await fetch(src1);
        //if response status is not 200 of (ok)
        if(!response.ok){
            throw new Error(`Error: ${response.status} - Resource not found`);
        }
        let data = await response.json();
        console.log(data);
    }catch(error){
        console.log(error);
    }
};
getBooks();


// Activity 5: Concurrent Promises
// Task 8-use promise.all to wait for multiple promises to resolve and then log their value
function thirdPromise(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("success third promise ");
        },5000)
    });
}
const p1 = firstPromise();
const p2 = thirdPromise();
Promise.all([p1,p2]).then((messages)=>{
    console.log(messages);
});
// output: [ 'promise is successfull', 'success third promise ' ]

// Task 9-use promise.race to log the value of the promise that resolves among multiple promises
Promise.race([p1,p2]).then((messages)=>{
    console.log(messages);
});
// output: promise is successfull