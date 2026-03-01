let city = new Array("New York", "Los Angeles", "Chicago");

city.push("Houston"); // Adding an element to the array
console.log(city); // Output: ["New York", "Los Angeles", "Chicago", "Houston"]

city.pop(); // Removing the last element from the array
console.log(city); // Output: ["New York", "Los Angeles", "Chicago"]

let tea = ["Green", "Black", "Oolong"];
let softTea = tea;
tea.pop(); // Modifying the original array
console.log(softTea); // Output: ["Green", "Black"] (softTea reflects the change because it references the same array)
console.log(tea); // Output: ["Green", "Black"] (tea also reflects the change)

let fruits = ["Apple", "Banana", "Cherry"];
let hardFruits = [...fruits]; // Creating a shallow copy of the array using spread operator
let hardFruits2 = fruits.slice(); // Creating a shallow copy of the array using slice method

fruits.pop(); // Modifying the original array   
console.log(hardFruits); // Output: ["Apple", "Banana", "Cherry"] (hardFruits remains unchanged)
console.log(fruits); // Output: ["Apple", "Banana"] (fruits reflects the change)
console.log(hardFruits2); // Output: ["Apple", "Banana", "Cherry"] (hardFruits2 remains unchanged)


let europeanCities = ["Paris", "London", "Rome"];
let asianCities = ["Tokyo", "Beijing", "Seoul"];
let allCities = europeanCities.concat(asianCities); // Combining two arrays using concat method
console.log(allCities); // Output: ["Paris", "London", "Rome", "Tokyo", "Beijing", "Seoul"]

let allCities2 = [...europeanCities, ...asianCities]; // Combining two arrays using spread operator
console.log(allCities2); // Output: ["Paris", "London", "Rome", "Tokyo", "Beijing", "Seoul"]

let cityBucketList = ["New York", "Los Angeles", "Chicago", "Houston", "Phoenix"];
let isNewYorkInBucketList = cityBucketList.includes("New York"); // Checking if an element exists in the array
console.log(isNewYorkInBucketList); // Output: true