let btn_choice = 0;

// click start game to start

function userinput() {
    var choice_number = 0
    const startbtn = document.getElementById('start');
    // startbtn.onclick = () => {
        alert("Welcome to Hoberton Javascript Game. The game rule is\
    Enter a Number from 1 - 9 and Guess the box that\
    houses the number, you only have 5 attempt");

        while(true){
            var name = prompt('Enter Your name:')
            var choice = prompt("Pick a Your Number between 1 - 9");
            var num = parseInt(choice);
            if(Number.isInteger(num) && num<10 && !isSpecialCharacters(name) &&!isNumeric(name)){
                alert('Hello '+ name + ', you picked ' + num);
                choice_number = num;
                // return choice_number;
                // console.log(choice_number);
                sessionStorage.setItem('name', name);
                sessionStorage.setItem('number', num);
                break;
            } else {
                alert('Please, Enter a valid Integer between 1 - 9 and name must not contain integer or special character');
            }  
        }
        // console.log(`2 ${choice_number}`);
        return choice_number;
        // call the other functions here
    // }
}

/**
 * @function isSpecialCharacters
 * @param {String} name 
 * @returns 
 */
const isSpecialCharacters = (name) => {
    const re = new RegExp("^(?=.*[!@#\$%\^&\*])");
    return re.test(name);
}

/**
 * @function isNumeric
 * @param {String} name 
 * @returns 
 */
const isNumeric = (name) => {
    const re = new RegExp("^(?=.*[0-9])");
    return re.test(name);
}

/**
 * @function setRandomItem
 * @param {Array} arr 
 * @param {BigInteger} value 
 * @returns {Array}
 * @example setRandomItem([0,0,0,0], 8)
 */
function setRandomItem(arr, value){
    //get random index from arr
    const randIndex = Math.floor(Math.random() * arr.length);
    
    // replace the content of the  rand index
    arr[randIndex] = value;
    // return the new arr
    return arr;
}

/**
 * @function setBoxValue
 * @returns {boxes}
 * 
 */
function setBoxValue(){
    const empty_arr = [0, 0, 0, 0, 0, 0, 0, 0, 0];
    const value = sessionStorage.getItem('number');
    const rand_arr_with_user_val = setRandomItem(empty_arr, value);
    const boxes = document.getElementsByClassName('box');
    boxes[0].setAttribute('value', 7);
    
    for (let i = 0; i < boxes.length; i++){
        boxes[i].setAttribute('value', rand_arr_with_user_val[i]);
    }
    return(boxes);
    // console.log(boxes[2].value);
}

/**
 * @function changecolor
 * @param {String} box 
 * @param {String} color 
 */
function changecolor (box, color) {
    document.getElementById(box).style.background = color; 
}

function setCounterDisplay(value) {
    var display = document.getElementById('box-color');
    display.placeholder = `You have ${value-1} attempt left`;
}

function setDisplay(value) {
    var display= document.getElementById('box-color');
    display.placeholder = value;
}

function setScore(counter, value) {
    var display= document.getElementById('box-color');
    display.placeholder = `After ${5 - counter} Attempt. You scored ${value}`;
}

function changeText(element, text) {
    const element_text = document.getElementById(element);
    element_text.innerText = text;
}

//  save game
function saveScore(name, score) {
    let players_score = localStorage.getItem('players');
    
    if (players_score) {
        players_score = JSON.parse(players_score);
    } else {
        players_score = [];
    }

    const player = {
        name: name,
        score: score,
    };
    players_score.push(player);
    localStorage.setItem('players', JSON.stringify(players_score));
}


function disable_btn(btn_id) {
    document.getElementById(btn_id).disable_btn = true;
}

// game 
// call the userinput();
// let input_num = userinput();

function play_game() {

    changeText('welcome', `Welcome, ${sessionStorage.getItem('name')}`);
    
    // changeText('start', 'End Game');
    setDisplay('Game started');

    // const end_game = document.getElementById('start');
    // end_game.addEventListener('click', function(){
        
    //     sessionStorage.removeItem('name');
    //     sessionStorage.removeItem('number');
    //     changeText('start', 'Start Game');
    //     // userinput();
    // })


    let counter = 5;
    let score = 0;
    const box_arr = setBoxValue();
    let bg_color_green = false;

    for(let i = 1; i < box_arr.length+1; i++) {
        const green_box_id = document.getElementById(`box_${i}`).value;
        const btn_click = document.getElementById(`box_${i}`)
        btn_click.addEventListener('click', ()=>{
            if(green_box_id !== '0' && counter !== 0 && !bg_color_green){
                changecolor(`box_${i}`, 'green');
                setCounterDisplay(counter);
                // disable all boxes;
                score = 20 * counter;
                bg_color_green = true;
                counter --;
                setScore(counter, score);
                changeText('start', 'Play Again');
                const save = document.getElementById('save');
                save.addEventListener('click', function(){
                    saveScore(sessionStorage.getItem('name'), score);
                    setDisplay('Score saved succesfully');
                })
                
            }else if (counter !== 0 && !bg_color_green){
                setCounterDisplay(counter);
                counter --;
                // console.log('no');
                changecolor(`box_${i}`, 'red');
                disable_btn('save');
            }else{
                setScore(counter, score);
                // you made 6 - counter attempt your score = score
            }
        });
    }  
}

// play Game;
const end_game = document.getElementById('start');

if(sessionStorage.getItem('number')){
    play_game();
    changeText('start', 'Reset Game');
}else{
    changeText('start', 'Start Game');
    end_game.addEventListener('click', ()=>{
        userinput();
    });
}

// reset game and start a new game
const new_game = document.getElementById('new_game');
new_game.addEventListener('click', function(){
    sessionStorage.removeItem('name');
    sessionStorage.removeItem('number');
    location.reload();
});


/*
 const player_name = {
   name: name,
   score: score,
 };
 menuItems.push(menuItem);
 window.localStorage.setItem("ProductsInCart", JSON.stringify(menuItems));
});

*/

function save_score(name, score){
    let players_score = localStorage.getItem('players');
    
    if (players_score) {
        players_score = JSON.parse(players_score);
    } else {
        players_score = [];
    }

    const player = {
        name: name,
        score: score,
    };
    players_score.push(player);
    localStorage.setItem('player', JSON.stringify(players_score));
}

/**************For Score Page ************/

