const list = document.querySelector('.todos');
const input = document.querySelector('input');
const colorPicker = document.querySelector('.colorPicker');
const datePicker = document.querySelector('.datePicker');

const CHECK = 'fa-check-circle';
const UNCHECK = 'fa-circle';
const LINE_THROUGH = 'lineThrough';
const NORMAL = 'initial';

let todoList;
let id;


// get item form local storage
loadList = array => {
    array.forEach(item => {
        addTodo(item.name, item.id, item.done, item.trash, item.color, item.date)
    })
}
// add todo
addTodo = (todo, id, done, trash, color, date) => {
    if(trash){ return; }
    const DONE = done ? CHECK : UNCHECK;
    const LINE = done ? LINE_THROUGH : NORMAL;

    const item = document.createElement('li');
    item.classList.add('todo');

    const firstI = document.createElement('i');
    firstI.classList.add('far', DONE);
    firstI.setAttribute('job', 'compeleted');
    firstI.setAttribute('id', id);
    item.appendChild(firstI);

    const p = document.createElement('p')
    console.log(p)
    p.classList.add('text', LINE);
    p.innerHTML = todo;
    item.appendChild(p);

    const secondI = document.createElement('i');
    secondI.classList.add('fas', 'fa-trash');
    secondI.setAttribute('job', 'delete');
    secondI.setAttribute('id', id);
    item.appendChild(secondI);

    const colorLeft = document.createElement('div');
    colorLeft.classList.add('todoColorLeft');
    colorLeft.style.background = color;
    item.appendChild(colorLeft)
    const colorRight = document.createElement('div');
    colorRight.classList.add('todoColorRight');
    colorRight.style.background = color;
    item.appendChild(colorRight)

    const dateTodo = document.createElement('p');
    dateTodo.classList.add('dateTodo');
    dateTodo.style.color = color;
    dateTodo.innerHTML = `deadline: ${date}`;
    item.appendChild(dateTodo);

    const position = 'beforeend';
    list.insertAdjacentElement(position, item);
}
//get local storage and check is empty
let data = localStorage.getItem("TODO");
if(data){
    todoList = JSON.parse(data);
    id = todoList.length;
    loadList(todoList);
} else {
    todoList = [];
    id = 0;
}
//add an item on enter with color change
datePicker.addEventListener("change", function(e){
    date = e.target.value
    colorPicker.addEventListener("change", function(e){
        todoColor = e.target.value
        document.addEventListener('keyup', e => {
            if(e.keyCode == 13){
                const toDo = input.value;
                if(toDo){
                    addTodo(toDo, id, false, false, todoColor, date);
                    todoList.push({
                        name: toDo,
                        id,
                        done: false,
                        trash: false,
                        color: todoColor,
                        date: date
                    })
                    //add item to local storage (this must be everywhere where todoList is uptdated)
                    localStorage.setItem('TODO', JSON.stringify(todoList));
                    id++;
                }
                input.value = '';
            }
        })
    })
})

    colorPicker.addEventListener("change", function(e){
        todoColor = e.target.value
        datePicker.addEventListener("change", function(e){
        date = e.target.value
        document.addEventListener('keyup', e => {
            if(event.keyCode == 13){
                const toDo = input.value;
                if(toDo){
                    addTodo(toDo, id, false, false, todoColor, date);
                    todoList.push({
                        name: toDo,
                        id,
                        done: false,
                        trash: false,
                        color: todoColor,
                        date: date
                    })
                    //add item to local storage (this must be everywhere where todoList is uptdated)
                    localStorage.setItem('TODO', JSON.stringify(todoList));
                    id++;
                }
                input.value = '';
            }
        })
    })
})
// add an item on enter withhout changing default color of color picker
document.getElementById('datePicker').valueAsDate = new Date();

    let todoColor = colorPicker.value
    document.addEventListener('keyup', e => {
        if(e.keyCode == 13){
            let date = datePicker.value
            const toDo = input.value;
            if(toDo){
                addTodo(toDo, id, false, false, todoColor, date);
                todoList.push({
                    name: toDo,
                    id,
                    done: false,
                    trash: false,
                    color: todoColor,
                    date: date
                })
                //add item to local storage (this must be everywhere where todoList is uptdated)
                localStorage.setItem('TODO', JSON.stringify(todoList));
                id++;
            }
            input.value = '';
        }
    })


// compele todo
completeTodo = element => {
    element.classList.toggle(CHECK);
    element.classList.toggle(UNCHECK);
    element.parentNode.querySelector('.text').classList.toggle(LINE_THROUGH);
    todoList[element.id].done = todoList[element.id].done ? false : true;
}

// remove todo
removeTodo = element => {
    element.parentNode.parentNode.removeChild(element.parentNode);
    todoList[element.id].trash = true;
}

// target the items created dynamically
list.addEventListener('click', e => {
    const element = e.target; //return the clicked element inside list
    const elementJob = element.attributes.job.value; //complete or delete
    if(elementJob == 'compeleted'){
        completeTodo(element);
    } else if(elementJob == 'delete'){
        removeTodo(element);
    }
    //add item to local storage (this must be everywhere where todoList is uptdated)
    localStorage.setItem('TODO', JSON.stringify(todoList));
})