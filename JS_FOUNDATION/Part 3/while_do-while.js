let sum = 0;

// Using a while loop to calculate the sum of numbers from 1 to 5
let i = 1;
while (i <= 5) {
  sum += 1;
  i++;
}
console.log(sum); // Output: 5

let teaCollection = [];
let tea;
do {
    tea = prompt("Enter a type of tea (or 'stop' to finish):");
    if (tea !== "stop") {
        teaCollection.push(tea);
    }
} while (tea !== "stop");

// forLoop

let multipledNumbers = [];
let number = [1, 2, 3, 4, 5];

for (let i = 0; i < number.length; i++) {
    multipledNumbers.push(number[i] * 2);
}
console.log(multipledNumbers); // Output: [2, 4, 6, 8, 10]