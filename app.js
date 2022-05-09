// declaring elements
const container = document.querySelector(".container");
const todoForm = document.querySelector(".todo-body");
const todoInput = document.getElementById("todo-input");
const todoAddInput = document.getElementById("todo-add");
const todoList = document.querySelector(".lists");

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
}

// add todo
const addTodo = (e) => {
  e.preventDefault();
  //getting the input value
  const inputValue = todoInput.value;
  //generating new id for every item
  const todoId = Date.now().toString();
  //calling another function to add every element on list
  createElement(inputValue, todoId);
};

//adding listeners to the submit button
todoForm.addEventListener("submit", addTodo);
