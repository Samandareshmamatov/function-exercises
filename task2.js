let a = 5;

function power234(number) {
    let second = number ** 2;
    let third = number ** 3;
    let fourth = number ** 4;
    return `${a} ning 2-darajasi : ${second}; 3-darajasi : ${third}; 4-darajasi : ${fourth}; `;
}
console.log(power234(a));