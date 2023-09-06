/**
 * A funstion tha execute
 * x times a funxtion
 */

exports.callMeMoby = function (x, theFunction) {
    for (let i = 0; i < x; i++){
        theFunction();
    };
};