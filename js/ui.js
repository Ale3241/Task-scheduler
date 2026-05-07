const addTaskBtn = document.getElementById('add-action-button');
const modalOverlay = document.querySelector('.overlay')
const closeModalBtn = document.querySelector('.closeModal');

//Close

function closeModal(){
    modalOverlay.classList.toggle('hidden');
}



//BTN FUNCTIONALITY

// CLOSE AND OPEN MODAL
addTaskBtn.addEventListener('click', function(){
    modalOverlay.classList.remove('hidden');
})


modalOverlay.addEventListener('click', function(event){
    if(event.target == modalOverlay){
        closeModal()
    }
})


closeModalBtn.addEventListener('click', closeModal);


