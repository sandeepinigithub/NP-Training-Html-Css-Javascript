var step = 1;
// Button 
var nextBtn = document.querySelector('.next');
var prevBtn = document.querySelector('.prev');
var submitBtn = document.querySelector('.submit');
var printBtn = document.querySelector('.print');

document.querySelector('.step' + step).style.display = 'block';
document.querySelector('.indicate' + step).classList.add('step-indicator-fill');
const steps = document.querySelectorAll('.step');

// Next Button Function 
function next() {
    step++;
    if (step <= steps.length) {
        steps.forEach(step => {
            step.style.display = 'none';
        });
        document.querySelector('.step' + step).style.display = 'block';
        document.querySelector('.indicate' + step).classList.add('step-indicator-fill');
    }
    if (step == (steps.length)) {
        submitBtn.style.display = 'block';
        nextBtn.style.display = 'none';
    }
    step > 1
    if (step > 1) {
        prevBtn.style.display = 'block';
    }


}

// Previous Button Function 
function prev() {
    step--;
    if (step >= 1) {
        steps.forEach(step => {
            step.style.display = 'none';
        });
        document.querySelector('.step' + step).style.display = 'block';
        document.querySelector('.indicate' + (step+1)).classList.remove('step-indicator-fill');
    }
    if (step < steps.length) {
        submitBtn.style.display = 'none';
        nextBtn.style.display = 'block';

    }


}