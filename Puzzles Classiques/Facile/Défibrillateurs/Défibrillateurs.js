/**
 * Auto-generated code below aims at helping you parse
 * the standard input according to the problem statement.
 **/

const getNumber = (str) => Number(str.replace(',', '.'));
const deg2Rad = (deg) => deg * (Math.PI / 180);

const LON = readline();
const LAT = readline();
const N = parseInt(readline());

const userPosition = {
    lon: deg2Rad(getNumber(LON)),
    lat: deg2Rad(getNumber(LAT)),
};

let betterDistance = null;
let target;

for (let i = 0; i < N; i++) {
    const DEFIB = readline().split(';');
    const defibPosition = {
        lon: deg2Rad(getNumber(DEFIB[4])),
        lat: deg2Rad(getNumber(DEFIB[5])),
    };

    const x = (defibPosition.lon - userPosition.lon) * Math.cos((userPosition.lat + defibPosition.lat) / 2);
    const y = defibPosition.lat - userPosition.lat;
    let d = Math.sqrt(Math.pow(x, 2) + Math.pow(y, 2)) * 6371;

    if (betterDistance == null || betterDistance > d) {
        betterDistance = d;
        target = DEFIB[1];
        console.error('better');
    }
}

console.log(target);
