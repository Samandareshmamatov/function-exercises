let a = 12558052015397;

function invertDigit(a) {
    a += "";
    let reverseA = "";
    for (let i = (a.length - 1); i >= 0; i--) {
        reverseA += a[i];
    };
    return `${a} ning teskarisi ${reverseA}`;
}
console.log(invertDigit(a));