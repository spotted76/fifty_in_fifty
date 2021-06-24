const insert = document.getElementById('insert');


window.addEventListener('keypress', (evt) => {
    const key = evt.key === ' ' ? 'Space' : evt.key;
    insert.innerHTML = `
    <div class="key box">
        <small>event.key</small>
        <div class="key-info">${key}</div>
    </div>
    <div class="key box">
        <small>event.keycode</small>
        <div class="key-info">${evt.keyCode}</div>
    </div>
    <div class="key box">
        <small>event.code</small>
        <div class="key-info">${evt.code}</div>
    </div>
`;
});