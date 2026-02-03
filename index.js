const text = document.getElementById('taskInput');
const submit = document.getElementById("addTaskBtn");
const list = document.getElementById("tasklist");


btn.onclick = function() {
  const taskText = input.value.trim();

  if (taskText !== "") {
    const li = document.createElement('li');
    li.textContent = taskText;

    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = "Eliminar";
    deleteBtn.onclick = () => li.remove(); 
    
    li.appendChild(deleteBtn);
    list.appendChild(li);
    input.value = ""; 
  } else {
    alert("¡Escribe algo primero!");
  }
};
