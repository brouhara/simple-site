

var array = ['Bill', 'Bob', 'Betty'];

function printStuff(array) {
    for (var i = 0; i < array.length; i++) {
        var element = array[i];
    }
}

function each( array, fn) {
    for (var i = 0; i < array.length; i++) {
        fn(array[i]);
    }
}

var numArray = [2,4,6,8];

numArray.reduce( function (pValue, cValue) {
    pValue += cValue;
    console.log(cValue * cValue);
    return pValue;
}, 0);

numArray.reduce()
