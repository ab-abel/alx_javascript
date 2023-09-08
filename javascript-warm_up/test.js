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


// class and Object

const person = {
    name: ['Bob', 'John', 'Doe'],
    age:32,
    bio: function () {
        console.log(`${this.name[0]} 
        ${this.name[2]} is ${this.age} years old.`);
    },
    introduceSelf:function () {
        console.log(`Hi! i'M ${this.name[1]}`);
    },

};

person.farware = function () {
    console.log(`Goodbye ${person.name[0]}`);
};


// using constructior object 

function creatCar(name) {
    const obj = {};

    //property name
    obj.name = name;

    // method
    obj.brand = function () {
        console.log(`This is a GLE brand of ${this.name}`);
    };
    // this return the object 
    return obj;
};
 
//using a constructor clas
function Food(name) {
    this.name = name;
    this.introduceFood = function () {
        console.log(`Hi I'm ${this.name} `);
    };
};

class Person {
    name;
    constructor(name) {
        this.name = name;
    }
    introduceSelf () {
        console.log(`Hi ${this.name}`);
    };
};

class Professor extends Person {
    teaches;

    constructor(name, teaches) {
        super(name);
        this.teaches = teaches;
    };

    introduceSelf() {
        console.log(`Hi, ${this.name} is my name i will be your,
        ${this.teaches} this summmer`);
    };

    grade(paper) {
        const grade = Math.floor(Math.random() * (5-1) + 1);
        console.log(grade);
    };

}

class Student extends Person {
    #year;

    constructor(name, year) {
        super(name);
        this.#year = year;
    }

    introduceSelf() {
        console.log(`Hi, i'm ${this.name},
        I am in year ${this.#year}`);
    };

    canStudyArchery() {
        return this.#year > 1;
    };
}

class Rectangle {
    constructor(height, width){
        this.height = height;
        this.width = width;
    }
}

