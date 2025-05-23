document.getElementById('addBtn').addEventListener('click', addTask);
document.getElementById('clearAll').addEventListener('click', clearAllTasks);

function addTask() {
  const input = document.getElementById('taskInput');
  const taskText = input.value.trim();
  if (taskText === '') return;
  const li = document.createElement('li');
  const span = document.createElement('span');
  span.textContent = taskText;

  const doneBtn = document.createElement('button');
  doneBtn.textContent = 'Done';
  doneBtn.onclick = () => {
    span.classList.toggle('completed');
    updateTaskCount();
  };

  const delBtn = document.createElement('button');
  delBtn.textContent = 'Remove';
  delBtn.onclick = () => {
    li.remove();
    updateTaskCount();
  };

  li.appendChild(span);
  li.appendChild(doneBtn);
  li.appendChild(delBtn);

  document.getElementById('taskList').appendChild(li);
  input.value = '';
  updateTaskCount();
}

function clearAllTasks() {
  document.getElementById('taskList').innerHTML = '';
  updateTaskCount();
}

function updateTaskCount() {
  const totalTasks = document.querySelectorAll('#taskList li').length;
  const completedTasks = document.querySelectorAll('#taskList .completed').length;
  document.getElementById('taskCount').textContent = `Total: ${totalTasks} | Completed: ${completedTasks}`;
}