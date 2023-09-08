/**
 * Learning to use method in JS
 */

 class Rectangle {

    // setter
     constructor(height, width) {
         this.height = height;
         this.width = width;
     }

    //  getter

    get area(){
        return this.calArea();
    }

    // calculate area
    calArea(){
        return this.width * this.height;
    }

    // get tthe area sides
    *getSides() {
        yield this.height;
        yield this.width;
        yield this.height;
        yield this.width;
    }
 }


// STatic methods 

class Animal {
    speak() {
        return this;
    }

    static eat () {
        return this;
    }
}