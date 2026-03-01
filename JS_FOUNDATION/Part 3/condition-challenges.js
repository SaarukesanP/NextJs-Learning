let num1 = 10;
let num2 = 20;

if (num1 > num2) {
    console.log("num1 is greater than num2");
} else if (num1 < num2) {
    console.log("num1 is less than num2");
}

let userRole = "admin";
let accessLevel = "admin";

if ( userRole == accessLevel) {
    console.log("Access granted");
}else {
    console.log("Access denied");
}

let num = "40";
if ( typeof num === "number") {
    console.log("num is a number");
} else {
    console.log("num is not a number");
}

//Checking array is empty or not
let myArray = ["one"];

if (myArray.length === 0) {
    console.log("The array is empty");
} else {
    console.log("The array is not empty");
}

