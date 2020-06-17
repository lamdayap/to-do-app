import { addToDOM } from './app.js'

const Board = (title) => {
    const createCard = (() => {
        const newCard = document.createElement("div")
        newCard.className = "col-11 mx-auto"
        newCard.innerHTML = `
            <div class="card border-0">
                <div class="card-body">
                    <h5 class="card-title">${title}</h5>
                    <div class="input-group"></div>
                    <ul class="list-group list-group-flush"></ul>
                </div>
            </div>
        `
        addToDOM(newCard, 'main-app-row')
    })()

    const createForm = (() => {
        const newForm = document.createElement("form")
        newForm.className = "form-inline"
        const newInput = document.createElement("input")
        newInput.className = "form-control"
        newInput.type = "text"
        const newButton = document.createElement("button")
        newButton.className = "btn btn-primary"
        newButton.type = "submit"
        newButton.innerText = "Add"
        addToDOM(newInput, 'input-group')
        addToDOM(newButton, 'input-group')
    })()
    createTask('Example task')
}

const createTask = (text, number = 0) => {
    const newTask = document.createElement("li")
    newTask.className = "list-group-item"
    newTask.innerHTML = `
        <div class="custom-control custom-checkbox">
            <input type="checkbox" class="custom-control-input" id="check${number}">
            <label class="custom-control-label" for="check${number}">${text}</label>
            <button type="button" class="close" aria-label="Close">
            <span class="close" aria-hidden="true">&times;</span>
            </button>
        </div>
    `
    addToDOM(newTask, 'list-group')
} 

export {
    Board,
    createTask
}