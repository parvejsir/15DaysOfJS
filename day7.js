// Activity 1: Object creation and access
// Task 1-crete book object 
const book = {
    title: "The Lean Startup",
    author: "Eric Ries",
    year: 2011,
    info(){
        return this.title + this.author ;
    },
    Updatedyear(yr){
        this.year = yr;
    }
};
console.log(book);     

// Task 2 access property of book object
console.log(`title: ${book.title}`);   //output: title: The Lean Startup
console.log(`author: ${book.author}`);  //output: author: Eric Ries

// Activity 2: Object Methods
// Task 3-make method for get info about title and author

console.log(book.info());             //output: The Lean Startup  Eric Ries

// Task 4-change property using take parameter
book.Updatedyear(2010);
console.log(book.year);                //output: 2010

// Activity 3: Nested Objects
// Task 5-create library object has more books object

const library = {
    name: "Money and Love",
    books: [ {
            name: "The Lean Startup",
            author: "Eric Ries",
        },
        {
        name: "Half Girlfriend",
        author: "Chetan Bhagat",
        }
    ]
}
console.log(library);

// Task 6-acess property of nested object
console.log(library.name);            //utput: Money and Love
console.log(library.books[0].name ," ,", library.books[1].name);  //output: The Lean Startup , Half Girlfriend

// Activity 4: use of this keyword
// Task 7
const movie = {
    name: "x men",
    year: 2019,
    info(){
        return `title: ${this.name} year: ${this.year}`;
    }
}
console.log(movie.info());     //output: title: x men year: 2019

// Activity 5: Object iteration
// Task 8-using for in loop

for(let i in movie){
    console.log(i);              //output:  name x men year 2019
    console.log(movie[i]);
}

// Task 9-use of keys() and value()
console.log(Object.keys(movie));       //output: [name,year]
console.log(Object.values(movie));     //output: [x men,2019]