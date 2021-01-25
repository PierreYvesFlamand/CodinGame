/**
 * Auto-generated code below aims at helping you parse
 * the standard input according to the problem statement.
 **/

var inputs = readline().split(' ');
const W = parseInt(inputs[0]); // width of the building.
const H = parseInt(inputs[1]); // height of the building.
const N = parseInt(readline()); // maximum number of turns before game over.
var inputs = readline().split(' ');
const X0 = parseInt(inputs[0]);
const Y0 = parseInt(inputs[1]);

let x_start = 0;
let x_end = W;
let y_start = 0;
let y_end = H;
let x = X0;
let y = Y0;

// game loop
while (true) {
    const bombDir = readline().split(''); // the direction of the bombs from batman's current location (U, UR, R, DR, D, DL, L or UL)

    if(bombDir.includes('U')){
        y_end = y;
        y = Math.floor((y_start + y_end) / 2);
    }else if(bombDir.includes('D')){
        y_start = y;
        y = Math.floor((y_start + y_end) / 2);
    }
    if(bombDir.includes('L')){
        x_end = x;
        x = Math.floor((x_start + x_end) / 2);
    }else if(bombDir.includes('R')){
        x_start = x;
        x = Math.floor((x_start + x_end) / 2);
    }

    // the location of the next window Batman should jump to.
    console.log(`${x} ${y}`);
}
