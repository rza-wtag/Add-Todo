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

        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.className = 'task-checkbox';
        checkbox.onclick = function() {
            markTaskAsDone(taskItem, checkbox);
        };
        taskItem.appendChild(checkbox);

        const taskText = document.createElement('span');
        taskText.innerText = taskTitle;
        taskItem.appendChild(taskText);

        const editInput = document.createElement('input');
        editInput.type = 'text';
        editInput.className = 'edit-input';
        editInput.style.display = 'none';
        taskItem.appendChild(editInput);

        const editButton = document.createElement('button');
        editButton.innerText = 'Edit';
        editButton.onclick = function() {
            editTask(taskItem, taskText, editInput, editButton);
        };
        taskItem.appendChild(editButton);

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

function editTask(taskItem, taskText, editInput, editButton) {
    if (editButton.innerText === 'Edit') {
        editInput.value = taskText.innerText;
        taskText.style.display = 'none';
        editInput.style.display = 'block';
        editButton.innerText = 'Save';
    } else {
        taskText.innerText = editInput.value;
        taskText.style.display = 'block';
        editInput.style.display = 'none';
        editButton.innerText = 'Edit';
    }
}

function markTaskAsDone(taskItem, checkbox) {
    if (checkbox.checked) {
        taskItem.classList.add('done');
    } else {
        taskItem.classList.remove('done');
    }
}
