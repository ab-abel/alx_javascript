#!/usr/bin/node

const Square = require("./5-square");

class Square extends Square {
    constructor(value){
        super(value);
    }

    charPrint(c){
        if(c == null){
            super.print();
        } else {
            super.print('C');
        }
    }

}

