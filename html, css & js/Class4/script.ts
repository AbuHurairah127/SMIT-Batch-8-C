type FuncType = (_num1: number, _num2: number) => number;
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

// printCustomValue("Abu Hurairah is a friend of Waseem");
// printCustomValue("I'll be going to dinner");
// printCustomValue("I'm resting at home");
// printCustomValue("It is very cold outside");

function sum2(num1: number, num2: number) {
  console.log(num1 + num2);
}

// sum2(10, 20);
// sum2(3, 5);
// sum2(4, 5);
// sum2(410, 5);

// Default Parametes

// names("Ali");
// names("Ali", "Ahmad");

// Optional Parameters
function names2(firstName: string, lastName: string, middleName?: string) {
  //parameter
  if (middleName) {
    console.log(firstName, middleName, lastName);
  } else {
    console.log(firstName, lastName);
  }
}

// names2("Muhammad", "Siddique", "Abu Bakar"); // argument
// names2("Abu", "Hurairah");

var _name = "Abu Hurairah";
_name = _name.toUpperCase();
console.log(_name);
console.log(_name.charAt(2));
console.log(_name.indexOf("A"));
console.log(_name.lastIndexOf("A"));
console.log(_name.includes("ABU"));
console.log(_name.concat(" Shafique"));
console.log(_name.length);
var str2 = "             Abu Hurairah               ";
console.log(str2);
console.log(str2.trim());
console.log(str2);
console.log(_name.replace("ABU", "MUHAMMAD"));

function names(lastName: string, firstName: string = "Muhammad") {
  console.log(firstName, lastName);
}

var response = names("Ali");
console.log("🚀 ~ response:", response);

// return statement

console.log(names3("Abu hurairah"));

function names3(_name: string): string {
  return `Muhammad ${_name}`;
}

var response2 = names3("Ahmad");
console.log(names3("Waseem"));

var resp1 = names3("Ali");
console.log(resp1);
var resp2 = names3(resp1); // Muhammad Ali => Muhammad Muhammad Ali
console.log(resp1, "||", resp2);

console.log(names3(names3("Ali")));

const arrowFunction = () => {
  console.log("Anonymus function");
};

arrowFunction();

const sum: FuncType = (_num1, _num2) => _num1 + _num2; // Lambda Functions

var respOfSum = sum(10, 25);
console.log("🚀 ~ respOfSum:", respOfSum);

// ceil, floor, round
// ceiling, floor

var diceNum = Math.random();
console.log("🚀 ~ diceNum:", diceNum);

var userResp = Number(prompt("Enter First Number"));
console.log("🚀 ~ userResp:", userResp);
var userResp2 = Number(prompt("Enter 2nd Number"));
console.log("🚀 ~ userResp2:", userResp2);

const sumWithButton = () => {
  console.log(userResp + userResp2);
};

const cosWithButton = () => {
  console.log(Math.cos(userResp));
};
