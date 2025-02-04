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

  const taskItem = document.createElement('li');
  taskItem.classList.add('task-item');
  // taskItem.textContent = taskInputText;

  const taskTextElement = document.createElement('span');
  taskTextElement.classList.add('task-text');
  taskTextElement.textContent = taskInputText;

  const taskCheckbox = document.createElement('input');
  taskCheckbox.type = 'checkbox';
  taskCheckbox.classList.add('task-checkbox');
  taskCheckbox.addEventListener('change', function() {
    if (taskCheckbox.checked) {
      taskTextElement.classList.add('completed');
    } else {
      taskTextElement.classList.remove('completed');
    }
  });

  const taskDeleteButton = document.createElement('button');
  taskDeleteButton.textContent = "Delete";
  taskDeleteButton.classList.add('delete-btn');
  taskDeleteButton.addEventListener('click', function() {
    taskItem.remove();
  });

  taskItem.appendChild(taskCheckbox);
  taskItem.appendChild(taskTextElement);
  taskItem.appendChild(taskDeleteButton);
  taskList.appendChild(taskItem);
  taskInput.value = '';
};

addTaskButton.addEventListener('click', createTask);