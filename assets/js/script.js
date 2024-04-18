const titleInp = document.querySelector("#title")
const descArea = document.querySelector("#desc")
const addBtn = document.querySelector("#add")
const listDiv = document.querySelector('.list')

let taskList = []
taskList = JSON.parse(localStorage.getItem('toDoList')) || []

const createAndAddTodo = (title, desc) => {
    // 0 '' null undefined NaN false
    // "wadad", "  ", "-0.000001", {}, [], () = true
    if (title && desc) {
        const div = document.createElement('div')
        const h4 = document.createElement('h4')
        const p = document.createElement('p')
        const btn = document.createElement('button')

        btn.className = ""
        btn.innerText = "x"
        btn.addEventListener('click', () => {
            listDiv.removeChild(div)
        })

        div.className = 'todo'
        div.style.marginTop = '20px'

        h4.className = 'todo_title'
        h4.innerText = title

        p.className = 'todo_desc'
        p.innerText = desc

        div.append(h4, p, btn)
        listDiv.append(div)

        titleInp.value = ''
        descArea.value = ''
    }
}

const addToArray = () => {
    const taskObj = {
        title: titleInp.value,
        desc: descArea.value
    }
    taskList = [...taskList, taskObj]

    listDiv.innerHTML = ''

    localStorage.setItem('toDoList', JSON.stringify(taskList))
    taskList.forEach((el) => {
        createAndAddTodo(el.title, el.desc)
    })
}

addBtn.addEventListener("click", (e) => {
    e.preventDefault()
    addToArray()
})