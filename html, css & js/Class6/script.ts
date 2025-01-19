// MAP
//  Parameter:
//    Function: (element,index) => Value | Undefined
// Return:
//    A new Array of same length whose elements can or can't be changed
// -----------------------------------------------------------
// FILTER
//  Parameter:
//    Function: (element,index) => Value | Undefined
// Return:
//    A new Array of same length or lesser whose elements can't be changed
// -----------------------------------------------------------
// FOREACH
//  Parameter:
//    Function: (element,index) => nothing

// let i = 0;
// while (i < 5) {
//   console.log("this is inside loop");
// i++
// }

// for (let i = 0; i < 5; i++) {
//   console.log("this is inside for loop");
// }

let nums1 = [10, 20, 30, 40, 50];
let nums2 = [15, 25, 35, 45, 55];
let sums = [];

// let i = 0;
// let j = nums2.length - 1;
// while (i < nums1.length) {
//   console.log(nums1[i] + nums2[j]);
//   sums.push(nums1[i] + nums2[j]);
//   i++;
//   j--;
// }
// while (j >= 0) {
//   console.log(nums2[j]);
//   j--;
// }
// for (let i = 0; i < nums1.length; i++) {
//   for (let j = nums2.length - 1; j >= 0; j--) {
//     console.log(`nums1=>${nums1[i]} nums2=>${nums2[j]}`);
//   }
// }

// -----------------------------------------
// Do while loop
let age = 17;
do {
  age++;
  // console.log("Inside do while loop");
} while (age < 19);
// ---------------------------------------
// const numbers = () => {
//   return [10, 20];
// };

// const sumAndPrint = (
//   nums: (num1: number, num2: number, num3: number) => number[]
// ) => {
//   console.log(nums(20, 30, 50));
// };

// // --------

// let doubleShah = (num1: number, num2: number, num3: number) => {
//   return [num1 * 2, num2 * 2, num3 * 2];
// };

// // ======

// sumAndPrint(doubleShah);

let integers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let returnedArr = integers.map((elem, index) => {
  let degC = (9 / 5) * elem + 32;
  return degC;
});
// console.log("🚀 ~ returnedArr ~ returnedArr:", returnedArr);

const multiplyWithIndex = (a: number, b: number) => a * b;

let returnedArr2 = integers.map(multiplyWithIndex);
// console.log("🚀 ~ returnedArr2:", returnedArr2);

// integers.map((9 / 5) * 40 + 32)

const sum = (num1: number) => {
  // console.log(num1 + 10);
};

sum(20 + 10 - 5 * 2 + 100);

const checkEvenOdd = (elem: number, index: number) => {
  // console.log(`${index}=>${elem}`);
  if (elem % 2 === 0) {
    return "Even";
  }
};

let returnedArr3 = integers.map(checkEvenOdd);
// console.log("🚀 ~ returnedArr3:", returnedArr3);

const square = (elem: number, index: number) => elem * elem;

let returnedArr4 = integers.map(square);
// console.log("🚀 ~ returnedArr4:", returnedArr4);
// ------------------
// filter
const oddNums = (elem: number, index: number) => {
  if (elem % 2 === 1) {
    return true;
  }
};

let returnedArr5 = integers.filter(oddNums);
// console.log("🚀 ~ returnedArr5:", returnedArr5, integers);
// -----------------
// Write a program that uses filter to remove all negative numbers from an array of numbers

// Given an array of numbers [1, 2, 3, 4, 5], use the map method to create a new array where each number is multiplied by 2.

// Given an array of strings ["apple", "banana", "cherry", "date", "grape"], use the filter method to create a new array containing only the fruits with more than 5 characters.

// Given an array of numbers [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], use the map and filter methods together to create a new array containing the squares of even numbers.

// Given an array of temperatures in Celsius [0, 10, 20, 30, 40], use the map method to create a new array where each temperature is converted to Fahrenheit using the formula (Celsius * 9/5) + 32.

// Given an array of numbers [3, 6, 9, 12, 15, 18], use the map and filter methods together to create a new array containing the doubled values of odd numbers.

// Given an array of names ["Alice", "Bob", "Charlie", "David", "Emily"], use the forEach method to log each name with an exclamation mark at the end, e.g., "Alice!".

// ---------------

let arr = [1, 2, -5, -3, 35, -90, 12, 30, -45];

let index = 0;
while (index < arr.length) {
  if (arr[index] < 0) {
    arr.splice(index, 1);
  } else {
    index++;
  }
}

const returnedArr6 = arr.filter((elem: number) => {
  if (elem > 0) {
    return true;
  }
});
let age2 = 21;
let vote = age2 > 18 && "Eligible";

const returnedArr7 = arr.filter((elem: number, index: number) => elem > 0);
// console.log("🚀 ~ returnedArr7:", returnedArr7);

let numbers = [1, 2, 3, 4, 5];
const numsquare = numbers.map((num) => num * 2);
// console.log(numsquare);

let Fruits = ["Apple", "banana", "cherry", "date", "grape"];
let longfruit = Fruits.filter((fruit) => fruit.length > 5);
// console.log(longfruit);

// Given an array of numbers [1, 2, 3, 4, 5], use the map method to create a new array where each number is multiplied by 2.
let array: number[] = [1, 2, 3, 4, 5];
const double = (elem: number, index: number) => elem * 2;
let doubled = array.map(double);
console.log("🚀 ~ doubled:", doubled);

// Given an array of strings ["apple", "banana", "cherry", "date", "grape"], use the filter method to create a new array containing only the fruits with more than 5 characters.
let fruits: string[] = ["apple", "banana", "cherry", "date", "grape"];
const stringLen = (elem: string, index: number) => {
  if (elem.length > 5) {
    return true;
  }
};
let newFruits = fruits.filter(stringLen);
console.log("🚀 ~ newFruits:", newFruits);

// Given an array of numbers [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], use the map and filter methods together to create a new array containing the squares of even numbers.
let arrayOfNums: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const getEvenNums = (elem: number) => {
  if (elem % 2 === 0) {
    return true;
  }
};
let evenNums = arrayOfNums.filter(getEvenNums);
console.log("🚀 ~ evenNums:", evenNums);
const square2 = (elem: number, index: number) => {
  return elem * elem;
};
let squaredNums = evenNums.map(square2);
console.log("🚀 ~ squaredNums:", squaredNums);

// Given an array of temperatures in Celsius [0, 10, 20, 30, 40], use the map method to create a new array where each temperature is converted to Fahrenheit using the formula (Celsius * 9/5) + 32.
let temperature = [0, 10, 20, 30, 40];
const CtoF = (elem: number, index: number) => {
  return (elem * 9) / 5 + 32;
};
let Ftemps = temperature.map(CtoF);
console.log("🚀 ~ Ftemps:", Ftemps);

// Given an array of numbers [3, 6, 9, 12, 15, 18], use the map and filter methods together to create a new array containing the doubled values of odd numbers.
let array2 = [3, 6, 9, 12, 15, 18];
const getOddNums = (elem: number, index: number) => {
  if (elem % 2 === 1) {
    return true;
  }
};
const double2 = (elem: number) => {
  return elem * 2;
};
let oddNums2 = array2.filter(getOddNums).map(double);
console.log("🚀 ~ oddNums2:", oddNums2);

let names = ["Ali", "Saqib", "Naveed", "Mubeen", "Ahmad"];
const printMessage = (elem: string, index: number) => {
  console.log(`Hello! ${elem}`);
};
let abc = names.forEach(printMessage);
console.log("🚀 ~ abc:", abc);

let resp;
do {
  resp = confirm("Do you want to perform any other transection?");
  console.log("🚀 ~ resp:", resp);
} while (resp);
