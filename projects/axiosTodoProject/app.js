// const axios = require('axios')
const list = document.getElementById('list')

axios.get('https://api.vschool.io/Stephen/todo/').then((response)=>{
    const todos = response.data
    for(let i = 0; i < todos.length; i++){
        makeTodo(todos[i])
    }
})

function makeTodo(todo){
   const container = document.createElement('div')
   const h1 = document.createElement('h1')
   const p = document.createElement('p')
   const img = document.createElement('img')
   const h2 = document.createElement('h2')
   const check = document.createElement('input')
   const button = document.createElement('button')
   h1.textContent = todo.title
   p.textContent = todo.description
   img.src = todo.imgUrl
   h2.textContent = todo.price
   check.type = 'checkbox'
   button.type = 'submit'
   button.textContent = 'X'
   container.appendChild(h1)
   container.appendChild(p)
   container.appendChild(img)
   container.appendChild(h2)
   container.appendChild(check)
   container.appendChild(button)
   list.appendChild(container)
       container.addEventListener('change', (e)=> {
            e.preventDefault()
            axios.put(`https://api.vschool.io/Stephen/todo/${todo._id}`, {completed: true}).then( response =>{   
            console.log(response)
            response.data
           })
       })
       container.addEventListener('submit', (e)=>{
            e.preventDefault()
            axios.delete(`https://api.vschool.io/Stephen/todo/${todo._id}`).then( response =>{
                response.data
            })
       })
   
}


newTodo.addEventListener('submit', (e)=> {
    e.preventDefault()
    const another = {
        title: newTodo.title.value,
        description: newTodo.description.value,
        price: newTodo.price.value,
        imgUrl: newTodo.imgUrl.value
    }
    axios.post('https://api.vschool.io/Stephen/todo/', another).then( response =>{
        makeTodo(response.data)
    })
})
