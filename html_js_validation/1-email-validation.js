// get element from the HTML page
const emailE1 = document.getElementById('email');
const btn = document.querySelector('button');

// create a btn listening event
 btn.addEventListener('click', (e)=>{
    e.preventDefault();
    validateEmail();
 });



/**
 * @function validateEmail
 * @returns {Boolean}
 */
const validateEmail = () => {

    // defines variable
    let valid = false;

    // escape the inputed strings
    const email  =  emailE1.value.trim();

    // vaidation check
    if(!isRequired(email)){
        showError('email cannot be empty');
    }else if(!isEmailValid(email)) {
        showError('email must be a vaild email')
    }else{
        valid = true;
        showSucess('Email test passed')
    }
    return valid;
}

/**
 * @function ShowError
 * @param {String} error 
 * @returns {null}
 */
const showError  = (error) => {
    const htmlField = document.getElementById('error');
    htmlField.textContent = error;
    htmlField.style.color ='red';
}

/**
 * @function showSucess
 * @param {String} error 
 * @returns {null}
 */
const showSucess = (success) => {
    const htmlField = document.getElementById('error');
    htmlField.textContent = success;
    htmlField.style.color = 'green';
}

/***** Helper Functions ******/
const isRequired = value => value === '' ? false : true;

/**
 * @function isEmailValid
 * @param {String} email 
 * @returns {Boolean}
 */
const isEmailValid = (email) => {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
};




