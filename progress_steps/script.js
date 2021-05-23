

let currStep = 1;
let percentage = 0.0;

const stepPercentage = 33.33;

const next = document.getElementById('next');
const prev = document.getElementById('prev');
const progress = document.getElementById('progress-bar');
const circles = document.querySelectorAll('.progress-step');


next.addEventListener('click', (evt) => {

    currStep++;
    percentage += stepPercentage;
    console.log(currStep);

    switch(currStep) {
        case 2:
            prev.removeAttribute('disabled');
            break;
        case 3:
            break;
        case 4:
            next.setAttribute('disabled', '');
            break;

    }

    progress.style.width = `${percentage}%`;
    circles[currStep-1].classList.add('active');

});

prev.addEventListener('click', (evt) => {

    currStep--;
    percentage -= stepPercentage;

    switch(currStep) {
        case 1:
            prev.setAttribute('disabled', '');
            break;
        case 2:
            break;
        case 3:
            next.removeAttribute('disabled');
            break;
    }

    progress.style.width = `${percentage}%`;
    circles[currStep].classList.remove('active');

});
