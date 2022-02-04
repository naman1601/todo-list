import { publish } from './event-manager.js';
import { getProjectList } from './events.js';
import deleteImage from './images/delete-icon.svg';
import addImage from './images/add-icon.svg';
import editImage from './images/edit-icon.svg';
import doneImage from './images/done-icon.svg';

function createProjectElement(project) {
    const projectElement = document.createElement('div');
    projectElement.classList.add('project-element');
    projectElement.dataset.projectUid = project.UID;

    const projectName = document.createElement('div');
    projectName.classList.add('project-name');
    projectName.textContent = project.name;
    projectElement.appendChild(projectName);

    const editProjectButtonContainer = document.createElement('div');
    editProjectButtonContainer.classList.add('edit-project-button-container');

    const editProjectButton = new Image();
    editProjectButton.classList.add('edit-project-button');
    editProjectButton.src = editImage;

    editProjectButton.addEventListener('click', () => {
        publish('EDIT_PROJECT_BUTTON_CLICKED', project.UID);
    });

    editProjectButtonContainer.appendChild(editProjectButton);
    projectElement.appendChild(editProjectButtonContainer);

    const deleteProjectButtonContainer = document.createElement('div');
    deleteProjectButtonContainer.classList.add('delete-project-button-container');

    const deleteProjectButton = new Image();
    deleteProjectButton.classList.add('delete-project-button');
    deleteProjectButton.src = deleteImage;

    deleteProjectButton.addEventListener('click', () => {
        publish('DELETE_PROJECT_BUTTON_CLICKED', project.UID);
    });

    deleteProjectButtonContainer.appendChild(deleteProjectButton);
    projectElement.appendChild(deleteProjectButtonContainer);

    projectElement.addEventListener('click', (e) => {
        if (e.target !== deleteProjectButton && e.target !== editProjectButton) {
            publish('PROJECT_ELEMENT_CLICKED', project.UID);
        }
    });

    return projectElement;
}

function updateProjectContainer() {
    const projectList = getProjectList();
    const projectContainer = document.querySelector('#project-container');
    projectContainer.innerHTML = '';
    projectList.forEach(project => {
        const projectElement = createProjectElement(project);
        projectContainer.appendChild(projectElement);
    });
}

function setActiveProject(projectUID) {
    const projectElements = document.querySelectorAll('.project-element');
    projectElements.forEach(projectElement => {
        if (projectElement.dataset.projectUid === projectUID) {
            projectElement.classList.add('active-project');
        } else {
            projectElement.classList.remove('active-project');
        }
    });
}

function switchToProject(projectUID) {
    const projectList = getProjectList();
    const foundProject = projectList.some(project => project.UID === projectUID);

    if (!foundProject) {
        switchToProject(projectList[0].UID);
        return;
    }

    publish('SWITCH_TO_PROJECT', projectUID);
}

function activatePojectForm() {
    const projectFormContainer = document.querySelector('#project-form-container');
    projectFormContainer.style.visibility = 'visible';
    const projectFormInput = document.querySelector('#project-form-input');
    projectFormInput.focus();
}

function exitProjectForm() {
    const projectFormContainer = document.querySelector('#project-form-container');
    projectFormContainer.style.visibility = 'hidden';
    const projectFormInput = document.querySelector('#project-form-input');
    projectFormInput.value = '';
}

function createProjectFormButtons() {
    const projectFormButtons = document.createElement('div');
    projectFormButtons.id = 'project-form-buttons';

    const projectFormConfirm = document.createElement('button');
    projectFormConfirm.id = 'project-form-confirm';
    projectFormConfirm.classList.add('project-form-button');
    projectFormConfirm.type = 'button';
    projectFormConfirm.textContent = 'Confirm';

    const projectFormCancel = document.createElement('button');
    projectFormCancel.id = 'project-form-cancel';
    projectFormCancel.classList.add('project-form-button');
    projectFormCancel.type = 'button';
    projectFormCancel.textContent = 'Cancel';

    projectFormConfirm.addEventListener('click', (e) => {
        publish('PROJECT_FORM_CONFIRM_CLICKED', e.target.closest("#project-form"));
    });

    projectFormCancel.addEventListener('click', (e) => {
        publish('PROJECT_FORM_CANCEL_CLICKED');
    });

    projectFormButtons.appendChild(projectFormCancel);
    projectFormButtons.appendChild(projectFormConfirm);
    return projectFormButtons;
}

function createProjectForm() {
    const projectFormContainer = document.createElement('div');
    projectFormContainer.id = 'project-form-container';
    projectFormContainer.classList.add('overlay');

    const projectForm = document.createElement('form');
    projectForm.id = 'project-form';

    const projectFormInput = document.createElement('input');
    projectFormInput.id = 'project-form-input';
    projectFormInput.type = 'text';
    projectFormInput.placeholder = 'Project name';
    projectForm.appendChild(projectFormInput);

    projectForm.append(createProjectFormButtons());
    projectFormContainer.appendChild(projectForm);

    return projectFormContainer;
}


function createNewProjectButton() {
    const newProjectButton = document.createElement('div');
    newProjectButton.id = 'new-project-button';

    const newProjectButtonText = document.createElement('div');
    newProjectButtonText.id = 'new-project-button-text';
    newProjectButtonText.innerText = 'NEW PROJECT';
    newProjectButton.appendChild(newProjectButtonText);

    const newProjectButtonIcon = new Image();
    newProjectButtonIcon.id = 'new-project-button-icon';
    newProjectButtonIcon.src = addImage;
    newProjectButton.appendChild(newProjectButtonIcon);

    newProjectButton.addEventListener('click', () => {
        publish('NEW_PROJECT_BUTTON_CLICKED');
    });

    return newProjectButton;
}

function createProjectTitle() {
    const projectTitle = document.createElement('div');
    projectTitle.id = 'project-title';
    projectTitle.innerText = 'Projects';
    return projectTitle;
}

function createProjectHeader() {
    const projectHeader = document.createElement('div');
    projectHeader.id = 'project-header';
    projectHeader.appendChild(createProjectTitle());
    projectHeader.appendChild(createNewProjectButton());
    return projectHeader;
}

function createProjectContainer() {
    const projectContainer = document.createElement('div');
    projectContainer.id = 'project-container';
    return projectContainer;
}

function createProjectArea() {
    const projectArea = document.createElement('div');
    projectArea.id = 'project-area';
    projectArea.appendChild(createProjectHeader());
    projectArea.appendChild(createProjectContainer());
    return projectArea;
}


function getTaskBackgroundColor(task) {
    if(task.priority === 'urgent') {
        return 'orange';

    } else if(task.priority === 'medium') {
        return 'yellow';

    } else {
        return 'cyan';
    }
}

function getTaskStatus(task) {
    const taskStatus = document.createElement('div');
    taskStatus.classList.add('task-status');
    taskStatus.style.fontWeight = 'bold';
    const deadlineDate = new Date(task.deadline + 'T23:59:59');
    const curDate = new Date();

    if(!task.done) {
        if (deadlineDate < curDate) {
            taskStatus.textContent = 'OVERDUE';
            taskStatus.style.color = 'red';

        } else if (deadlineDate - curDate <= (24 * 60 * 60 * 1000)) {
            taskStatus.textContent = 'DUE TODAY';
        }
    }

    return taskStatus;
}

function createTaskElement(task) {
    const taskElement = document.createElement('div');
    taskElement.classList.add('task-element');

    taskElement.style.backgroundColor = getTaskBackgroundColor(task);
    taskElement.dataset.taskUid = task.UID;

    const taskDoneButtonContainer = document.createElement('div');
    taskDoneButtonContainer.classList.add('task-done-button-container');
    const taskDoneButton = new Image();
    taskDoneButton.classList.add('task-done-button');
    taskDoneButton.classList.add('task-button');
    taskDoneButton.src = doneImage;

    taskDoneButton.addEventListener('click', () => {
        publish('DONE_TASK_BUTTON_CLICKED', {projectUID: task.projectUID, taskUID: task.UID});
    });

    taskDoneButtonContainer.appendChild(taskDoneButton);
    taskElement.appendChild(taskDoneButtonContainer);

    const taskName = document.createElement('div');
    taskName.classList.add('task-name');
    taskName.textContent = task.name;
    taskElement.appendChild(taskName);

    const taskStatusContainer = document.createElement('div');
    taskStatusContainer.classList.add('task-status-container');
    taskStatusContainer.appendChild(getTaskStatus(task));
    taskElement.appendChild(taskStatusContainer);

    const dateFormatOptions = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const taskDeadlineContainer = document.createElement('div');
    taskDeadlineContainer.classList.add('task-deadline-container');
    const taskDeadline = document.createElement('div');
    taskDeadline.classList.add('task-deadline');
    taskDeadline.textContent = (new Date(task.deadline)).toLocaleDateString('en-US', dateFormatOptions);
    taskDeadlineContainer.appendChild(taskDeadline);
    taskElement.appendChild(taskDeadlineContainer);

    const editTaskButtonContainer = document.createElement('div');
    editTaskButtonContainer.classList.add('edit-task-button-container');
    const editTaskButton = new Image();
    editTaskButton.classList.add('edit-task-button');
    editTaskButton.classList.add('task-button');
    editTaskButton.src = editImage;
    editTaskButton.addEventListener('click', (e) => {
        publish('EDIT_TASK_BUTTON_CLICKED', {projectUID: task.projectUID, taskUID: task.UID});
    });
    editTaskButtonContainer.appendChild(editTaskButton);
    taskElement.appendChild(editTaskButtonContainer);

    const deleteTaskButtonContainer = document.createElement('div');
    deleteTaskButtonContainer.classList.add('delete-task-button-container');
    const deleteTaskButton = new Image();
    deleteTaskButton.classList.add('delete-task-button');
    deleteTaskButton.classList.add('task-button');
    deleteTaskButton.src = deleteImage;
    deleteTaskButton.addEventListener("click", () => {
        publish('DELETE_TASK_BUTTON_CLICKED', {projectUID: task.projectUID, taskUID: task.UID});
    });
    deleteTaskButtonContainer.appendChild(deleteTaskButton);
    taskElement.appendChild(deleteTaskButtonContainer);

    if (task.done) {
        taskElement.style.textDecoration = 'line-through';
        taskElement.style.color = '#ccc';
        taskDoneButton.style.backgroundColor = 'green';
    }

    return taskElement;
}

function updateTaskContainer(projectUID) {
    const projectList = getProjectList();
    const taskContainer = document.querySelector('#task-container');
    taskContainer.innerHTML = '';
    taskContainer.parentElement.dataset.projectUid = projectUID;

    for (let projectIndex = 0; projectIndex < projectList.length; projectIndex++) {
        if (projectList[projectIndex].UID == projectUID) {
            projectList[projectIndex].tasks.sort(
                (task1, task2) => {
                    if(task1.done === task2.done) {
                        return new Date(task1.deadline) - new Date(task2.deadline);

                    } else if(task1.done) {
                        return 1;

                    } else {
                        return -1;

                    }
                }
            );

            for (let taskIndex = 0; taskIndex < projectList[projectIndex].tasks.length; taskIndex++) {
                const taskElement = createTaskElement(projectList[projectIndex].tasks[taskIndex]);
                taskContainer.appendChild(taskElement);
            }

            break;
        }
    }
}

function getTask(projectUID, taskUID) {
    const projectList = getProjectList();
    for (let projectIndex = 0; projectIndex < projectList.length; projectIndex++) {
        if (projectList[projectIndex].UID == projectUID) {
            for (let taskIndex = 0; taskIndex < projectList[projectIndex].tasks.length; taskIndex++) {
                if (projectList[projectIndex].tasks[taskIndex].UID == taskUID) {
                    return projectList[projectIndex].tasks[taskIndex];
                }
            }
        }
    }
}

function fillTaskForm(projectUID, taskUID) {
    const task = getTask(projectUID, taskUID);
    const taskForm = document.querySelector('#task-form');
    taskForm.querySelector('#task-name-input').value = task.name;
    taskForm.querySelector('#task-priority-input').value = task.priority;
    taskForm.querySelector('#task-date-input').value = task.deadline;
}

function activateTaskForm() {
    const taskFormContainer = document.querySelector('#task-form-container');
    taskFormContainer.style.visibility = 'visible';
    const taskNameInput = document.querySelector('#task-name-input');
    taskNameInput.focus();
}

function exitTaskForm() {
    const taskFormContainer = document.querySelector('#task-form-container');
    taskFormContainer.style.visibility = 'hidden';
    const taskForm = document.querySelector('#task-form');
    taskForm.reset();
}

function createTaskFormButtons() {
    const taskFormButtons = document.createElement('div');
    taskFormButtons.id = 'task-form-buttons';

    const taskFormConfirm = document.createElement('button');
    taskFormConfirm.id = 'task-form-confirm';
    taskFormConfirm.classList.add('task-form-button');
    taskFormConfirm.type = 'button';
    taskFormConfirm.textContent = 'Confirm';

    const taskFormCancel = document.createElement('button');
    taskFormCancel.id = 'task-form-cancel';
    taskFormCancel.classList.add('task-form-button');
    taskFormCancel.type = 'button';
    taskFormCancel.textContent = 'Cancel';

    taskFormConfirm.addEventListener('click', (e) => {
        publish('TASK_FORM_CONFIRM_CLICKED', e.target.closest("#task-form"));
    });

    taskFormCancel.addEventListener('click', (e) => {
        publish('TASK_FORM_CANCEL_CLICKED');
    });

    taskFormButtons.appendChild(taskFormCancel);
    taskFormButtons.appendChild(taskFormConfirm);
    return taskFormButtons;
}

function createTaskForm() {
    const taskFormContainer = document.createElement('div');
    taskFormContainer.id = 'task-form-container';
    taskFormContainer.classList.add('overlay');

    const taskForm = document.createElement('form');
    taskForm.id = 'task-form';

    const taskNameInputContainer = document.createElement('div');
    taskNameInputContainer.id = 'task-name-input-container';
    const taskNameInput = document.createElement('input');
    taskNameInput.id = 'task-name-input';
    taskNameInput.type = 'text';
    taskNameInput.placeholder = 'Task name';
    taskNameInputContainer.appendChild(taskNameInput);
    taskForm.appendChild(taskNameInputContainer);

    const taskPriorityInputContainer = document.createElement('div');
    taskPriorityInputContainer.id = 'task-priority-input-container';
    const taskPriorityInputLabel = document.createElement('label');
    taskPriorityInputLabel.id = 'task-priority-input-label';
    taskPriorityInputLabel.textContent = 'Priority : ';
    taskPriorityInputContainer.appendChild(taskPriorityInputLabel);
    const taskPriorityInput = document.createElement('select');
    taskPriorityInput.id = 'task-priority-input';
    taskPriorityInput.add(new Option('low', 'low', true));
    taskPriorityInput.add(new Option('medium', 'medium'));
    taskPriorityInput.add(new Option('urgent', 'urgent'));
    taskPriorityInputContainer.appendChild(taskPriorityInput);
    taskForm.appendChild(taskPriorityInputContainer);

    const taskDateInputContainer = document.createElement('div');
    taskDateInputContainer.id = 'task-date-input-container';
    const taskDateInputLabel = document.createElement('label');
    taskDateInputLabel.id = 'task-date-input-label';
    taskDateInputLabel.textContent = 'Deadline : ';
    taskDateInputContainer.appendChild(taskDateInputLabel);
    const taskDateInput = document.createElement('input');
    taskDateInput.id = 'task-date-input';
    taskDateInput.type = 'date';
    taskDateInputContainer.appendChild(taskDateInput);
    taskForm.appendChild(taskDateInputContainer);

    taskForm.append(createTaskFormButtons());
    taskFormContainer.appendChild(taskForm);

    return taskFormContainer;
}

function createNewTaskButton() {
    const newTaskButton = document.createElement('div');
    newTaskButton.id = "new-task-button";

    const newTaskButtonText = document.createElement('div');
    newTaskButtonText.id = "new-task-button-text";
    newTaskButtonText.textContent = "NEW TASK";
    newTaskButton.appendChild(newTaskButtonText);

    const newTaskButtonIcon = new Image();
    newTaskButtonIcon.id = "new-task-button-icon";
    newTaskButtonIcon.src = addImage;
    newTaskButton.appendChild(newTaskButtonIcon);

    newTaskButton.addEventListener("click", (e) => {
        publish("NEW_TASK_BUTTON_CLICKED", e.target.closest('#task-area').dataset.projectUid);
    });

    return newTaskButton;
}

function createTaskHeader() {
    const taskHeader = document.createElement('div');
    taskHeader.id = "task-header";
    taskHeader.appendChild(createNewTaskButton());
    return taskHeader;
}

function createTaskContainer() {
    const taskContainer = document.createElement('div');
    taskContainer.id = "task-container";
    return taskContainer;
}

function createTaskArea() {
    const taskArea = document.createElement('div');
    taskArea.id = "task-area";
    taskArea.appendChild(createTaskHeader());
    taskArea.appendChild(createTaskContainer());
    return taskArea;
}

export {
    createProjectArea,
    createProjectForm,
    activatePojectForm,
    exitProjectForm,
    setActiveProject,
    switchToProject,
    updateProjectContainer,
    createTaskArea,
    createTaskForm,
    activateTaskForm,
    exitTaskForm,
    fillTaskForm,
    updateTaskContainer
};