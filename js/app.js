const submitBtn = document.getElementById('taskSubmitBtn');
const taskName = document.getElementById('taskName');
const taskDescription = document.getElementById('taskDescription');
const taskDueDate = document.getElementById('taskDueDate');
const taskStatus = document.getElementById('taskStatus');

let tasks = []
const inputs = [taskName, taskDescription, taskDueDate, taskStatus];

submitBtn.addEventListener('click', function(event){

    const isFormValid = inputs.every(input => input.value.trim() !== "");

    if(isFormValid){
        task = {
            id: Date.now(),
            name: taskName.value,
            description: taskDescription.value,
            dueDate: taskDueDate.value,
            status: taskStatus.value
        }
        
        tasks.push(task);

        const tableTask = document.getElementById('tbody')
        
        const row = document.createElement('tr');
        row.dataset.id = task.id;

        const nameCell = document.createElement('td');
        nameCell.textContent = task.name;
        row.appendChild(nameCell);

        const descriptionCell = document.createElement('td');
        descriptionCell.textContent = task.description;
        row.appendChild(descriptionCell);

        const dateCell = document.createElement('td');
        dateCell.textContent = task.dueDate;
        row.appendChild(dateCell);

        const statusCell = document.createElement('td');
        statusCell.textContent = task.status;
        row.appendChild(statusCell);

        //ACTION CELL
        const actionsCell = document.createElement('td');
        actionsCell.classList.add('actions');

        //DELETE BTN
        const bntDelete = document.createElement('button');
        bntDelete.classList.add('action-delete');

        const deleteImg = document.createElement('img');
        deleteImg.src = 'assets/icons/delete.svg';
        deleteImg.alt = 'Delete';

        bntDelete.appendChild(deleteImg);
        actionsCell.appendChild(bntDelete);

        //EDIT TBN
        const btnEdit = document.createElement('button');
        btnEdit.classList.add('action-edit');

        const editImg = document.createElement('img');
        editImg.src = 'assets/icons/edit.svg';
        editImg.alt = 'Edit';

        btnEdit.appendChild(editImg);
        actionsCell.appendChild(btnEdit);

        row.appendChild(actionsCell);

        tableTask.appendChild(row);
        
        clearModal();
        
    } else {
        alert('Falta algo');
    }

})



function clearModal(){
    inputs.forEach(element => {
        if(element.tagName === 'SELECT'){
            element.selectedIndex = 0;
        } else {
            element.value = '';
        }
    });
}