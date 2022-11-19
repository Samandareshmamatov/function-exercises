let a = 2;

function triangle(a) {
    let p = 3 * a;
    let s = (3 ** (1 / 2) / 4) * (a ** 2)
    return `Yuzasi ${s} peimetri ${p}`;
}
console.log(triangle(a));