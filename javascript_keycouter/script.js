const textArea = document.getElementById('text-area');

let counter = 0;

const ignoreKey = ['Backspace', 'Shift', 'Control','CapsLock', 'Enter', 'Alt'];

textArea.onkeydown = function(event) {
    const output = document.getElementById('display');
    let keyStroke = event.key;

    if(!ignoreKey  )
}