"use strict";
const todoList = document.getElementById("todo-list");
const newTaskInput = document.getElementById("new-task");
const addTaskButton = document.getElementById("add-task");
// Função para adicionar uma nova tarefa
function addTask(taskText) {
    if (!taskText)
        return;
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
newTaskInput.addEventListener("keypress", (event) => {
    if (event.key === "Enter") {
        addTask(newTaskInput.value);
    }
});