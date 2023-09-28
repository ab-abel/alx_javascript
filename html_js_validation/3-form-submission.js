const emailE1 = document.getElementById('email');
const usernameE1 = document.getElementById('name');
const btn = document.querySelector('button');

 btn.addEventListener('click', (e)=>{
    e.preventDefault();
    if(validateEmail() && checkUsername() ) {
        showSucess('Form submitted successfully!');
        //proceed to submition
    } else {
        showError('Please fill in all required fields');
    }
 });

const isRequired = value => value === '' ? false : true;
const isBetween = (length, min, max) => length < min || length>max ? false : true;

const checkUsername = () => {

    let valid = false;
    const min = 3;
    const max = 25;

    const username = usernameE1.value.trim();

    if(!isRequired(username)) {
        valid = false;
    } else if(!isBetween(username.length, min, max)) {
        valid = false;
    }else{
        valid = true;
    }
    return valid;
}


const validateEmail = () => {

    let valid = false;

    const email  =  emailE1.value.trim();
    if(!isRequired(email)){
        valid = false;
    }else if(!isEmailValid(email)) {
        valid = false;
    }else{
        valid = true;
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
