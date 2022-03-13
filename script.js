var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl)
})

let counter = localStorage.getItem('counter') || 0;
const value = document.getElementById('value');
const title = document.getElementById('title');
const btns = document.querySelectorAll('.btn');

value.textContent = counter;

if (counter > 0) {
    value.style.color = '#198754';
} else if (counter < 0) {
    value.style.color = '#DC3545';
} else {
    value.style.color = '#212529';
}

btns.forEach(btn => {
    btn.addEventListener('click', e => {
        const style = e.currentTarget.classList;

        if (style.contains('decrease')) {
            counter--;
            localStorage.setItem('counter', counter);
        } else if (style.contains('reset')) {
            counter = 0;
            localStorage.setItem('counter', counter);
        } else {
            counter++;
            localStorage.setItem('counter', counter);
        }

        if (counter > 0) {
            value.style.color = '#198754';
        } else if (counter < 0) {
            value.style.color = '#DC3545';
        } else {
            value.style.color = '#212529';
        }

        value.textContent = counter;
    })
})