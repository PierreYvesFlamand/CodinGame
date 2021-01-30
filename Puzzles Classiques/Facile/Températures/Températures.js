/**
 * Auto-generated code below aims at helping you parse
 * the standard input according to the problem statement.
 **/

const n = parseInt(readline()); // the number of temperatures to analyse
var inputs = readline().split(' ');
const temp = [];

if(n){
    for (let i = 0; i < n; i++) {
        const t = parseInt(inputs[i]);// a temperature expressed as an integer ranging from -273 to 5526
        temp.push(t)
    }

    console.log(temp.reduce((a, b) => Math.abs(a) > Math.abs(b) ? b : (Math.abs(a) === b ? Math.abs(a) : a), temp[0]));
}else {
    console.log('0')
}
