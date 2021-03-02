
// You should implement your task here.

module.exports = function towelSort (matrix) {
    let mas = [];

    if (!matrix || matrix.length == 0) return mas;

    return mas.concat(...matrix.map((item, index) => !(index % 2) ? item : item.reverse()));
}
