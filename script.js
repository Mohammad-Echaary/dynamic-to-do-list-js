const addButton = document.getElementById("add-task-btn");
const taskInput = document.getElementById("task-input");
const taskList = document.getElementById("task-list");

document.addEventListener("DOMContentLoaded", () => {
  loadTasks();
  addButton.addEventListener("click", () => addTask());
  taskInput.addEventListener("keypress", (event) => {
    if (event.key == "Enter") {
      addTask();
    }
  });
});
function loadTasks() {
  const storedTasks = JSON.parse(localStorage.getItem("tasks") || "[]");
  storedTasks.forEach((taskText) => addTask(taskText, false)); // 'false' indicates not to save again to Local Storage
}

function addTask(taskText, save = true) {
  // Task creation logic remains the same
  taskText = taskInput.value.trim();
  if (taskText.length == 0) {
    alert("enter a task.");
  } else {
    let li = document.createElement("li");
    li.textContent = taskText;
    let removeBtn = document.createElement("button");
    removeBtn.classList.add("remove-btn");
    removeBtn.textContent = "Remove";
    removeBtn.onclick = () => {
      li.remove();
    };
    li.appendChild(removeBtn);
    taskList.appendChild(li);
    taskInput.value = "";
  }
  if (save) {
    const storedTasks = JSON.parse(localStorage.getItem("tasks") || "[]");
    storedTasks.push(taskText);
    localStorage.setItem("tasks", JSON.stringify(storedTasks));
  }
}
