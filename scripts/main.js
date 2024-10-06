const dom = {
    new:  document.getElementById("new"),
    add: document.getElementById("add"),
    tasks:  document.getElementById("tasks"),
}
const tasks = []




dom.add.onclick = () => {
    const valueInput = dom.new.value;
    if (valueInput && isNotHaveTask(valueInput, tasks)) {
        addTask(valueInput, tasks);
        dom.new.value = "";
    } 
}


function addTask (text, list) {
    const timestamp = Date.now()
    const task = {
        id: timestamp,
        text,
        isComlete: false
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
function tasksRender (list) {
    const cls = task.isComlete ? "todo__task todo__task__comleted" : "todo__task"
   let htmlList = '';
   list.forEach( (task) => {
        const taskHtml = `
           <div id='${task.id}' class="${cls}">
                    <label class="todo__chekbox">
                        <input type="checkbox" cheked='${task.isComlete}'>
                        <div></div>
                    </label>
                    <div class="todo_task-title">${task.text}</div>
                    <div class="todo__task-del"> <i class="fas fa-trash"></i></div>
                </div>

        `
        htmlList = htmlList + taskHtml;
   })
   
}