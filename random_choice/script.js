
const tags = document.querySelector('.tags');
const textArea = document.getElementById('textarea');

textArea.focus();

textArea.addEventListener('keyup', (evt) => {

    buildTags();

    if( evt.key === 'Enter') {
        console.log('Enter key pressed');
        textArea.value = '';

        selectChoice();
    }

});


function buildTags() {

    let allTags = parseTextArea(textArea.value);

    tags.innerHTML = '';

    allTags.forEach( tagText => {
        
        let htmlTag = buildHtmlTag(tagText);
        tags.appendChild(htmlTag);
    });
}

function parseTextArea(textContent) {

    return textContent.split(',')
        .map(tag => tag.trim())
        .filter( tag => tag !== '');

}

function buildHtmlTag(tagText) {

    let htmlTag = document.createElement('span');
    htmlTag.classList.add('tag');
    htmlTag.innerText = tagText;
    return htmlTag;

}

function selectChoice() {

    const iterations = 30;


    let interval = setInterval(() => {
        
        setTimeout(() => {
            
            let tag = enableRandomTag();

            setTimeout(() => {
                tag.classList.toggle('active');
            }, 100);

        }, 100);


    }, 100);

    setTimeout(() => {
        clearInterval(interval);

        //Set the last tag
        enableRandomTag();

    }, iterations * 100);

    
}

function enableRandomTag() {

    const allTags = document.querySelectorAll('.tag')
    const numTags = allTags.length;

    const index = Math.floor(Math.random() * numTags);
    const tag = allTags[index];
    tag.classList.toggle('active');

    return tag;

}