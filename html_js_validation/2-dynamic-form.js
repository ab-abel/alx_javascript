// get all the required field from the HTMl page
const form = document.querySelector('#dynamicForm');
const select = document.getElementById('numFields');
const inputContainer = document.getElementById('inputContainer');


/**
 *  create a input form for case 
 *  where user has not select any value 
*/
    const inputField = document.createElement('input');
    inputField.setAttribute('type','text');
    inputField.setAttribute('name','field1');
    inputField.setAttribute('placeholder', 'Field 1');
    const small = document.createElement('small');
    small.setAttribute('id', 'small1');
    small.style.color = 'red';
    inputContainer.appendChild(inputField);
    inputContainer.appendChild(small);


// fucntionn that generate dynamic form
function generateInputFields () {

    // listen to a select event
    select.addEventListener('change', (e)=>{
        
        // prevent the btn from submitting the form
        e.preventDefault();
        
        // get the parent div
        document.getElementById("inputContainer").innerHTML = "";
    
        // loop through the number of value selected
        for(let i = 0; i < select.value; i++){

            // and create an input form on every iteration
            const inputField = document.createElement('input');
            
            // form type must be a text
            inputField.setAttribute('type','text');

            // the name also =field1, field2... etc
            inputField.setAttribute('name',`field${i+1}`);

            // input id = field1, field2...etc
            inputField.setAttribute('id',`field${i+1}`);
            
            // input default text 
            inputField.setAttribute('placeholder', `Field ${i+1}`);
            
            // create a tag to hold the error mssg
            const small = document.createElement('small');

            // set the id = small1, small2... etc
            small.setAttribute('id', `small${i+1}`);

            // set error collor
            small.style.color = 'red';

            // append to the input first to the parent div
            inputContainer.appendChild(inputField);

            // append the error element to the parent tag
            inputContainer.appendChild(small);
        }
    });
}

// call the generate FCN
generateInputFields();


// return type bolean for validation
const isRequired = value => value === '' ? false : true;

/**
 * 
 * @param {String} value 
 * @returns bolean
 */
function validateForm (value) {
    
    // create a bolean, valid
    let valid = false; 

    // check if value is empty
    if(!isRequired(value)){
        valid = false;
    }
    else{
        // this run if value not empty
        valid = true;
    }
    return valid;
}


// create a btn var
const btn = document.querySelector('button');

// listen if btn is clidk
btn.addEventListener('click', (e)=>{
    
    // prevent form from being submitted
    e.preventDefault();

    // get the number of input created dynamically
    const results = document.querySelectorAll('input');

    // loop through each of the item
    results.forEach((item, index) => {

        // if the form isvalidated not to be empty
        if(validateForm(item.value)) {
            // clear the error function
            const error = document.getElementById(`small${index+1}`);
            error.innerHTML = '';
            
            // set a var to true for further comparison before submission            
        }else{

            // return error 
            const error = document.getElementById(`small${index+1}`);
            error.innerHTML = 'Please fill in all fields';
        }
    })

})