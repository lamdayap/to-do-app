import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';
import { Board } from './board.js'

const startApp = () => {
    const createNav = (() => {
        const navBar = document.createElement("nav")
        const newSpan = document.createElement("span")
        navBar.className = "navbar navbar-light"
        navBar.innerHTML = `<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">`
        newSpan.className = "navbar-toggler-icon"
        addToDOM(navBar, 'header')
        addToDOM(newSpan, 'navbar-toggler')
    })()

    const crateMainBoard = (() => {
        const newRow = document.createElement("div");
        newRow.className = "row main-app-row"
        addToDOM(newRow, 'main-app');
        Board('main')
    })()
}


const addToDOM = (elementToAdd, htmlNode) => {
    if (document.getElementById(htmlNode)) {
        const selectedDiv = document.getElementById(htmlNode);
        selectedDiv.appendChild(elementToAdd)
    } else {
        const selectedDiv = document.querySelector("."+htmlNode);
        selectedDiv.appendChild(elementToAdd)   
    }
} 

export { 
    startApp,
    addToDOM
}