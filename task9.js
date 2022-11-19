let k = 8125;
let r = 6;

function addRightDigit(num1, num2) {
    r += String(k);
    r = Number(r);
    return r;
}
console.log("Natija : " + addRightDigit(k, r));