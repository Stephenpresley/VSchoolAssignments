addTodo.addEventListener('submit', (e) =>{
    e.preventDefault()
    const li = document.createElement('li')
    const div = document.createElement('div')
    const button1 = document.createElement('button')
    const button2 = document.createElement('button')
    div.textContent = addTodo.title.value
    div.className = 'title'
    button1.type = 'submit'
    button1.textContent = 'edit'
    button1.id = 'edit'
    button2.type = 'submit'
    button2.textContent = 'X'
    button2.id = 'X'
    list.appendChild(li)
    li.appendChild(div)
    li.appendChild(button1)
    li.appendChild(button2)
})

edit.addEventListener('submit', (e) =>{
    e.preventDefault()
    const input = document.createElement('input')
    input.className = 'title'
    input.type = 'text'
    input.textContent = addTodo.title.value
    li.appendChild('input')
    div.style.display = 'none'
    input.style.display = 'block'
    
})


