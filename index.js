// reference the DOM:
const taskInput = document.getElementById('taskInput');
const addTaskButton = document.getElementById('addTaskBtn');
const taskList = document.getElementById('taskList');

function createTask() {
  const taskInputText = taskInput.value.trim();
  if (!taskInputText) {
    alert('Please enter a task.');
    return;
  };

  const taskElement = document.createElement('li');
  taskElement.textContent = taskInputText;

  const taskDeleteButton = document.createElement('button');
  taskDeleteButton.textContent = "Delete";
  taskDeleteButton.classList.add('delete-btn');
  taskDeleteButton.addEventListener('click', function() {
    taskElement.remove();
  });

  taskElement.appendChild(taskDeleteButton);
  taskList.appendChild(taskElement);
  taskInput.value = '';
};

addTaskButton.addEventListener('click', createTask);