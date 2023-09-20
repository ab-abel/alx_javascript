const setCookies = () => {
    const firstname = document.getElementById('firstname');
    const email = document.getElementById('email');

    if(firstname != null && email != null) {
        Cookies.set('firstname', firstname);
        Cookies.set('email', email);
    }

}

const showCookies = () => {

    const display = document.createElement('p');
    display.innerHTML = 'Cookies: '+ Cookies.get();
    document.body.appendChild(display);
}

document.getElementById('login').addEventListener('click', ()=>{
    setCookies();
});

document.getElementById('show_cookies').addEventListener('click', ()=>{
    showCookies();
});

