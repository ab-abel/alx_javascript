const emailE1 = document.getElementById('email');
const btn = document.querySelector('button');

 btn.addEventListener('click', (e)=>{
    e.preventDefault();
    validateEmail();
 });

const isRequired = value => value === '' ? false : true;

const validateEmail = () => {

    let valid = false;

    const email  =  emailE1.value.trim();
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

const showError  = (error) => {
    const htmlField = document.getElementById('error');
    htmlField.textContent = error;
    htmlField.style.color ='red';
}

const showSucess = (success) => {
    const htmlField = document.getElementById('error');
    htmlField.textContent = success;
    htmlField.style.color = 'green';
}

const isEmailValid = (email) => {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
};




