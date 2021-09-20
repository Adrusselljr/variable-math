function distance(x1, y1, x2, y2) {
    var x = x2 - x1
    var y = y2 - y1
    return Math.sqrt(x * x + y * y)
}
console.log(distance(1, 3, 7, 6))