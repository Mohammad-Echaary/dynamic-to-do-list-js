const addButton = document.getElementById("add-task-btn");
const taskInput = document.getElementById("task-input");
const taskList = document.getElementById("task-list");

document.addEventListener("DOMContentLoaded", () => {
  addButton.addEventListener("click", () => addTask());
  taskInput.addEventListener("keypress", (e) => {
    if (e.key == "Enter") {
      addTask();
    }
  });
});
function addTask() {
  const taskText = taskInput.value.trim();
  if (taskText.length == 0) {
    alert("enter a task.");
  } else {
    let li = document.createElement("li");
    li.textContent = taskText;
    let removeBtn = document.createElement("button");
    removeBtn.className = "remove-btn";
    removeBtn.textContent = "remove";
    removeBtn.onclick = () => {
      li.remove();
    };
    li.appendChild(removeBtn);
    taskList.appendChild(li);
    taskInput.value = "";
  }
}
