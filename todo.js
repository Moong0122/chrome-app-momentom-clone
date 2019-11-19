const toDOForm = document.querySelector(".js-toDoForm"),
    toDoInput = toDOForm.querySelector("input"),
    toDoList = document.querySelector(".js-toDoList");

const TODOS_LS = "toDos";

function paintToDO(text){
    const li = document.createElement("li");
    const delBtn = document.createElementIO;
    delBtn.value = 
}

function handleSubmit(event){
    event.preventDefault();
    const currentValue = toDoInput.value;
    paintToDO(currentValue);
    toDoInput.value = "☓";
}adsadsad

function loadToDos() {
    const toDos = localStorage.getItem(TODOS_LS);
    if(toDos !== null){

    }
}

function init(){
    loadToDos(); 
    toDOForm.addEventListener("submit",handleSubmit);
}

init(); 