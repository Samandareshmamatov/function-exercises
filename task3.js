let a = 12;
let b = 3;

function mean(number1, number2) {
    let addition = (number1 + number2) / 2;
    let multiplication = (number1 * number2) ** (1 / 2);
    return `O'rta arifmetigi : ${addition}; O'rta geometrigi : ${multiplication}`;
}
console.log(mean(a, b));