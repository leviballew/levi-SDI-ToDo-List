document.addEventListener('DOMContentLoaded', loadTasks);

const taskInput = document.getElementById('taskInput');
const addTaskButton = document.getElementById('addTaskBtn');
const taskList = document.getElementById('taskList');

function createTask(taskText = taskInput.value.trim(), isCompleted = false) {
  const taskInputText = taskText;
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
  taskCheckbox.checked = isCompleted;
  if (isCompleted) {
    taskTextElement.classList.add('completed')};
  taskCheckbox.addEventListener('change', function() {
    if (taskCheckbox.checked) {
      taskTextElement.classList.add('completed');
      updateLocalStorage();
    } else {
      taskTextElement.classList.remove('completed');
      updateLocalStorage();
    }
  });

  const taskDeleteButton = document.createElement('button');
  taskDeleteButton.textContent = "Delete";
  taskDeleteButton.classList.add('delete-btn');
  taskDeleteButton.addEventListener('click', function() {
    taskItem.remove();
    updateLocalStorage();
  });

  taskItem.appendChild(taskCheckbox);
  taskItem.appendChild(taskTextElement);
  taskItem.appendChild(taskDeleteButton);
  taskList.appendChild(taskItem);
  taskInput.value = '';
  updateLocalStorage();
};

function updateLocalStorage() {
  const tasks = [];
  document.querySelectorAll('.task-item').forEach(taskItem => {
    const text = taskItem.querySelector('.task-text').textContent;
    const isCompleted = taskItem.querySelector('.task-checkbox').checked;
    tasks.push({ text, isCompleted });
  });
  localStorage.setItem('tasks', JSON.stringify(tasks));
};

function loadTasks() {
  const storedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
  storedTasks.forEach(task => createTask(task.text, task.isCompleted));
};

// event listeners
addTaskButton.addEventListener('click', createTask);
taskInput.addEventListener('keypress', function(event) {
  if (event.key === 'Enter') {
    createTask();
  }
});