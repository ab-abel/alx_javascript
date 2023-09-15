/**
 * 
 * @param {BigInteger} size 
 * @param {String} weight 
 * @param {String} transform 
 * @param {String} background 
 * @param {String} color 
 */
const changeMode = (size, weight, transform, background, color) => {
    return () => {
        document.body.style.fontSize = size + 'px';
        document.body.style.fontWeight = weight;
        document.body.style.textTransform = transform;
        document.body.style.backgroundColor = background;
        document.body.style.color = color;
    };
}


function main() {

    // set bg color and properties
    const spooky = changeMode(9, 'bold', 'uppercase', 'pink', 'green');
    const darkMode = changeMode(12, 'bold', 'capitalize', 'black', 'white');
    const screamMode = changeMode(12, 'normal', 'lowercase', 'white', 'black');

    // add a paragraph to the page
    const welcomeMessage = document.createElement('p');
    welcomeMessage.textContent = 'Welcome Holberton!';
    document.body.appendChild(welcomeMessage);

    //  create Btn
    const spookyBtn = document.createElement('button');
    spookyBtn.textContent = 'Spooky';
    document.body.appendChild(spookyBtn);
    
    //  create Btn
    const darkmoodBtn = document.createElement('button');
    darkmoodBtn.textContent = 'Dark mode';
    document.body.appendChild(darkmoodBtn);
    
    //  create Btn
    const screenmoodBtn = document.createElement('button');
    screenmoodBtn.textContent = 'Scream mode';
    document.body.appendChild(screenmoodBtn);
    
    // add click event to btn
    spookyBtn.addEventListener('click', ()=>{
        spooky();
    });

    // add click event to btn
    darkmoodBtn.addEventListener('click', ()=>{
        darkMode();
    });

    // add click event to btn
    screenmoodBtn.addEventListener('click', () => {
        screamMode();
    });

}

// call the main fcn.
main();