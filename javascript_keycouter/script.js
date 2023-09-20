const textArea = document.getElementById('charter-field');

let counter = 0;

const ignoreKey = ['Backspace', 'Shift', 'Control', 'CapsLock', 'Enter', 'Alt'];

textArea.onkeydown = function(event) {
    const output = document.getElementById('display');
    let keyStroke = event.key;

    if(!ignoreKey.includes(keyStroke)) {
        counter++;
    }
    else if (keyStroke === 'Backspace' && counter > 0) 
    {
        counter = counter - 1;
    } 
    if(counter >= 50){
        alert("Maximum characters should be " + counter);
        return;
    }
    output.textContent = `You types ${counter} character(s)`;
}