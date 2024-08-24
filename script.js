const taskInput = document.getElementById("taskInput");
const addTaskBtn = document.getElementById("addTaskBtn");
const taskList = document.getElementById("taskList");

function addTask() {
  const taskValue = taskInput.value.trim();
  if (taskValue) {
    const listItem = document.createElement("li");
    const taskText = document.createTextNode(taskValue);
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    listItem.appendChild(taskText);
    listItem.appendChild(deleteBtn);
    taskList.appendChild(listItem);
    taskInput.value = "";
    deleteBtn.addEventListener("click", function () {
      taskList.removeChild(listItem);
    });
  } else {
    alert("please enter a task name");
  }
}
addTaskBtn.addEventListener("click", addTask);
