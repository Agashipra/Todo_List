const taskInput = document.getElementById('taskInput');
const addTaskButton = document.getElementById('addTaskButton');
const taskList = document.getElementById('taskList');
const filterSelect = document.getElementById('filter');

addTaskButton.addEventListener('click', addTask);
taskList.addEventListener('click', handleTaskClick);
filterSelect.addEventListener('change', filter