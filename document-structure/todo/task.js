document.addEventListener('DOMContentLoaded', function() {
    const tasksList = document.getElementById('tasks__list');
    const taskInput = document.getElementById('task__input');
    const tasksForm = document.getElementById('tasks__form');

    function createTaskElement(taskText) {

        const taskElement = document.createElement('div');
        taskElement.classList.add('task');

        const taskTitle = document.createElement('div');
        taskTitle.classList.add('task__title');
        taskTitle.textContent = taskText;

        const removeButton = document.createElement('a');
        removeButton.href = '#';
        removeButton.classList.add('task__remove');
        removeButton.innerHTML = '&times;';

        removeButton.addEventListener('click', function(event) {
            event.preventDefault(); 
            taskElement.remove(); 
        });

        taskElement.appendChild(taskTitle);
        taskElement.appendChild(removeButton);
        
        return taskElement;
    }

    function addTask() {
        const taskText = taskInput.value.trim();

        if (taskText === '') {
            return;
        }

        const newTask = createTaskElement(taskText);
        tasksList.appendChild(newTask);

        taskInput.value = '';
    }

    tasksForm.addEventListener('submit', function(event) {
        event.preventDefault(); 
        addTask();
    });

    taskInput.addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            event.preventDefault(); 
            addTask();
        }
    });
});