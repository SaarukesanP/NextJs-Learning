// Number

let balance = 100; 
console.log(typeof balance); // Output: number

let price = new Number(50); // Using Number constructor
console.log(price); // Output: [Number: 50]
console.log(typeof price); // Output: object

// boolean

let isLoggedIn = true;
console.log(typeof isLoggedIn); // Output: boolean

let isAdmin = new Boolean(false); // Using Boolean constructor
console.log(isAdmin); // Output: [Boolean: false]
console.log(typeof isAdmin); // Output: object

// null and undefined
let firstName;
console.log(firstName); // Output: undefined

let lastName = null;
console.log(lastName); // Output: null

//String
let name = "John Doe";
let name2 = 'Jane Doe';
console.log(typeof name); // Output: string

let greeting = new String("Hello, World!"); // Using String constructor
console.log(greeting); // Output: [String: 'Hello, World!']

let oldGreet = "Hello " + name;
console.log(oldGreet); // Output: Hello John Doe

let newGreet = `Hello ${name} !`; // Using template literals
console.log(newGreet); // Output: Hello John Doe

let demoOne = `The price is ${2 *4} dollars.`;
console.log(demoOne); // Output: The price is 8 dollars.

// Symbol

let sym1 = Symbol("unique");
let sym2 = Symbol("unique");

console.log(sym1); // Output: Symbol(unique)
console.log(sym2); // Output: Symbol(unique)
console.log(sym1 === sym2); // Output: false (Symbols are unique even if they have the same description)