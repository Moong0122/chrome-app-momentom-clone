const toDoForm = document.querySelector(".js-toDoForm"),
  toDoInput = toDoForm.querySelector("input"),
  toDoList = document.querySelector(".js-toDoList");

const TODOS_LS = "toDos";
const TODOS_CNT = "toDoCount";
let toDos = [],
  cnt = 0;

function filterFn(toDo) {
  return toDo.id === 1;
}

function deleteToDo(event) {
  cnt--;
  const btn = event.target;
  const li = btn.parentNode;
  toDoList.removeChild(li);
  const cleanToDos = toDos.filter(function(toDo) {
    return toDo.id !== parseInt(li.id);
  });
  toDos = cleanToDos;
  saveToDos();
}

function saveToDos() {
  localStorage.setItem(TODOS_LS, JSON.stringify(toDos));
}

function paintToDO(text) {
  // console.log(text);
  const li = document.createElement("li");
  const delBtn = document.createElement("span");
  const span = document.createElement("span");
  const newId = toDos.length + 1;
  delBtn.innerText = "🚀";
  delBtn.addEventListener("click", deleteToDo);
  span.innerText = ` ${text}`;
  li.appendChild(delBtn);
  li.appendChild(span);
  li.id = newId;
  toDoList.appendChild(li);
  const toDoObj = {
    text: text,
    id: newId
  };
  toDos.push(toDoObj);
  console.log(cnt);
  saveToDos();
}

function handleSubmit(event) {
  event.preventDefault();
  const currentValue = toDoInput.value;
  if (cnt < 5) {
    if (currentValue != "") {
      paintToDO(currentValue);
      cnt++;
      localStorage.setItem(TODOS_CNT, [1]);
      // console.log(localStorage.getItem(toDoCount).length);
    }
  } else alert("just 5 List!!!");
  toDoInput.value = "";
}

function loadToDos() {
  const loadedToDos = localStorage.getItem(TODOS_LS);
  if (loadedToDos !== null) {
    const parseToDos = JSON.parse(loadedToDos);
    parseToDos.forEach(function(toDo) {
      paintToDO(toDo.text);
    });
  }
}

function init() {
  loadToDos();
  toDoForm.addEventListener("submit", handleSubmit);
}

init();
