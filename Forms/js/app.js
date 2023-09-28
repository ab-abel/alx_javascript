const usernameE1 = document.querySelector('#username');
const emailE1 = document.querySelector('#email');
const passwordE1 = document.querySelector('#password');
const confirmPasswordE1 = document.querySelector('#confirm-password');

const form = document.querySelector('#signup');

form.addEventListener('submit', function (e) {
    
    // prevent the form from submitting
    e.preventDefault();

    let isUsernameValid = checkUsername(),
        isEmailValid = checkEmail(),
        isPasswordValid = checkPassword(),
        isConfirmPassword  = checkConfirmPassword();

    let isFormValid = isUsernameValid && 
        isEmailValid && 
        isPasswordValid &&
        isConfirmPassword;

    
    if (isFormValid) {
        //redirect to server
    }
})


// utitlity fcn

const isRequired = value => value === '' ? false : true;

const isBetween = (length, min, max) => length < min || length>max ? false : true;

const isEmailValid = (email) => {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
};

const isPasswordSecure = (password) => {
    const re = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");
    return re.test(password);
};

const showError = (input, message) => {

    // get the parent elemet which is div that contain form-field
    const formField = input.parentElement;

    // remove success class and add error
    formField.classList.remove('success');
    formField.classList.add('error');

    // add the error to the text field 
    const error = formField.querySelector('small');
    error.textContent = message;
};

const showSuccess = (input) => {

    const formField = input.parentElement;

    formField.classList.remove('error');
    formField.classList.add('success');

    const error = formField.querySelector('small');
    error.textContent = '';
}

const checkUsername = () => {

    let valid = false;
    const min = 3;
    const max = 25;

    const username = usernameE1.value.trim();

    if(!isRequired(username)) {
        showError(usernameE1, 'Username cannot be blank.');

    } else if(!isBetween(username.length, min, max)) {
        showError(usernameE1, `username must bebetween ${min} and ${max}`);
    }else{
        showSuccess(usernameE1);
        valid = true;
    }
    return valid;
}

const checkEmail = () => {
    let valid = false;
    const email = emailE1.value.trim();
    if(!isRequired(email)){
        showError(emailE1, 'Email is not valid');
    }else {
        showSuccess(emailE1);
        valid = true;
    }

    return valid;
}


const checkPassword = () => {
    let valid = false;

    const password = passwordE1.value.trim();

    if(!isRequired(password)) {
        showError(passwordE1, 'Password cannot be blank');
    }else if (!isPasswordSecure(password)) {
        showError(passwordE1, 'Password must be at least 8 characters this includes\
         1 lowercase charater, 1 uppercase character, 1 number and onespecial character ');
    } else {
        showSuccess(passwordE1);
        valid = true;
    }
    return valid;
};

const checkConfirmPassword = () => {
    let valid = false;
    const confirmPassword = confirmPasswordE1.value.trim();
    const password = passwordE1.value.trim();

    if(isRequired(confirmPassword)) {
        showError(consirmPasswordE1, 'Please enter the password again');
    }else if (password !== confirmPassword) {
        showError(confirmPasswordE1, 'Confirm password does not match');

    }else {
        showSuccess(confirmPasswordE1);
        valid = true;

    }
    return valid;
}

// Debounce fcn for 

const debounce = (fn, delay = 500) => {
    let timeoutId;

    return (...args) => {
        if(timeoutId) {
            clearTimeout(timeoutId);
        }

        timeoutId = setTimeout(() => {
            fn.apply(null, args)
        }, delay);
    };
};

form.addEventListener('input', debounce(function (e){
    switch(e.target.id) {
        case 'username':
            checkUsername();
            break;
        case 'email':
            checkEmail();
            break;
        case'password':
            checkPassword();
            break;
        case 'confirm-password':
            checkConfirmPassword();
            break;
    }
})) 