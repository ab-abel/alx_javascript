# JS HTML DOM manipulation

## General Objectives
    Understand the Document Object Model (DOM)
    Access and Manipulate Elements with JavaScript
    How to use CSS selectors and traverse the DOM tree
    How to work with event listeners/handlers

    Brief Introduction

    What is the Document Object Model (DOM)?
    The Document Object Model, often referred to as the DOM, is a crucial concept in web development. It forms the bridge between web pages and the JavaScript language, enabling you to interact with and manipulate the content and structure of a webpage in real-time. Understanding the DOM is like gaining the keys to the inner workings of a website.

    Access and Manipulate Elements with JavaScript
    One of the core skills that you need to develop as a web developer is the ability to access and manipulate HTML elements using JavaScript. Whether it’s changing the text within a paragraph, updating an image, or altering the style of an element, you’ll need to gain the power to make dynamic changes to web pages.

    Using CSS Selectors and Traversing the DOM Tree
    You should also master the art of using CSS selectors to pinpoint specific HTML elements within a page. Understanding how to traverse the DOM tree will enable you to navigate between elements, their parents, and their children with ease. With knowledge of this, you will be able to target the right element for modification or interaction.

    Working with Event Listeners/Handlers
    No interactive web application is complete without event handling. You’ll need to learn how to capture user interactions, such as clicks and keystrokes, and respond to them using event listeners and handlers. This skill will open doors to building engaging and responsive web experiences.


# ALL TASK

## Task 0
###  Play with the DOM
    Write a JavaScript program that demonstrates the basic concept of the DOM by accessing and modifying an HTML element.

    - Use the HTML code below as the starting point and add your JavaScript code as an internal <script> tag:

    - Write JavaScript code to select the element using its id and store it in a variable
    - Use the DOM API to modify the content of the <p> element to I successfully updated this paragraph with javascript
    - Make use of document.getElementById
    - Verify that the program successfully modifies the element content when the HTML file is opened in a browser.

File: 0-select-id.html

## Task 1
###  Selecting HTML Elements Using Selectors
   Write a JavaScript program that demonstrates the use of selectors to select specific HTML elements.

    Use the HTML code below as the starting point and add your JavaScript code as an internal <script> tag:
    
    -   Use the DOM API to modify the format of the <p class="highlight"> element to make the content boldened
    - Make use of document.querySelectorAll
    - Verify that the program successfully modifies the element content when the HTML file is opened in a browser.

File: 1-select-class.html

## Task 2
###  Modifying Element Content, Attributes, and Styles
Write a JavaScript program that demonstrates the use of selectors to select specific HTML elements.

Use the HTML code below as the starting point and add your JavaScript code as an internal <script> tag:

    - Write JavaScript code to select the <img> element using its id and store it in a variable.
    - Use the DOM API to modify the following:
        - the src to https://picsum.photos/200/301,
        - the alt to New image
        - the border style to 2px solid red
    - Make use of document.getElementById
    - Verify that the program successfully modifies the element content when the HTML file is opened in a browser.

File: 2-select-image.html

## Task 3
###  Object
Update this script to replace the value 12 with 89:

    - You are not allowed to use var

example:
    const myObject = {
    type: 'object',
    value: 12
    };
    console.log(myObject);
    /*
    YOUR CODE HERE
    */
    console.log(myObject);

File: 12-object.js

## Task 4
###  Add file

Write a function that returns the addition of 2 integers.

    - The function must be visible from outside
    - The name of the function must be add
    - You are not allowed to use var

File: 13-add.js

#Advanced task

## Task 5
###  Const or not const

Write a file that modifies the value of myVar to 333

example:
    myVar = 89;
    require('./100-let_me_const')
    console.log(myVar);
    guillaume@ubuntu:~/$ ./100-main.js
    333
File: 100-let_me_const.js

## Task 6
###  Call me Moby
Write a function that executes x times a function.

    - The function must be visible from outside
    - Prototype: function (x, theFunction)
    - You are not allowed to use var

example:
    const addMeMaybe = require('./102-add_me_maybe').addMeMaybe;
    addMeMaybe(4, function (nb) {
    console.log('New value: ' + nb);
    });

File: 101-call_me_moby.js

## Task 8
###  Increment object
Update this script by adding a new function incr that increments the integer value.

    - You are not allowed to use var

example:
    const myObject = {
    type: 'object',
    value: 12
    };
    console.log(myObject);
    /*
    YOUR CODE HERE
    */
    myObject.incr();
    console.log(myObject);
    myObject.incr();
    console.log(myObject);
    myObject.incr();
    console.log(myObject);

File: 103-object_fct.js
