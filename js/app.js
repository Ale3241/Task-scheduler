const submitBtn = document.getElementById('taskSubmitBtn');
const tableEvents = document.getElementById('table')

import { safeTask } from './storage.js';
import { 
    inputs,
    addTaskToTable, 
    closeModal,
    taskName,
    taskDescription,
    taskDueDate,
    taskStatus
} from './ui.js';


// SUBMIT-BTN FUNCTIONALITY
submitBtn.addEventListener('click', function(event){
    
    event.preventDefault();

    const isFormValid = inputs.every(input => input.value.trim() !== "");

    if(isFormValid){
        const newTask = {
            id: Date.now(),
            name: taskName.value,
            description: taskDescription.value,
            dueDate: taskDueDate.value,
            status: taskStatus.value
        }

        addTaskToTable(newTask);
        safeTask(newTask);
        closeModal();
        
    } else {
        alert('No dejes campos vacios!!');
    }

});


tableEvents.addEventListener('click', function(event){
    
    const btnSelected = event.target.closest('button');

    if(btnSelected.classList.contains('action-edit')){
        
    }
});
