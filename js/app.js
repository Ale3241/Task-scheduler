const submitBtn = document.getElementById('taskSubmitBtn');

import { safeTask } from './storage.js';
import { clearModal, inputs, addTaskToTable } from './ui.js';
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
        
        clearModal();
        
    } else {
        alert('Falta algo');
    }

})
