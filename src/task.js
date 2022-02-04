import { publish } from "./event-manager.js";
import { getProjectList } from "./events.js";
import uniqid from "uniqid";

function taskFactory(taskName, taskPriority, taskDeadline, projectUID) {
    const task = {
        UID: uniqid(),
        name: taskName,
        priority: taskPriority,
        deadline: taskDeadline,
        done: false,
        projectUID: projectUID
    };

    return task;
}

function addTaskToProject(newTask, projectUID) {
    var projectList = getProjectList();

    for (let index = 0; index < projectList.length; index++) {
        if (projectList[index].UID == projectUID) {
            projectList[index].tasks.push(newTask);
            break;
        }
    }

    publish('ADDED_TASK', {projectList, projectUID});
}

function toggleTaskDone(projectUID, taskUID) {
    var projectList = getProjectList();
    for (let index = 0; index < projectList.length; index++) {
        if (projectList[index].UID == projectUID) {
            projectList[index].tasks = projectList[index].tasks.map(task => {
                if (task.UID == taskUID) {
                    task.done = !task.done;
                }
                return task;
            });
            break;
        }
    }
    publish('TOGGLED_TASK_DONE', {projectList, projectUID});
}

function checkValidity(taskName, taskDeadline) {
    if(taskName == '' || (new Date(taskDeadline)) == 'Invalid Date') {
        return false;

    } else {
        return true;
    }
}

function updateTask(projectUID, taskUID, taskName, taskPriority, taskDeadline) {
    if(!checkValidity(taskName, taskDeadline)) {
        alert('Task name and deadline are required!');
        return false;
    }

    var projectList = getProjectList();
    for (let index = 0; index < projectList.length; index++) {
        if (projectList[index].UID == projectUID) {
            projectList[index].tasks = projectList[index].tasks.map(task => {
                if (task.UID == taskUID) {
                    task.name = taskName;
                    task.priority = taskPriority;
                    task.deadline = taskDeadline;
                }
                return task;
            });
            break;
        }
    }
    publish('UPDATED_TASK', {projectList, projectUID});
    return true;
}

function addTask(projectUID, taskName, taskPriority, taskDeadline) {
    if (!checkValidity(taskName, taskDeadline)) {
        alert('Task name and deadline are required!');
        return false;
    }

    const newTask = taskFactory(taskName, taskPriority, taskDeadline, projectUID);
    addTaskToProject(newTask, projectUID);
    return true;
}

function deleteTask(projectUID, taskUID) {
    var projectList = getProjectList();
    for (let index = 0; index < projectList.length; index++) {
        if (projectList[index].UID == projectUID) {
            projectList[index].tasks = projectList[index].tasks.filter(task => task.UID !== taskUID);
            break;
        }
    }
    publish('DELETED_TASK', {projectList, projectUID});
}

export { addTask, deleteTask, updateTask, toggleTaskDone };