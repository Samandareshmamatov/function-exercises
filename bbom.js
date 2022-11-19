let n = 15275841510;

function boom(a) {
    a += "";
    n += "";
    let string;
    for (let i = 0; i < a.length; i++) {
        if (a[i] == "7") {
            string = "Boom!"
        } else {
            string = 0;
        }
    }
    console.log(string);
    if (string != 0) {
        return "Boom!";
    }
    return "Sonda 7 yo'q"
}
console.log(boom(n));