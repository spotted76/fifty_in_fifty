

const container = document.getElementById('container');
const open = document.getElementById('open');
const close = document.getElementById('close');

open.addEventListener( 'click', btn => {
    container.classList.add('show-nav')
});
close.addEventListener( 'click', btn => {
    container.classList.remove('show-nav')
});