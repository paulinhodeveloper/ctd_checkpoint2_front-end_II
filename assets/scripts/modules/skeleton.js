import { rotate, margin } from './randomTaskStyle.js';

export const skeleton = () => {
    const qs = e => document.querySelectorAll(e);
    const taskBoard = qs('.container #taskBoard');
    const taskBoardDone = qs('.right-sidebar #taskBoard');

    const placeholder = document.createElement('div');
    placeholder.classList.add('placeholder');

    const template = `<div class='placeholder'></div>`
    taskBoardDone.forEach(e => {
        e.innerHTML += template;
        e.innerHTML += template;
        const placeholder = document.querySelectorAll('.placeholder');
        placeholder.forEach(e => {
            e.style.transform = rotate();
            e.style.margin = margin();
        });
    });

    taskBoard.forEach(e => {
        e.innerHTML += template;
        e.innerHTML += template;
        e.innerHTML += template;
        const placeholder = document.querySelectorAll('.placeholder');
        placeholder.forEach(e => {
            e.style.transform = rotate();
            e.style.margin = margin();
        });
    });
};