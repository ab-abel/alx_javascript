const passwordE1 = document.getElementById('password');
const btn = document.querySelector('button');

 btn.addEventListener('click', (e)=>{
    e.preventDefault();
    validatePassword();
 });


 const isRequired = value => value === '' ? false:true;

const isShort = (length, min) => length < min ? false : true;

const isLong = (length, max) => length > max ? false : true;

const validatePassword = () => {
    let valid = false;

    const password  =  passwordE1.value.trim();
    console.log(password);
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
        valid = true;
    }

    return valid;
}

const showError  = (error) => {

    const htmlField = document.getElementById('error');
    // htmlField.textContent = '';
    htmlField.textContent = error;

}


const isLowercase = (password) => {
    const re = new RegExp("^(?=.*[a-z])");
    return re.test(password);
}

const isUppercase = (password) => {
    const re = new RegExp("^(?=.*[A-Z])");yh;
    return re.test(password);
}

const isNumeric = (password) => {
    const re = new RegExp("^(?=.*[0-9])");
    return re.test(password);
}

const isSpecialCharacters = (password) => {
    const re = new RegExp("^(?=.*[!@#\$%\^&\*])");
    return re.test(password);
}



