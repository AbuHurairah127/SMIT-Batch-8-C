// Functions
console.log("Abu Hurairah");
console.log("Waseem");
// learnwithabuhurairah@gmail.com
// testing
// console.log(likeNumber);
// likeNumber++;
// console.log(likeNumber);

// Variable
// Conditions
// Functions

function test() {
  var num1 = 20;
  var num2 = 30;
  var sum = num1 + num2;
  console.log(sum);
}

function condition() {
  var age = 18;
  if (age < 18) {
    console.log("You can't caste vote.");
  } else {
    console.log("You can caste vote");
  }
}

let likeNumber = 5;
function likeCountIncrease() {
  console.log(++likeNumber);
}

function likeCountDecrease() {
  if (likeNumber > 0) {
    console.log(--likeNumber);
  } else {
    alert("You can't Dislike it anymore.");
  }
}

function multiply() {
  var num3 = 5;
  var num4 = 10;
  var resp = num4 * num3;

  console.log(resp);
}

function printOnConsole() {
  console.log("Abu Hurairah");
}

function printCustomValue(str1: string) {
  console.log(str1);
}

printCustomValue("Abu Hurairah is a friend of Waseem");
printCustomValue("I'll be going to dinner");
printCustomValue("I'm resting at home");
printCustomValue("It is very cold outside");

function sum2(num1: number, num2: number) {
  console.log(num1 + num2);
}

sum2(10, 20);
sum2(3, 5);
sum2(4, 5);
sum2(410, 5);

// Default Parametes
function names(lastName: string, firstName: string = "Muhammad") {
  console.log(firstName, lastName);
}

names("Ali");
names("Ali", "Ahmad");

// Optional Parameters
function names2(firstName: string, lastName: string, middleName?: string) {
  //parameter
  if (middleName) {
    console.log(firstName, middleName, lastName);
  } else {
    console.log(firstName, lastName);
  }
}

names2("Muhammad", "Siddique", "Abu Bakar"); // argument
names2("Abu", "Hurairah");
