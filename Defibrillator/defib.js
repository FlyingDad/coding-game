/**
 * Auto-generated code below aims at helping you parse
 * the standard input according to the problem statement.
 **/
const defibLocations = [];
let closestDefib;

const LON = Number(readline().replace(',', '.'));
const LAT = Number(readline().replace(',', '.'));
const N = parseInt(readline());
for (let i = 0; i < N; i++) {
		const DEFIB = readline();
		defibLocations.push(createDefibObj(DEFIB));
}
//defibLocations.forEach(e => print(e.lon, e.lat, LAT, LON));
defibLocations.forEach(e => {
	calcDistanceFromMyLoc(e);
	//print(e.dist);
});

function getShortestDist() {
	let shortest = Infinity;
	defibLocations.forEach(e => {
		if(e.dist < shortest) {
			shortest = e.dist,
			closestDefib = e;
		}
	})
}


function createDefibObj(defib) {
	const data = defib.split(';');
	let newDefib = {
		num: data[0],
		name: data[1],
		address: data[2],
		phone: data[3],
		lon: Number(data[4].replace(',', '.')),
		lat: Number(data[5].replace(',', '.'))
	}
	return newDefib;
}

function calcDistanceFromMyLoc(defib) {
	//print(typeof(LAT),  typeof(defib.lat))
	//let temp = Math.cos((LAT + defib.lat)/2);
	let x = (LON - defib.lon) * Math.cos((LAT + defib.lat)/2);
	let y = (LAT - defib.lat)
	let dist = Math.sqrt((x*x)+(y*y)) * 6371;
	defib.dist = dist;
	// return dist;
}

// x = (lonB -lonA) * cos ((latA + latB)/2)
// y = (latB - latA)
// distance = sqrt(x squared + ysquared) * 6371
// Write an action using print()
// To debug: printErr('Debug messages...');
getShortestDist();
print(closestDefib.name);