
const lhs = document.getElementById('lhs');
const rhs = document.getElementById('rhs');
const container = document.getElementById('container');

lhs.addEventListener('mouseenter', () => {
    container.classList.add('hover-left');
});

lhs.addEventListener('mouseleave', () => {
    container.classList.remove('hover-left');
});

rhs.addEventListener('mouseenter', () => {
    container.classList.add('hover-right');
});

rhs.addEventListener('mouseleave', () => {
    container.classList.remove('hover-right');
});

