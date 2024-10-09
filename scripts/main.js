const dom = {
    new:  document.getElementById("new"),
    add: document.getElementById("add"),
    tasks:  document.getElementById("tasks"),
}

// Массив задач
const tasks = []




dom.add.onclick = () => {
    const valueInput = dom.new.value;
    if (valueInput && isNotHaveTask(valueInput, tasks)) {
        addTask(valueInput, tasks);
        dom.new.value = "";
        tasksRender(tasks)
    } 
}


function addTask (text, list) {
    const timestamp = Date.now()
    const task = {
        id: timestamp,
        text,
        isComplete: false
    }
    list.push(task)
    console.log(tasks);
}

// проверка существования задачи 
function isNotHaveTask(text, list) {
    let isNotHave = true;

    list.forEach((task) => {
        if(task.text === text) {
            alert("Такая задача уже существует")
            isNotHave = false
        }
    })
    return isNotHave
}

// Удаление задачи 

// const buttonDelete = document.querySelectorAll(".fas")
// const parentTaskInfo = document.querySelectorAll('.todo__task')

// function deleteTasks (removeTask) {
//      removeTask.forEach((tasks) => {
//             tasks.remove('div')
//      });
// }

// buttonDelete.forEach(() => {
//     addEventListener('click', deleteTasks(parentTaskInfo))
// })


// Вывод задач 
function tasksRender(list) {
    let htmlList = '';

    list.forEach((task) => {
        const cls = task.isComplete ? "todo__task todo__task__completed" : "todo__task";  // Правильное обновление класса
        const checked = task.isComplete ? 'checked' : ''; 

        const taskHtml = `
           <div id='${task.id}' class="${cls}">
                    <label class="todo__checkbox">
                        <input type="checkbox" ${checked}>
                        <div class="todo__checkbox-div"></div>
                    </label>
                    <div class="todo_task-title">${task.text}</div>
                    <div class="todo__task-del"> <i class="fas fa-trash"></i></div>
                </div>
        `;
        htmlList += taskHtml;
    });

    dom.tasks.innerHTML = htmlList;
}





// отслеживаем клик на чекбокс 
dom.tasks.onclick = (event) => {
    const target = event.target
    const isChekboxEl = target.classList.contains('todo__checkbox-div')


    if(isChekboxEl)    {
        const isComplete = target.previousElementSibling.checked
        const task = target.parentElement.parentElement
        const taskId = task.getAttribute("id")
        changeTaskStatus(taskId, tasks) 
        
    }

}

// Функция изменения статуса таски 

// Функция изменения статуса таски 
function changeTaskStatus(id, list) {
    list.forEach((task) => {
        if (task.id == id) {
            task.isComplete = !task.isComplete;  // Изменяем статус
        }
    });
    tasksRender(list);  // Перерисовываем список задач
}



