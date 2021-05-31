
let array = [];

function unroll(squareArray) {
    let unrolled = [];

    // check if array of arrays is empty before doing anything
    while(squareArray.length > 0){

    // reduce square to smaller square by grabbing all edges then recursion to pass smaller square back in to unroll

    // grab top row
    unrolled = [...unrolled, squareArray.shift()];

    // then grab right side column
    unrolled = [...unrolled, squareArray.map(arr => arr.pop())];

    // then grab bottom
    // if first two actions end the array this will reverse an undefined array which will cause an error
    // adding in if statement to skip this if array is empty
    if(squareArray.length>0){
    unrolled = [...unrolled, squareArray.pop().reverse()];
}
    // then grab left side
    unrolled = [...unrolled, squareArray.map(arr => arr.shift()).reverse()];

    }
    return unrolled.flat();
};



module.exports = unroll;
