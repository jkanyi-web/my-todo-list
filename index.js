const USER_INPUT = document.querySelector('.input');
const TODO_CONTAINER = document.querySelector('.container ul')
const ADD_BTN = document.querySelector('.add')
const FORM = document.querySelector('form')

const addTodo = (e) => {
  let li = document.createElement('li')
  li.innerText = USER_INPUT.value
  TODO_CONTAINER.appendChild(li)  
  USER_INPUT.value = ''
}

ADD_BTN.addEventListener('click', addTodo);

FORM.addEventListener('submit', (e) => e.preventDefault())


