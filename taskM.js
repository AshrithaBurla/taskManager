const taskForm= document.getElementById("taskform");
const taskList= document.getElementById("list");
const createNewListButton= document.getElementById("createNewList");
const taskListNew= document.getElementById("listNew");
const datePicker = document.getElementById("datePicker");


let taskIndex=1;
let taskIndexNew = 1;

taskForm.addEventListener("submit", function (event)
{
    event.preventDefault();
    
    const taskInput= document.getElementById("input");
    const taskText= taskInput.value.trim();
    
    if(taskText != "")
    {
        const taskItem = document.createElement("li");
        taskItem.classList.add("task-item");
        taskItem.textContent =`${taskText}`;
        taskItem.addEventListener("click" , function()
        {
            this.classList.toggle("completed");
        });

        //const currentList = document.getElementById(`list${currentListId}`);
       // currentList.appendChild(taskItem);

        taskList.appendChild(taskItem);

        taskIndex++;
        taskInput.value="";
    }
});

createNewListButton.addEventListener("click", function (eventt) 
{
    eventt.preventDefault();
    const taskInputNew= document.getElementById("input");
    const taskTextNew= taskInputNew.value.trim();
    
    if(taskTextNew != "")
    {
        const taskItemNew = document.createElement("li");
        taskItemNew.classList.add("task-item");
        taskItemNew.textContent =`${taskTextNew}`;
        taskItemNew.addEventListener("click" , function()
        {
            this.classList.toggle("completed");
        });

       // const currentListNew = document.getElementById(`list${currentListNewId}`);
       // currentListNew.appendChild(taskItemNew);

        taskListNew.appendChild(taskItemNew);

        taskIndexNew++;
        taskInputNew.value="";
    }   

});
function createTaskItem(text) {
    const taskItem = document.createElement("li");
    taskItem.classList.add("task-item");
    taskItem.textContent = text;
    taskItem.addEventListener("click", function () {
        this.classList.toggle("completed");
    });
    return taskItem;
}

function isListCreated(date) {
    const existingList = document.getElementById(`list${date}`);
    if (existingList) {
        alert(`List for ${date} already exists!`);
        return true;
    }
    return false;
}
