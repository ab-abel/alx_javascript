

function setCookies () {
        const firstname = document.getElementById('firstname').value;
        const email = document.getElementById('email').value;
        
        if(firstname && email){
            Cookies.set('firstname', firstname);
            Cookies.set('email', email);
        }
}

function showCookies () {
        const show_cookies = document.createElement('p');
        show_cookies.innerHTML = 'Cookies:' + Cookies.get('firstname')+ ' ' + Cookies.get('email');
        document.body.appendChild(show_cookies);  
}

