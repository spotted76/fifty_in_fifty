
const labelText = document.querySelectorAll('input + label');
console.log(labelText);

labelText.forEach( (label) => {
    label.innerHTML = label.innerText
        .split('')
        .map( (letter, idx) => `<span style=transition-delay:${idx * 20}ms>${letter}</span>`)
        .join('');
});