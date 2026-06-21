let tasks = [];


export function safeTask(task){
    tasks.push(task);
    console.log(tasks);
}

export function updateTask(taskToUpdate){
    
}

export function deleteTask(taskToDelete){
    tasks = tasks.filter(task => task.id !== taskToDelete);
    console.log(tasks);
}