const taskList = document.getElementById('taskList');
const taskForm = document.getElementById('taskForm');
const titleTask = document.getElementById('taskTitle');

function openForm() {
    taskForm.style.display = 'block';
}

function closeForm() {
    taskForm.style.display = 'none';
}

function addTask() {
    const taskTitle = titleTask.value;
    if (taskTitle) {
        const taskItem = document.createElement('div');
        taskItem.className = 'task-item';
        taskItem.innerText = taskTitle;

        const deleteButton = document.createElement('button');
        deleteButton.innerText = 'Delete';
        deleteButton.onclick = function() {
            deleteTask(taskItem);
        };

        taskItem.appendChild(deleteButton);
        taskList.appendChild(taskItem);
        titleTask.value = '';
        closeForm();
    } else {
        alert('Please enter a task title');
    }
}

function deleteTask(taskItem) {
    taskList.removeChild(taskItem);
}
