import { addToDOM } from './app.js'

const Board = (title) => {
    const createCard = (() => {
        const newCard = document.createElement("div")
        newCard.className = "col-11 mx-auto"
        newCard.innerHTML = `
            <div class="card border-0">
                <div class="card-body">
                    <h5 class="card-title">${title}</h5>
                    <div class="input-group input-group1">
                    </div>
                    <div class="form-group form-group2"></div>
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
    newButton.className = "btn add-btn btn-primary"
    newButton.type = "submit"
    newButton.innerText = "Add"
    const newMenu = document.createElement("div")
    newMenu.className = "form-group"
    newMenu.innerHTML = `
    <div class="form-check form-check-inline">
    <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1">
    <label class="form-check-label" for="inlineRadio1">1</label>
  </div>
  <div class="form-check form-check-inline">
    <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2">
    <label class="form-check-label" for="inlineRadio2">2</label>
  </div>
  <div class="form-check form-check-inline">
    <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio3" value="option3">
    <label class="form-check-label" for="inlineRadio3">3</label>
  </div>
    `
    addToDOM(newInput, 'input-group1')
    addToDOM(newButton, 'input-group1')
    addToDOM(newMenu, 'form-group2')
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