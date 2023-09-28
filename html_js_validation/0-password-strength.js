// get tags from HTML
const passwordE1 = document.getElementById('password');
const btn = document.querySelector('button');

// listen to btn click event
 btn.addEventListener('click', (e)=>{
    e.preventDefault();
    validatePassword();
 });


/**
 *@function validate password
 *@returns {Boolean}
 */
const validatePassword = () => {
    
    // define variables
    let valid = false;

    // escape password values
    const password  =  passwordE1.value.trim();
    
    // check using helper fcn
    if(!isRequired(password)){
        showError('password cannot be empty');
    }else if(!isShort(password.length, 8)) {
        showError('Password lenght must be > 8');
    }else if(!isLong(password.length, 20)) {
        showError('Password lenght must be < 20');
    }else if(!isLowercase(password)) {
        showError('Password must contain atleast one lowercase letter')
    }else if(!isUppercase(password)) {
        showError('Password must contain atleast one uppercase letter')
    }else if(!isNumeric(password)) {
        showError('Password must contain atleast one numeric digit')
    }else if(!isSpecialCharacters(password)) {
        showError('Password must contain atleast one special character')
    
    }else{

        // only run if the test pass
        valid = true;
    }

    return valid;
}

/**
 * @function ShowError 
 * @param {String} error 
 */
const showError  = (error) => {
    const htmlField = document.getElementById('error');
    htmlField.textContent = error;

}


/*** Helper Functions ***/

const isRequired = value => value === '' ? false:true;
const isShort = (length, min) => length < min ? false : true;
const isLong = (length, max) => length > max ? false : true;

/**
 * @function isLowercase
 * @param {String} password 
 * @returns 
 */
const isLowercase = (password) => {
    const re = new RegExp("^(?=.*[a-z])");
    return re.test(password);
}

/**
 * @function isUppercase
 * @param {String} password
 * @returns 
 */
const isUppercase = (password) => {
    const re = new RegExp("^(?=.*[A-Z])");yh;
    return re.test(password);
}

/**
 * @function isNumeric
 * @param {String} password 
 * @returns 
 */
const isNumeric = (password) => {
    const re = new RegExp("^(?=.*[0-9])");
    return re.test(password);
}

/**
 * @function isSpecialCharacters
 * @param {String} password 
 * @returns 
 */
const isSpecialCharacters = (password) => {
    const re = new RegExp("^(?=.*[!@#\$%\^&\*])");
    return re.test(password);
}



