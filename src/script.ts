const todoList = document.getElementById("todo-list") as HTMLUListElement;
const newTaskInput = document.getElementById("new-task") as HTMLInputElement;
const addTaskButton = document.getElementById("add-task") as HTMLButtonElement;

// Função para adicionar uma nova tarefa
function addTask(taskText: string): void {
  if (!taskText) return;

  const listItem = document.createElement("li");
  listItem.textContent = taskText;

  listItem.addEventListener("click", () => {
    listItem.classList.toggle("completed");
  });

  todoList.appendChild(listItem);
  newTaskInput.value = "";
}

// Evento para o botão de adicionar tarefa
addTaskButton.addEventListener("click", () => {
  addTask(newTaskInput.value);
});

// Permite adicionar tarefa ao pressionar Enter
newTaskInput.addEventListener("keypress", (event: KeyboardEvent) => {
  if (event.key === "Enter") {
    addTask(newTaskInput.value);
  }
});
