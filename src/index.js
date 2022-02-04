import './style.css';
import { publish } from './event-manager.js';
import './events.js';
import { createProjectArea, createProjectForm, createTaskArea, createTaskForm } from './ui.js';

function createHeader() {
    const header = document.createElement('header');
    header.textContent = 'To-Do list';
    return header;
}

function createMain() {
    const main = document.createElement('div');
    main.classList.add('main');
    main.appendChild(createProjectArea());
    main.appendChild(createTaskArea());
    return main;
}

function createFooter() {
    const footer = document.createElement('footer');
    footer.textContent = 'Copyright © 2022 naman1601';
    return footer;
}

function startup() {
    const content = document.querySelector('.content');
    content.appendChild(createHeader());
    content.appendChild(createMain());
    content.appendChild(createProjectForm());
    content.appendChild(createTaskForm());
    content.appendChild(createFooter());
    publish("POPULATE_PROJECTS");
}

startup();