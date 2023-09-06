let myName = "JOHN DOE"

document.querySelector('p').textContent = myName;

function multiply(num1,num2){
    let result = num1* num2;
    return result;
}


multiply(23,0.599898)


document.querySelector("button").addEventListener('click', 
function(){
    alert("who touched me");
});

function setUserName(){
    const myName = prompt("Please Enter Your name");
    localStorage.setItem('name', myName);
    document.querySelector('h1').textContent =  `Mozilla is cool, ${myName}`;
}

if(!localStorage.getItem("name") {
    setUserName();
} else {
    const storedName = localStorage.getItem("name");
    document.querySelector('h2').textContent = "Moxila is stored, " +{storedName};
}
