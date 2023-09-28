// get html element from the page
const emailE1 = document.getElementById('email');
const usernameE1 = document.getElementById('name');
const btn = document.querySelector('button');

// listen to a click even
btn.addEventListener('click', (e)=>{
    
    // call the handle form submit fcn
    handleFormSubmit(e);
});

/**
 * handle form submission
 * @param {event} event 
 * @returns Null
 */
function handleFormSubmit(event) {

    // prevent form submition before validation
    event.preventDefault();

    // call the validation fcn
    if(validateEmail() && checkUsername() ) {
        showSucess('Form submitted successfully!');
        
        // proceed to submition
    } else {

        //show error
        showError('Please fill in all required fields');
    }
}


/** helper functions **/

// check if a vulue is empty or not
const isRequired = value => value === '' ? false : true;

// check if a value is between a certin length
const isBetween = (length, min, max) => length < min || length>max ? false : true;


/**
 * Validate username
 * @returns {boolean}
 */
const checkUsername = () => {

    // create 
    let valid = false;
    const min = 3;
    const max = 25;

    // escape white space using trim from input value
    const username = usernameE1.value.trim();

    // check for nullity
    if(!isRequired(username)) {
        valid = false;

    // check for length
    } else if(!isBetween(username.length, min, max)) {
        valid = false;
    }else{
        // this code runs if values pass test
        valid = true;
    }
    return valid;
}

/**
 * Validate email
 * @returns {Boolean}
 */
const validateEmail = () => {
    // define variables
    let valid = false;

    // escape white spaces
    const email  =  emailE1.value.trim();
    
    // check for nullity
    if(!isRequired(email)){
        valid = false;
    
    // check if email is rightly formated
    }else if(!isEmailValid(email)) {
        valid = false;
    }else{
        valid = true;
    }
    return valid;
}

/**
 * Show error message
 * @param {String} error 
 */
const showError  = (error) => {
    const htmlField = document.getElementById('error');
    htmlField.textContent = error;
    htmlField.style.color ='red';
}

/**
 * Show success mesage
 * @param {String} success 
 */
const showSucess = (success) => {
    const htmlField = document.getElementById('error');
    htmlField.textContent = success;
    htmlField.style.color = 'green';
}

/**
 * check email using reg expression
 * @param {string} email 
 * @returns {Boolean}
 */
const isEmailValid = (email) => {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
};
