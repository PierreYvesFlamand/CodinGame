/**
 * Auto-generated code below aims at helping you parse
 * the standard input according to the problem statement.
 **/

const N = parseInt(readline());
const arr = []
for (let i = 0; i < N; i++) {
    const pi = parseInt(readline());
    arr.push(pi)
}
arr.sort((a,b)=>a-b);

min = arr[1] - arr[0];

for(i = 0; i < arr.length - 1; i++){
    if(arr[i + 1] - arr[i] < min){
        min = arr[i + 1] - arr[i];
    }
}

console.log(min);
