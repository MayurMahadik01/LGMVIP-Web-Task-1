    let tasks = [];   
    function addTask() {
      const taskInput = document.getElementById("taskInput");
      const taskList = document.getElementById("taskList");

      if (taskInput.value.trim() === "") {
        alert("Please enter a task.");
        return;
      }
      
      const task = {
        name: taskInput.value,
        done: false
      };     
      tasks.push(task);     
      taskInput.value = "";
       renderTaskList();
    }   
    function removeTask(index) {
      tasks.splice(index, 1);
      renderTaskList();
    }    
    function toggleTask(index) {
      tasks[index].done = !tasks[index].done;
      renderTaskList();
    }
    function renderTaskList() {
      const taskList = document.getElementById("taskList");
      taskList.innerHTML = "";

      tasks.forEach((task, index) => {
        const taskItem = document.createElement("div");
        taskItem.classList.add("task-item");

        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.checked = task.done;
        checkbox.addEventListener("change", () => toggleTask(index));

        const taskName = document.createElement("span");
        taskName.style.textDecoration = task.done ? "line-through" : "none";
        taskName.innerText = task.name;

        const deleteButton = document.createElement("button");
        deleteButton.classList.add("delete-button");
        deleteButton.innerText = "Delete";
        deleteButton.addEventListener("click", () => removeTask(index));

        taskItem.appendChild(checkbox);
        taskItem.appendChild(taskName);
        taskItem.appendChild(deleteButton);

        taskList.appendChild(taskItem);
      });
    }
