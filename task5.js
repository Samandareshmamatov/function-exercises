let x1 = 5;
let x2 = 8;
let y1 = 2;
let y2 = 6;

function rectPS(a, b) {
    let s = a * b;
    let p = 2 * (a + b);
    return `Yuzasi ${s} peimetri ${p}`;
}
console.log(rectPS(Math.abs(x2 - x1), Math.abs(y2 - y1)))