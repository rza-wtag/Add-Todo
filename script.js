const taskList = document.getElementById('taskList');
const taskItem = document.createElement('div');
const titleTask = document.getElementById('taskTitle');


function openForm() {
    document.getElementById('taskForm').style.display = 'block';
}

function closeForm() {
    document.getElementById('taskForm').style.display = 'none';
}

function addTask() {
    const taskTitle = titleTask.value;
    if (taskTitle) {
        taskItem.className = 'task-item';
        taskItem.innerText = taskTitle;
        taskList.appendChild(taskItem);
        titleTask.value = '';
        closeForm();
    } else {
        alert('Please enter a task title');
    }
}
