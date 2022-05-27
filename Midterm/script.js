window.onload = loadTasks;

document.querySelector("form").addEventListener("submit", e => {
    e.preventDefault();
    addTask();
  });
  document.querySelector("#filterToDo").addEventListener("click", filterTasks);
 
function loadTasks() {
  try {
    let tasks = Array.from(JSON.parse(localStorage.getItem("tasks")));

    tasks.forEach(task => {
        const list = document.querySelector("ul");
        const li = document.createElement("li");
        li.innerHTML = `<input type="checkbox" onclick="taskComplete(this)" class="check" ${task.completed ? 'checked' : ''}>
              <input type="text" value="${task.task}" class="task ${task.completed ? 'completed' : ''}" onfocus="getCurrentTask(this)" onblur="editTask(this)">
              <i class="fa fa-trash" onclick="removeTask(this)"></i>`;
        list.insertBefore(li, list.children[0]);
      });
  } catch (error) {
    document.querySelector('ul').innerHTML = 'Add to the list!'
  }
  
}

function addTask() {
    const task = document.querySelector("form input");
    const list = document.querySelector("ul");
    
    if (task.value === "") {
      alert("Please add some tasks!");
      return false;
    }
    
  localStorage.setItem("tasks", JSON.stringify([...JSON.parse(localStorage.getItem("tasks") || "[]"), { task: task.value, completed: false }]));

  
  const li = document.createElement("li");
  li.innerHTML = `<input type="checkbox" onclick="taskComplete(this)" class="check">
      <input type="text" value="${task.value}" class="tasks">
      <span class="delete" style="color: #fff" onclick="removeTask(this)">X</span>`;
  list.insertBefore(li, list.children[0]);
  
  task.value = "";
}
let filter = document.querySelector('#filter');


function taskComplete(event) {
    let tasks = Array.from(JSON.parse(localStorage.getItem("tasks")));
    tasks.forEach(task => {
      if (task.task === event.nextElementSibling.value) {
        task.completed = !task.completed;
      }
    });
    localStorage.setItem("tasks", JSON.stringify(tasks));
    event.nextElementSibling.classList.toggle("completed");
  }

  function removeTask(event) {
    let tasks = Array.from(JSON.parse(localStorage.getItem("tasks")));
    tasks.forEach(task => {
      if (task.task === event.parentNode.children[1].value) {
       
        tasks.splice(tasks.indexOf(task), 1);
      }
    });
    localStorage.setItem("tasks", JSON.stringify(tasks));
    event.parentElement.remove();
  }
function filterTasks(e){
  
  let toDoItems = document.querySelector("#toDo");
    let completed = toDoItems.querySelectorAll('.tasks');
    
    completed.forEach(function (toDoEl){
      const targetEl = toDoEl.parentElement;
      switch (e.target.value){
        case "all":
          targetEl.style.display = 'block';
          break;
        
        case "completed":
          if(toDoEl.classList.contains("completed")) {
            targetEl.style.display = "block";
          } else{
            targetEl.style.display = "none";
          }
          break;
          case "uncompleted":
              if (toDoEl.classList.contains("completed")) {
                targetEl.style.display = "none";
              } else {
                targetEl.style.display = "block";
              }
              break;
          
      }
    })
  }