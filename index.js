// reference the DOM:
// input
const taskInput = document.getElementById('taskInput');
// add button
const addTaskButton = document.getElementById('addTaskBtn');
// taskList ul
const taskList = document.getElementById('taskList');

// build function that creates a task
//    new task has a delete button
//    new task has a complete checkbox
function createTask() {
  const taskInputText = taskInput.value.trim();
  // do not allow invalid text
  if (!taskInputText) {
    alert('Please enter a task.');
    return;
  };
  const taskElement = document.createElement('li');
  taskElement.textContent = taskInputText;
  taskList.appendChild(taskElement);
  // clear text after added
  taskInput.value = '';
};

// build function that adds the new task to the taskList
addTaskButton.addEventListener('click', createTask);

// build function that deletes a task when delete button is clicked