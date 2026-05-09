// const heading = (document.querySelector("h1").textContent = "JS connected");
// console.log(heading);
const hello = document.querySelector("#hello");

// hello.style.color = "blue";
// heading.style.color = "blue";

const btnCli = document.querySelector("#buttonClick");

btnCli.addEventListener("click", () => {
  hello.textContent = "new";
  alert("hello");
  console.log(btnCli);
});

const btnInput = document.querySelector("#btn3");

btnInput.addEventListener("click", () => {
  alert("hello world");
});

const ageValue = document.querySelector("#age1");
const ageValue1 = document.querySelector("#age2");
const para = document.querySelector("#result");
const btn6 = document.querySelector("#btn6");
btn6.addEventListener("click", () => {
  para.textContent = Number(ageValue.value) + Number(ageValue1.value);
});
const btn3 = document.querySelector("#btn3");
btn3.addEventListener("click", () => {
  const age = Number(ageValue.value);
  if (age >= 18) {
    console.log("age is greater");
    alert("the age is greater");
  } else {
    console.log("Age is smaller");
    alert("The age is bigger");
  }
});

const textInput = document.querySelector("#textInput");
const btnInputUi = document.querySelector("#btnInputUl");
const textList = document.querySelector("#textList");

btnInputUi.addEventListener("click", () => {
  const li = document.createElement("li");
  li.textContent = textInput.value;

  textList.appendChild(li);
  textInput.value = "";
});
