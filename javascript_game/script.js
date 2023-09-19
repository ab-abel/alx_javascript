let btn_choice = 0;

// click start game to start

function userinput() {
    var choice_number = 0
    const startbtn = document.getElementById('start');
    startbtn.onclick = () => {
        alert("Welcome to Hoberton Javascript Game. The game rule is\
        Enter a Number from 0 - 9 and Guess the box that\
        house the number, you only have 5 attempt");

        while(true){

            var choice = prompt("Pick a Your Number between 0 - 9");
            var num = parseInt(choice);
            if(Number.isInteger(num) && num<10){
                alert('You enter the number ' + num);
                choice_number = num;
                // return choice_number;
                // console.log(choice_number);
                break;
            } else {
                alert('Please, Enter a valid Integer between 0 - 9');
            }  
        }
        // console.log(`2 ${choice_number}`);
        return choice_number;
        // call the other functions here
    }
}
// call the userinput();
let input_num = userinput();

/**
 * The Deh...
 */
const boxes = {
    'box_1' : 0,
    'box_2' : 0,
    'box_3' : 0,
    'box_4' : 0,
    'box_5' : 0,
    'box_6' : 0,
    'box_7' : 0,
    'box_8' : 0,
    'box_9' : 0
};



function changecolor (box, color) {
    document.getElementById(box).style.background = color; 
}

function setDisplay(value) {
    var display = document.getElementById('box-color');
    display.placeholder = `You have ${value} attempt left`;
}

/**
 * 
 * @param {String} id 
 * @param {String} color 
 * @returns 
 */
function box_event(id, color){
    let counter = 5;
    const box = id;
    const box_clicked = document.getElementById(box);
    box_clicked.onclick = function(){
        changecolor(box, color);
        setDisplay(counter--);
    }    
}

for(let i = 0; i <=9; i++) {
    box_event('box_1', 'red');
    box_event('box_2', 'red');
}
