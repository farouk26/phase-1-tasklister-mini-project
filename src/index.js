document.addEventListener("DOMContentLoaded", () => {
  // your code here
  const form = document.getElementById("create-task-form");
  const inputDescription = document.getElementById("new-task-description");
  const taskList = document.getElementById("tasks");
  form.addEventListener("submit", function(e){
    event.preventDefault();
    const taskDescription = inputDescription.value;
    const newTask = document.createElement("li");
    newTask.textContent = taskDescription;
    taskList.appendChild(newTask);
    inputDescription.value = "";
    const deleteTask = document.createElement("button");
    deleteTask.textContent = "Delete Task";
    deleteTask.addEventListener("click", function(){
      taskList.removeChild(newTask);
    });
    newTask.appendChild(deleteTask);
    taskList.appendChild(newTask);
    taskDescription.value = "";
  });
});
