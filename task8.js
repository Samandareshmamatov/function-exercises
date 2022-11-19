let k = 3525;
let r = 8;

function addRightDigit(num1, num2) {
    k += String(r);
    k = Number(k);
    return k;
}
console.log("Natija : " + addRightDigit(k, r));