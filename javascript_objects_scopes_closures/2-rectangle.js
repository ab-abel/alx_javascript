#!/usr/bin/node
// this code return nul if w or w <=0

module.exports = class Rectangle {
    constructor(w, h) {
        if(w <= 0 || h <= 0) {
            return null;
        } else {
            this.width = w;
            this.height = h;
        }
    }
}