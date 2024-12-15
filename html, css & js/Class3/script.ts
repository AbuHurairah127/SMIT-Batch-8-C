// if(condition){
// Code to execute
// }

var obtainedMarks = 23;
var attendance = 80;
var isPassInTheory = true;
var isPassInPractical = true;

// if (attendance > 75) {
//   console.log("you can sit in the examination");
//   if (isPassInPractical && isPassInTheory && obtainedMarks > 33) {
//     console.log("Pass");
//   }
// }

// vote by age for cast
var age = 12;

if (age >= 18) {
  console.log("You are eligible to caste vote.");
} else {
  console.log("You are not eligible to caste vote.");
}

if (obtainedMarks > 33) {
  console.log("Pass");
} else {
  console.log("fail");
}
var number = 21;
if (number % 3 === 0) {
  console.log("Divisible by 3", number % 3);
} else {
  console.log("Not divisible by 3", number % 3);
}

//0 - falsy
var year = 2024;
if (year % 4 === 0) {
  console.log("This is a leap year");
} else {
  console.log("This is not a leap year");
}

// 2, 3, 5
var marks2 = 75;
// if (marks2 > 80) {
//   console.log("Grade A");
// }
// if (marks2 > 70) {
//   console.log("Grade B");
// }
// if (marks2 > 60) {
//   console.log("Grade C");
// }
// if (marks2 > 50) {
//   console.log("Grade D");
// }
// if (marks2 > 33) {
//   console.log("Grade E");
// }
// if (marks2 < 33) {
//   console.log("Grade F");
// }

// if...else...if statement

if (marks2 > 80 && marks2 <= 100) {
  console.log("Grade A");
} else if (marks2 > 50 && marks2 <= 60) {
  console.log("Grade D");
} else if (marks2 > 70 && marks2 <= 80) {
  console.log("Grade B");
} else if (marks2 > 60 && marks2 <= 70) {
  console.log("Grade C");
} else if (marks2 >= 33 && marks2 <= 50) {
  console.log("Grade E");
} else if (marks2 < 33 && marks2 >= 0) {
  console.log("Grade F");
} else {
  console.log("Incorrect Input");
}

// switch case ....
// switch (key) {
//   case value:
//     break;

//   default:
//     break;
// }

var monthNum = 1;
switch (monthNum) {
  case 1:
    console.log("January");
    break;
  case 2:
    console.log("Feb.");
    break;
  case 3:
    console.log("March");
    break;
}

var weekday = 12;

switch (weekday) {
  case 1:
    console.log("Monday");
    break;
  case 2:
    console.log("Tuesday");
    break;
  case 3:
    console.log("Wednesday");
    break;
  case 4:
    console.log("Thursday");
    break;
  case 5:
    console.log("Friday");
    break;
  case 6:
    console.log("Saturday");
    break;
  case 7:
    console.log("Sunday");
    break;
  default:
    console.log("Incorrect input");
    break;
}

var monthName = "JAN";

switch (monthName.toLowerCase()) {
  case "jan":
    console.log("This month has 31 days");
    break;
  case "feb":
    console.log("This month has 28 days");
    break;
  case "mar":
    console.log("This month has 31 days");
    break;

  default:
    console.log("I'm unable to answer this month days count.");
    break;
}

// abU HUrairah
