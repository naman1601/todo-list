import { subscribe } from "./event-manager.js";

import {
    activatePojectForm,
    exitProjectForm,
    setActiveProject,
    switchToProject,
    updateProjectContainer,
    updateTaskContainer,
    activateTaskForm,
    exitTaskForm,
    fillTaskForm }
from "./ui.js";

import { addProject, deleteProject, renameProject } from "./project.js";
import { getProjectListFromStorage, updateStorage } from "./storage.js";
import { addTask, deleteTask, updateTask, toggleTaskDone } from "./task.js";

function getProjectList () {
    return getProjectListFromStorage();
}

subscribe("ADDED_PROJECT", function (event, {projectList, newProjectUID}) {
    updateStorage(projectList);
    updateProjectContainer();
    switchToProject(newProjectUID);
});

subscribe("DELETED_PROJECT", function (event, projectList) {
    updateStorage(projectList);
    updateProjectContainer();
    switchToProject(projectList[0].UID);
});

subscribe("RENAMED_PROJECT", function (event, {projectList, renamedProjectUID}) {
    updateStorage(projectList);
    updateProjectContainer();
    switchToProject(renamedProjectUID);
});

subscribe("NEW_PROJECT_BUTTON_CLICKED", function (event) {
    const projectForm = document.querySelector("#project-form");
    projectForm.dataset.newProject = 'true';
    activatePojectForm();
});

subscribe("PROJECT_FORM_CONFIRM_CLICKED", function (event, projectForm) {
    var result = false;

    if(projectForm.dataset.newProject === 'true') {
        result = addProject(projectForm.querySelector("#project-form-input").value);

    } else {
        const projectUID = projectForm.dataset.projectUid;
        const projectName = projectForm.querySelector("#project-form-input").value;
        result = renameProject(projectUID, projectName);
    }

    if(result) {
        exitProjectForm();
    }
});

subscribe("PROJECT_FORM_CANCEL_CLICKED", function (event) {
    exitProjectForm();
});

subscribe("SWITCH_TO_PROJECT", function (event, projectUID) {
    setActiveProject(projectUID);
    updateTaskContainer(projectUID);
});

subscribe("PROJECT_ELEMENT_CLICKED", function (event, projectUID) {
    switchToProject(projectUID);
});

subscribe("DELETE_PROJECT_BUTTON_CLICKED", function (event, projectUID) {
    deleteProject(projectUID);
});

subscribe("EDIT_PROJECT_BUTTON_CLICKED", function (event, projectUID) {
    const projectList = getProjectList();
    const projectForm = document.querySelector("#project-form");
    projectForm.dataset.newProject = 'false';
    projectForm.dataset.projectUid = projectUID;
    projectForm.querySelector("#project-form-input").value = projectList.find(project => project.UID === projectUID).name;
    activatePojectForm();
});

subscribe("ADDED_TASK", function (event, {projectList, projectUID}) {
    updateStorage(projectList);
    updateTaskContainer(projectUID);
});

subscribe("DELETED_TASK", function (event, {projectList, projectUID}) {
    updateStorage(projectList);
    updateTaskContainer(projectUID);
});

subscribe("UPDATED_TASK", function (event, {projectList, projectUID}) {
    updateStorage(projectList);
    updateTaskContainer(projectUID);
});

subscribe("TOGGLED_TASK_DONE", function (event, {projectList, projectUID}) {
    updateStorage(projectList);
    updateTaskContainer(projectUID);
});

subscribe("DONE_TASK_BUTTON_CLICKED", function (event, {projectUID, taskUID}) {
    toggleTaskDone(projectUID, taskUID);
});

subscribe("EDIT_TASK_BUTTON_CLICKED", function(event, {projectUID, taskUID}) {
    const taskForm = document.querySelector("#task-form");
    taskForm.dataset.projectUid = projectUID;
    taskForm.dataset.taskUid = taskUID;
    taskForm.dataset.newTask = 'false';
    fillTaskForm(projectUID, taskUID);
    activateTaskForm();
});

subscribe("DELETE_TASK_BUTTON_CLICKED", function (event, {projectUID, taskUID}) {
    deleteTask(projectUID, taskUID);
});

subscribe("NEW_TASK_BUTTON_CLICKED", function (event, projectUID) {
    const taskForm = document.querySelector("#task-form");
    taskForm.dataset.projectUid = projectUID;
    taskForm.dataset.newTask = 'true';
    activateTaskForm();
});

subscribe("TASK_FORM_CONFIRM_CLICKED", function (event, taskForm) {
    var result = false;

    const projectUID = taskForm.dataset.projectUid;
    const taskName = taskForm.querySelector("#task-name-input").value;
    const taskPriority = taskForm.querySelector("#task-priority-input").value;
    const taskDeadline = taskForm.querySelector("#task-date-input").value;

    if(taskForm.dataset.newTask === 'true') {
        result = addTask(projectUID, taskName, taskPriority, taskDeadline);

    } else {
        const taskUID = taskForm.dataset.taskUid;
        result = updateTask(projectUID, taskUID, taskName, taskPriority, taskDeadline);
    }

    if(result) {
        exitTaskForm();
    }
});

subscribe("TASK_FORM_CANCEL_CLICKED", function (event) {
    exitTaskForm();
});

subscribe("POPULATE_PROJECTS", function () {
    if(getProjectList().length === 0) {
        addProject('Default');

    } else {
        updateProjectContainer();
        switchToProject(getProjectList()[0].UID);
    }
});

export { getProjectList };