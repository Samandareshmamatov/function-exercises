let a = 12;
let b = 25;

function swap(a, b) {
    a = a + b - (b = a);
    return `${a} va ${b}`;
}
console.log(swap(a, b));