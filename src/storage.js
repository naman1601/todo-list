function updateStorage(projectList) {
    localStorage.setItem('todo-list-projects', JSON.stringify(projectList));
}

function getProjectListFromStorage () {
    if(!localStorage.getItem('todo-list-projects')) {
        return [];

    } else {
        return JSON.parse(localStorage.getItem('todo-list-projects'));
    }
}

export { updateStorage, getProjectListFromStorage };