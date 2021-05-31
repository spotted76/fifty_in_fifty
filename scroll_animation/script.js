
const boxes = document.querySelectorAll('.box');

scrolled();

window.addEventListener('scroll', scrolled);


function scrolled() {

    const scrollPosition = window.innerHeight/5 * 4;

    boxes.forEach( (box) => {
        const boxTop = box.getBoundingClientRect().top;

        if ( boxTop < scrollPosition ) {
            box.classList.add('show');
        }
        else {
            box.classList.remove('show');
        }
    })

}