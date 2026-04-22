console.log("Hello world");
let name1 = "hello".toUpperCase();
console.log(name1);
name1 = "hi";
console.log(name1);

const user = { name: "Bob" };
console.log(user);
console.log(user.name);
user.name = "Hello";
console.log(user.name);

const fruits = ["Apple", "Orange", "Kiwi", 9];
console.log(fruits);
console.log(`The students ${fruits}`);
const students = {
  name: "Ram",
  age: 89,
  course: "Bsc Computing",
};
console.log(
  `The name of the student ${students.name} , the age is  ${students.age} , course is  ${students.course}`,
);

console.log(typeof "hello");
console.log(typeof fruits);

console.log("hello".toUpperCase());
name1 = name1.toUpperCase();
console.log(name1);
console.log(name1.toUpperCase());

console.log(user1);
var user1 = "hello";

console.log(user1);
let user1 = "hello";

console.log(user1);
const user1 = "hello";

let user1 = null;
console.log(user1);

let user1;
console.log(user1);

console.log(6 && 5); //Both True
console.log(0 && ""); //Both Flase
console.log(0 && 5); //last true
console.log(6 && 0); //first true

const user = null ?? "Guest";
console.log(user);

const user = {
  name: "Hello",
  age: 56,
  // adress: {
  //   city: "Hello",
  // },
};
console.log(user.name);
console.log(user.adress);
console.log(user?.name);
console.log(user?.adress?.city);

let age = 76;
if (age >= 60) {
  console.log("Old age");
} else {
  console.log("Adult");
}

let age = 76;
result = age >= 60 ? "old age" : "adult";
console.log(result);

//Task Implement switch case for checking the days

let days = 5;
switch (days) {
  case 1:
    console.log("Sunday");
    break;
  case 2:
    console.log("Monday");
    break;
  case 3:
    console.log("Tuesday");
    break;
  case 4:
    console.log("Wednesday");
    break;
  case 5:
    console.log("Thursday");
    break;
  case 6:
    console.log("Friday");
    break;
  case 7:
    console.log("Saturday");
    break;
  default:
    console.log("Not in the link");
}
console.log(days);

function greet(name) {
  console.log(`hello ${name}`);
}
greet("Ram");

function greet() {
  return `Hello`;
}
console.log(greet());

const greet = (name, age) => {
  return `Hello ${name} age is ${age}`;
};
console.log(greet("Alcie", 98));

const greet = (name, age) => `Hello ${name} age is ${age}`;
console.log(greet("Alcie", 98));

const passedPercentage = (marks) => {
  if (marks > 80) return `Distinction`;
  else if (marks > 60) return `First Division`;
  else return `Fail`;
};
console.log(passedPercentage(90));

for (let i = 0; i <= 10; i++) {
  console.log(i);
}

let arr = ["Hello", 9, "Hello"];
for (let i = 0; i <= arr.length - 1; i++) {
  console.log(arr[i]);
}
const student = [
  { name: "hello", marks: 90, age: 90 },
  { name: "hdsdello", marks: 90, age: 90 },
  { name: "helfdlo", marks: 90, age: 78 },
  { name: "heldfdlo", marks: 90, age: 78 },
];

const student1 = student.map((s) => s.name);
console.log(student1);

const student2 = student.filter((s) => s.age >= 90);
console.log(student2);

const student3 = student.find((s) => s.age === 90);
console.log(student3);

console.log(2 == "2");
console.log(0 == false);
console.log(0 === false);
console.log(2 === "2");

//Task given the password compare the
//length if the password contains all the
//uppercase, special character ,output should
//be valid password else invalid
//use arrow function and if else statement

const passwordCheck = (password) => {
  const uppercase = /[A-Z]/.test(password);
  const lowercase = /[a-z]/.test(password);

  if (uppercase && lowercase) {
    console.log("valid");
  } else {
    console.log("invalid");
  }
};
console.log(passwordCheck("@Khadka"));
