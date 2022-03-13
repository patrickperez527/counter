const actions = Array.from(document.querySelectorAll('[data-action]'));

let counter = localStorage.getItem('counter') || 0;
let counterValue = document.querySelector('.counter-value');

counterValue.innerText = counter;

actions.forEach(action => {
    action.addEventListener('click', () => {
        const type = action.dataset.action;

        switch(type) {
            case 'increase':
                counter++;
                break;
            case 'decrease':
                counter--;
                break;
            case 'reset':
                counter = 0;
                break;
            case 'save':
                localStorage.setItem('counter', counter);
                break; 
            case 'load':
                counter = localStorage.getItem('counter');
                break;
            case 'clear':
                localStorage.clear();
                counter = 0;
                break;   
        }

        if (counter > 0) {
            counterValue.style.color = '#28a745'
        } else if (counter < 0) {
            counterValue.style.color = '#dc3545'
        } else if (counter === 0){
            counterValue.style.color = '#212529'
        }

        counterValue.innerText = counter;
    })
})

const decreaseBtn = document.getElementById('decrease');
const resetBtn = document.getElementById('reset');
const increaseBtn = document.getElementById('increase');
const saveBtn = document.getElementById('save');
const loadBtn = document.getElementById('load');
const clearBtn = document.getElementById('clear');

decreaseBtn.addEventListener('mouseover', () => {
    decreaseBtn.textContent = 'decrease';
})

decreaseBtn.addEventListener('mouseout', () => {
    decreaseBtn.innerHTML = '<i class="fa-solid fa-minus"></i>';
})

resetBtn.addEventListener('mouseover', () => {
    resetBtn.textContent = 'reset';
})

resetBtn.addEventListener('mouseout', () => {
    resetBtn.innerHTML = '<i class="fa fa-refresh"></i>';
})

increaseBtn.addEventListener('mouseover', () => {
    increaseBtn.textContent = 'increase';
})

increaseBtn.addEventListener('mouseout', () => {
    increaseBtn.innerHTML = '<i class="fa-solid fa-plus"></i>';
})

saveBtn.addEventListener('mouseover', () => {
    saveBtn.textContent = 'save';
})

saveBtn.addEventListener('mouseout', () => {
    saveBtn.innerHTML = '<i class="fa-solid fa-floppy-disk"></i>';
})

loadBtn.addEventListener('mouseover', () => {
    loadBtn.textContent = 'load';
})

loadBtn.addEventListener('mouseout', () => {
    loadBtn.innerHTML = '<i class="fa-solid fa-spinner"></i>';
})

clearBtn.addEventListener('mouseover', () => {
    clearBtn.textContent = 'clear';
})

clearBtn.addEventListener('mouseout', () => {
    clearBtn.innerHTML = '<i class="fa-solid fa-trash"></i>';
})