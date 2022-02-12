// set initial count
let count = 0;

// select value and buttons
const value = document.getElementById('value');
const btns = document.querySelectorAll('.btn');

btns.forEach((btn) => {
    btn.addEventListener('click', e => {
        const styles = e.currentTarget.classList;
        if(styles.contains('decrease')){
            count --;
        } else if (styles.contains('increase')){
            count ++;
        } else {
            count = 0;
        }

        if(count > 0){
            value.style.color = '#009944';
        } else if (count < 0) {
            value.style.color = '#cc0000';
        } else {
            value.style.color = '#102a42';
        }
        value.textContent = count;
    })
})