/**
 * Auto-generated code below aims at helping you parse
 * the standard input according to the problem statement.
 **/

const N = parseInt(readline()); // Number of elements which make up the association table.
const Q = parseInt(readline()); // Number Q of file names to be analyzed.

const mimeTable = {};
for (let i = 0; i < N; i++) {
    var inputs = readline().split(' ');
    const EXT = inputs[0].toLowerCase();
    const MT = inputs[1];

    mimeTable[EXT] = MT;
}
const mimeTableKeys = Object.keys(mimeTable);

// For each of the Q filenames, display on a line the corresponding MIME type. If there is no corresponding type, then display UNKNOWN.
for (let i = 0; i < Q; i++) {
    const FNAME = readline();   // One file name per line.
    const EXT = FNAME.indexOf('.') !== -1 ? FNAME.substring(FNAME.lastIndexOf('.') + 1).toLowerCase() : null;

    if(mimeTableKeys.includes(EXT)){
        console.log(mimeTable[EXT]);
    }else {
        console.log('UNKNOWN')
    }
}
