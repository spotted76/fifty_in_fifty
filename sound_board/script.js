

const allSounds = document.querySelectorAll('.sounds');
addButtons(allSounds);


function addButtons(soundElements) {

    const buttonPanel = document.getElementById('btn-panel');

    soundElements.forEach(element => {

        const newButton = document.createElement('button');
        newButton.classList.add('btn');
        newButton.innerText = element.id;

        newButton.addEventListener('click', () => {

            stopAllSounds(soundElements);
            console.log(element);
            element.currentTime = 0;
            element.play();

        });

        buttonPanel.appendChild(newButton);

    });

}

function stopAllSounds(soundElements) {
    
    soundElements.forEach(sound => sound.pause());
}
