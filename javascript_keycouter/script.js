const textArea = document.getElementById('charter-field');

let counter = 0;

const ignoreKey = ['Backspace', 'Shift', 'Control', 'CapsLock', 'Enter', 'Alt'];

textArea.onkeydown = function(event) {
    const output = document.getElementById('display');
    let keyStroke = event.key;

    // if(!ignoreKey  
    if(keyStroke) {
        output.textContent = `the button is pressed ${counter} times`
    }
    counter++;
}