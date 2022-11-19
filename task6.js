let a = 12598;

function digitCountSum(a) {
    a += "";
    let sum = 0;
    let count = 0;
    for (let i = 0; i < a.length; i++) {
        sum += +a[i];
        count++;
    }
    return `Raqamlar soni ${count}; Raqamlar yig'indisi ${sum}`;
}
console.log(digitCountSum(a));