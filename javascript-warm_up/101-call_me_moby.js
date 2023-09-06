/**
 * A funstion tha execute
 * x times a funxtion
 */

function callMeMoby(x, y){
    y();
    return x * y;
}

callMeMoby(3, function () {
    console.log('C is fun');
});