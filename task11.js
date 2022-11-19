let x = 250;
let y = 25;

function minMax(x, y) {
    if (x > y) {
        x = y + x - (y = x);
    }
    return `${x} va ${y}`;
}
console.log(minMax(x, y));