document.addEventListener('DOMContentLoaded', () => {
    // Load tasks from local storage
    loadTasks();
});

function addTask() {
    const taskInput = document.getElementById('task-input');
    const taskText = taskInput.value.trim();

    if (taskText !== '') {
        // Create a new task item
        const taskList = document.getElementById('task-list');
        const newTask = document.createElement('li');
        newTask.innerHTML = `
            <span>${taskText}</span>
            <button class="delete-btn" onclick="deleteTask(this)">Delete</button>
        `;

        // Check if task is marked as important
        if (taskText.includes('important')) {
            newTask.classList.add('important');
        }

        // Add new task to the top of the list
        taskList.insertBefore(newTask, taskList.firstChild);

        // Save tasks to local storage
        saveTasks();

        // Clear the input field
        taskInput.value = '';
    }
}

function deleteTask(button) {
    const taskItem = button.parentElement;
    taskItem.remove();

    // Save tasks to local storage
    saveTasks();
}

function saveTasks() {
    const taskList = document.getElementById('task-list');
    const tasks = taskList.innerHTML;
    localStorage.setItem('tasks', tasks);
}

function loadTasks() {
    const taskList = document.getElementById('task-list');
    const savedTasks = localStorage.getItem('tasks');

    if (savedTasks) {
        taskList.innerHTML = savedTasks;
    }
}
