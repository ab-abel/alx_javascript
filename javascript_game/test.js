//this is a function
/**
 * 
 * @param {String} firstName 
 * @param {String} lastName 
 */
const welcome = (firstName, lastName) => {
    const fullName =  `${firstName} ${lastName}`;

    const displayFullName = () => {
        alert(`welcome ${fullName}!`);
    }
    displayFullName();
}

// this is also a function

/**
 * 
 * @param {String} firstName 
 * @param {String} lastName 
 */
function welcome(firstName, lastName) {
    const fullName = `${firstName} ${lastName}`;

    function displayFullName() {
        alert(`welcome ${fullName}!`);
    }
    displayFullName();
}

/** Task 1 */

const globalVariable = 'Welcome';

// this is a function
function outer() {
    alert(globalVariable);
    const course = 'Hoberton';
    
    function inner () {
        alert(`${globalVariable} ${course}`)
        const exclamation = '!';
        function inception() {
            alert(`${globalVariable} ${course}${exclamation}`);
        }
        inception();
    }
    inner();
}
outer();

// Task 5 
function change_color (color){
    document.body.style.background = color;
}

function main(){
    const spooky = change_color ('green');

    const welcomeMessage = document.createElement('p');
    welcomeMessage.textContent = 'Welcome Holberton!';
    document.body.appendChild(welcomeMessage);


const createBtn = document.createElement('button');
createBtn.textContent = 'Tamara';
document.body.appendChild(createBtn);

createBtn.onclick = () => {
    change_color('white');
}

    const btn = document.createElement('button');
    btn.textContent = 'Spooky';

    btn.addEventListener('click', function(){
        spooky;
    });
}   

main();
/* 
document.createElement create something like this
<p></p>
<button></button> */

change_color('red');