const addTaskBtn = document.getElementById('add-action-button');
const modalOverlay = document.querySelector('.overlay')
const closeModalBtn = document.querySelector('.closeModal');

//INPUTS
export const taskName = document.getElementById('taskName');
export const taskDescription = document.getElementById('taskDescription');
export const taskDueDate = document.getElementById('taskDueDate');
export const taskStatus = document.getElementById('taskStatus');

export const inputs = [taskName, taskDescription, taskDueDate, taskStatus];

//Close
export function closeModal(){
    modalOverlay.classList.toggle('hidden');
    clearModal();
}

export function openModal(){
    modalOverlay.classList.remove('hidden');
}


//Clear Modal
export function clearModal(){
    inputs.forEach(element => {
        if(element.tagName === 'SELECT'){
            element.selectedIndex = 0;
        } else {
            element.value = '';
        }
    });
}


//ADD TASK TO TABLE
export function addTaskToTable(newTask){
    const tableTask = document.getElementById('tbody')
        
    const row = document.createElement('tr');
    row.dataset.id = newTask.id;

    const nameCell = document.createElement('td');
    nameCell.textContent = newTask.name;
    row.dataset.name = newTask.name;
    row.appendChild(nameCell);

    const descriptionCell = document.createElement('td');
    descriptionCell.textContent = newTask.description;
    row.appendChild(descriptionCell);

    const dateCell = document.createElement('td');
    dateCell.textContent = newTask.dueDate;
    row.appendChild(dateCell);

    const statusCell = document.createElement('td');
    statusCell.textContent = newTask.status;
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
}


// CLOSE AND OPEN MODAL
addTaskBtn.addEventListener('click', function(){
    openModal();
    
})


modalOverlay.addEventListener('click', function(event){
    if(event.target == modalOverlay){
        closeModal()
    }
})


closeModalBtn.addEventListener('click', closeModal);


//SELECT ROW
export function getElementHTML(event){
    const btnSelected = event.target.closest('button');
    if (!btnSelected) return;
    const tr = btnSelected.closest('tr');
    return [btnSelected, tr];
}


//EDIT
export function editRow(row){
    if(row){
        const rowValue = Array.from(row.children).map(td => td.textContent.trim());
        console.log(rowValue);
        console.log(row.dataset.id);
    }
}