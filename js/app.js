export const submitBtn = document.getElementById('taskSubmitBtn');
const tableEvents = document.getElementById('table')

import { 
    safeTask,
    deleteTask,
    updateTask
} from './storage.js';

import { 
    openModal,
    closeModal,
    inputs,
    addTaskToTable, 
    taskName,
    taskDescription,
    taskDueDate,
    taskStatus,
    getElementHTML, 
    editRow,
    deleteRow
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

    const editingId = submitBtn.dataset.editingId;

    if(submitBtn.value == 'UPDATE'){
        const rowToUpdate = document.querySelector(`tr[data-id="${editingId}"]`);
        if(rowToUpdate) {
            rowToUpdate.children[0].textContent = taskName.value;
            rowToUpdate.children[1].textContent = taskDescription.value;
            rowToUpdate.children[2].textContent = taskDueDate.value;
            rowToUpdate.children[3].textContent = taskStatus.value;
        }
    } else {
        const newTask = {
            id: Date.now().toString(),
            name: taskName.value,
            description: taskDescription.value,
            dueDate: taskDueDate.value,
            status: taskStatus.value
        }
        
        addTaskToTable(newTask);
        safeTask(newTask);
    }
    closeModal();

});


//EDIT AND DELETE
tableEvents.addEventListener('click', function(event) {
    const [btnSelected, tr] = getElementHTML(event);

    if (btnSelected.classList.contains('action-edit')) {
        openModal();
        submitBtn.value = 'UPDATE';
        submitBtn.dataset.editingId = tr.dataset.id;
        console.log(tr.dataset.id);
        editRow(tr);
    }

    if (btnSelected.classList.contains('action-delete')) {
        const taskToDelete = tr.dataset.id;
        deleteTask(taskToDelete);
        deleteRow(tr);
    }
});