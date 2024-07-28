let todolist = ['make dinner', 'wash dishes'];

render();
 
function render(){


let todolisthtml = ''

for (let i = 0; i < todolist.length; i++) {
    let todo = todolist[i];
    let html = `<p>${todo}</p>`
    todolisthtml += html
}

document.querySelector('.js-todo-list ').innerHTML = todolisthtml;


}

function addtodo() {
  let inputElement = document.querySelector('.js-name-input');
 
  const name = inputElement.value;
  todolist.push(name)
  
  
  inputElement.value = '';
  render()
}


 