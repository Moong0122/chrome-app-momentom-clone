const form = document.querySelector(".js-form"),
  input = form.querySelector("input"),
  greeting = document.querySelector(".js-greetings"),
  userName = document.getElementById("changeName"),
  nameBlank = "\u00A0";

var greetMessage = ["Hello", "Have a nice day", "You're doing great"],
  MS_NUMBER = 3;

const USER_LS = "currentUser",
  SHOWING_CN = "showing",
  SHOWING_HOVER = "showing_hv";

function randomNum() {
  const number = Math.floor(Math.random() * MS_NUMBER);
  // console.log(number);
  return number;
}

function userLogout() {
  localStorage.removeItem(USER_LS);
}

function saveName(text) {
  localStorage.setItem(USER_LS, text);
}

function handleSubmit(event) {
  event.preventDefault();
  const currentValue = input.value;
  console.log(currentValue);
  paintGreeting(currentValue);
  saveName(currentValue);
}

function askForName() {
  form.classList.add(SHOWING_CN);
  form.addEventListener("submit", handleSubmit);
}

function paintGreeting(text) {
  form.classList.remove(SHOWING_CN);
  greeting.classList.add(SHOWING_CN);
  userName.classList.add(SHOWING_CN);
  // 이름만 hover효과주기 적용중
  userName.classList.add(SHOWING_HOVER);
  greeting.textContent = `${greetMessage[randomNum()]},${nameBlank}`;
  userName.innerText = text;
}

function loadName() {
  userName.addEventListener("click", userLogout);
  const currentUser = localStorage.getItem(USER_LS);
  if (currentUser === null) {
    askForName();
  } else {
    paintGreeting(currentUser);
  }
}

function init() {
  loadName();
}

init();
