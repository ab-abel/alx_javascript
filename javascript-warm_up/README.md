# JavaScript - Warm up
## General
    Background Context
    JavaScript is used for many things. At ALX, you will use JavaScript for 2 reasons:

        - Scripting (same as we did with Python)
        - Web front-end  
    
    For the moment, and for learning all basic concepts of this language, we will do some scripting.

# ALL TASK

## Task 0
###  First constant, first print
Write a script that prints “JavaScript is amazing”:

    - You must create a constant variable called myVar with - the value “JavaScript is amazing”
    - You must use console.log(...) to print all output
    - You are not allowed to use var

File: 0-javascript_is_amazing.js

## Task 1
###   languages
Write a script that prints 3 lines:

    - The first line: “C is fun”
    - The second line: “Python is cool”
    - The third line: “JavaScript is amazing”
    - You must use console.log(...) to print all output
    - You are not allowed to use var

File: 1-multi_languages.js

## Task 2
###  Loop to languages
Write a script that prints 3 lines: (like 1-multi_languages.js) but by using an array of string and a loop

    - The first line: “C is fun”
    - The second line: “Python is cool”
    - The third line: “JavaScript is amazing”
    - You must use console.log(...) to print all output
    - You are not allowed to use var
    - You are not allowed to use any if/else statement
    - You can use only one console.log
    - You must use a loop (while, for, etc.)

File: 6-multi_languages_loop.js

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
