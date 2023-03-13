const removeFromArray = function (array, ...moreArgs) {
    let index;
    for (let i = 0; i < moreArgs.length; i++) {
        index = array.indexOf(moreArgs[i]);
        if (index > -1) {
            array.splice(index, 1);
        }
    }
    return array;
};
// Do not edit below this line
module.exports = removeFromArray;
