let obj = {}; // This is an empty object literal
console.log(obj); // Output: {}

let userName = {
    name: "John",
    age: 30,
    email: "john@example.com",
    isAdmin: false
};

const user = {
    name: "John",
    age: 30,
    email: "john@example.com",
    isAdmin: false
};
user.name = "Jane"; // Modifying a property of the object
console.log(user); // Output: { name: "Jane", age: 30, email: "john@example.com", isAdmin: false }

const user2 = {
    "first name": "John",
    "age": 30,
    "email": "john@example.com",
    "isAdmin": false
};

console.log(user2["first name"]); // Output: John (using bracket notation to access property with space)

let today = new Date(); // Creating a new Date object
console.log(today); // Output: current date and time
console.log(today.getDate()); // Output: current day of the month

// Array

let fruits = ["Apple", "Banana", "Cherry"];
console.log(fruits); // Output: ["Apple", "Banana", "Cherry"]

let array = ["Hello", 42, true, null, undefined, { name: "John" }, [1, 2, 3]];
console.log(array); // Output: ["Hello", 42, true, null, undefined, { name: "John" }, [1, 2, 3]]
console.log(array[0]); // Output: Hello (accessing first element of the array)
console.log(array[5].name);

console.log("1" + 2); // Output: "12" (string concatenation)
console.log(5 + "5"); // Output: "55" (string concatenation)

let isValue = true;
console.log(isValue + 1); // Output: 2 (true is coerced to 1)
console.log(Number(isValue)); // Output: 1 (explicitly converting boolean to number 

let number = "100";
console.log(Number(number)); // Output: 100 (explicitly converting string to number)

let value = "2as";
console.log(Number(value)); // Output: NaN (Not a Number, because "2as" cannot be converted to a valid number)

console.log(Number(null)); // Output: 0 (null is coerced to 0)
console.log(Number(undefined)); // Output: NaN (undefined cannot be converted to a valid number)