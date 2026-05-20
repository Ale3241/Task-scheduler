const submitBtn = document.getElementById('taskSubmitBtn');
const tableEvents = document.getElementById('table')

import { safeTask } from './storage.js';
import { 
    openModal,
    closeModal,
    inputs,
    addTaskToTable, 
    taskName,
    taskDescription,
    taskDueDate,
    taskStatus
} from './ui.js';


// SUBMIT-BTN FUNCTIONALITY
submitBtn.addEventListener('click', function(event){
    
    event.preventDefault();

    const isFormValid = inputs.every(input => input.value.trim() !== "");

    if(!isFormValid){
        alert('No dejes campos vacios!!');
        return
    }

    //EDIT
    if(submitBtnM.value == 'UPDATE'){
        const updateTask = {
            
        }
    } else {
        const newTask = {
            id: Date.now(),
            name: taskName.value,
            description: taskDescription.value,
            dueDate: taskDueDate.value,
            status: taskStatus.value
        }
    }

    

    addTaskToTable(newTask);
    safeTask(newTask);
    closeModal();

});


//EDIT AND DELETE
import { getElementHTML, editRow } from './ui.js';
tableEvents.addEventListener('click', function(event) {
    const [btnSelected, tr] = getElementHTML(event);

    if (btnSelected.classList.contains('action-edit')) {
        openModal();
        submitBtn.value = 'UPDATE';
        editRow(tr);

    }

    if (btnSelected.classList.contains('action-delete')) {
        console.log('Deleting ' + tr.dataset.name);
        tr.remove();
    }
});