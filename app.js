// declaring elements
const container = document.querySelector(".container");
const todoForm = document.querySelector(".todo-body");
const todoInput = document.getElementById("todo-input");
const todoAddInput = document.getElementById("todo-add");
const todoList = document.querySelector(".lists");
const message = document.getElementById("message");

// show message
const showMessage = (text, status) => {
  message.innerText = text;
  message.classList.add(`message-for-${status}`);
  setTimeout(() => {
    message.innerText = "";
    message.classList.remove(`message-for-${status}`);
  }, 1000);
};

// creating New Element
function createElement(inputValue, todoId) {
  const todoNewElement = document.createElement("li");
  todoNewElement.id = todoId;
  todoNewElement.classList.add("new-li-style");
  todoNewElement.innerHTML = `
  <span> 
  ${inputValue} 
  </span>
  <span> <button> <i class="fa fa-trash"> </i> </button> </span>`;
  todoList.appendChild(todoNewElement);
  showMessage("New todo is added.", "adding");

  //storing every element on local Storage
  /* let todos = localStorage.getItem("todoList");
  if (todos) {
    JSON.parse(todos);
    todos.push({ todoId, inputValue });
    localStorage.setItem("todoList", JSON.stringify(todos));
  } else {
    todos = [];
    localStorage.setItem("todoList", JSON.stringify(todos));
  } */

  //easy way to add every item on localStorage
  const todos = localStorage.getItem("todoList")
    ? JSON.parse(localStorage.getItem("todoList"))
    : [];
  todos.push({ todoId, inputValue });
  localStorage.setItem("todoList", JSON.stringify(todos));
  todoInput.value = "";
}

// add todo
const addTodo = (e) => {
  e.preventDefault();
  //getting the input value
  const inputValue = todoInput.value;
  //generating unique id for every item
  const todoId = Date.now().toString();
  //calling another function to add every element on list
  createElement(inputValue, todoId);
};

//adding listeners to the submit button
todoForm.addEventListener("submit", addTodo);
