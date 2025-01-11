// hoisting

// test();

const test = () => {
  console.log("Testing arrow functions");
};
// console.log(name1);
var name1 = "Abu Hurairah";

var name1 = "Naveed Sarwar";
let name2 = "Abu Hurairah";
// console.log(name2);
let name3 = "Naveed Sarwar";

const slogan = "Movement That Inspires";
// console.log(slogan);

// let askName = prompt("What is your name?");

// console.log(askName, "= askname");

// Array

let arr = ["Hamza", "Ali", "Ahmad", "Waqas", "Waseem"];

arr[5] = "Abu Hurairah";
arr[6] = "Awais";
arr[7] = "Umair";
// console.log(arr);

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let months = [
  "Jan", //0
  "Feb", //1
  "MArch", //2
  "April", //3
  "May", //4
  "June", //5
  "July", //6
  "August", //7
  "Sep", //8
  "Oct", //9
  "Nov", //10
  "Dec", //11
];

// lastIndex = Array.length -1
months[7] = "Aug";
// console.log(months);
// months = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let inputNames = ["Abu Hurairah", "Waseem", "Adnan", "Imran"];
// const outp1 = inputNames.push("Ali", "Zafar", "Bilal", "atif");
// console.log(inputNames);
// const outp2 = inputNames.pop();
// console.log(inputNames);
// console.log(outp2);
// const outp3 = inputNames.shift();
// console.log(inputNames);
// console.log(outp3);
// const outp4 = inputNames.unshift("Abu Bakar");
// console.log(inputNames);
// console.log(outp4);
// const outp5 = inputNames.slice(0); //to copy a full array
// console.log(outp5);
// const outp6 = inputNames.splice(3, 0, "Danial", "Zeeshan", "Usman");
// console.log("🚀 ~ outp6:", outp6);
// console.log("🚀 ~ after outp6:", inputNames);
// const outp7 = inputNames.includes("Usman");
// console.log(outp7);
// const outp8 = inputNames.indexOf("Usman");
// console.log(outp8);
// const outp9 = inputNames.lastIndexOf("Usman");
// console.log(outp9);

// let arr1: string[] = [10];
// let arr2: number[] = [" "];
let arr3: (string | number)[] = ["", 19];
// tuple
// let tuple1: [string, number] = [10, "Abu Hurairah"];

// let temperatures = [15, 23, 18, 27, 30, 25, 19, 22, 28, 16, 20, 24, 21, 29, 17];
// temperatures[0] = temperatures[0] * (9 / 5) + 32;
// console.log(temperatures[0]);

// loop
// While Loop
let age = 21;
let number = 1;
// while (age > 18) {
//   console.log(number); // 1,2,3
//   number++; // 2,3,4
//   age--; // 20,19,18
// }
// print table of two
// let value = 1;
// while (value <= 10) {
//   console.log(`2 * ${value} = ${2 * value}`);
//   value++; //2,3,4,5,6
// }

//print all even numbers that exist in between 1 - 20

let num1 = 1;
while (num1 <= 20) {
  console.log(num1);
  num1 = num1 + 2;
}

let num2 = 10;

let array: string[] = ["a", "b", "c", "d", "e"];

let index = 0;

while (index < array.length) {
  console.log(array[index].toUpperCase());
  index++;
}

let temperatures = [15, 23, 18, 27, 30, 25, 19, 22, 28, 16, 20, 24, 21, 29, 17];
// let i = 0;

// while (i < temperatures.length) {
//   temperatures[i] = temperatures[i] * (9 / 5) + 32;
//   console.log(temperatures[i]);
//   i++;
// }
let numbers1 = [1, 2, 3, 4, 5];
let numbers2 = [24, 68, 57, 41, 55];
let sums = [];

// sum[0] = numbers1[0] + numbers2[0]
let j = 0;

while (j < 5) {
  let answer = numbers1[j] + numbers2[j];
  sums.push(answer);
  j++;
}

let nums = [10, 20, 25, 65, 75, 55, 10]; //15
let i = 0;
let sum = 0;
while (i < nums.length) {
  sum = sum + nums[i]; //0+1 = 1||
  i++;
}

console.log(sum);
