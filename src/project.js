import uniqid from 'uniqid';
import { publish } from './event-manager.js';
import { getProjectList } from './events.js';

function projectFactory(projectName) {
    const project = {
        UID: uniqid(),
        name: projectName,
        tasks: []
    };

    return project;
}

function addProject(projectName) {
    if(projectName === '') {
        alert('Project name cannot be empty');
        return false;
    }

    var projectList = getProjectList();

    if (projectList.some(project => project.name === projectName)) {
        alert('Project ' + projectName + ' already exists');
        return false;
    }

    const newProject = projectFactory(projectName);
    projectList.push(newProject);
    publish('ADDED_PROJECT', {projectList, newProjectUID: newProject.UID});
    return true;
}

function deleteProject(projectUID) {
    var projectList = getProjectList();

    const tryingToDeleteDefaultProject = projectList.some(project => project.name === 'Default' && project.UID === projectUID);

    if(tryingToDeleteDefaultProject) {
        alert('Cannot delete Default project');
        return;
    }

    projectList = projectList.filter(project => project.UID !== projectUID);
    publish('DELETED_PROJECT', projectList);
}

function renameProject(projectUID, newName) {
    var projectList = getProjectList();

    const tryingToRenameDefaultProject = projectList.some(project => project.name === 'Default' && project.UID === projectUID);

    if(tryingToRenameDefaultProject) {
        alert('Cannot rename Default project');
        return false;
    }

    if(projectList.some(project => project.name === newName && project.UID !== projectUID)) {
        alert('Project ' + newName + ' already exists');
        return false;
    }

    for (let index = 0; index < projectList.length; index++) {
        if (projectList[index].UID == projectUID) {
            projectList[index].name = newName;
            break;
        }
    }

    publish('RENAMED_PROJECT', {projectList, renamedProjectUID : projectUID});
    return true;
}

export { addProject, deleteProject, renameProject };