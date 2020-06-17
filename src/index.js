import { startApp } from './app.js'
import { createTask } from './board.js'
startApp();

const newCounter = (() => {
    let counter = 0
    const addOne = () => {
        counter++
        return counter
    }
    return {addOne}
})()

document.querySelector(".btn").addEventListener('click', () => {
    let count = newCounter.addOne()
    const task = document.querySelector('.form-control')
    createTask(task.value, count)
    task.value = ''
    task.focus()
})

document.querySelector(".list-group").addEventListener('click', (e) => {
    if (e.target.className == "close") {
        e.target.parentNode.parentNode.parentNode.remove()
    }
})

