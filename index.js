const text = document.getElementById('taskInput');
const submit = document.getElementById("addTaskBtn");
const list = document.getElementById("tasklist");

addButton.onclick = () => {
  if (todoInput.value.trim() === '') return;

  const li = document.createElement('li');
  li.innerHTML = `
    ${todoInput.value}
    <button>Delete</button>
  `;

  li.querySelector('button').onclick = () => li.remove();

  todoList.appendChild(li);
  todoInput.value = '';
};

