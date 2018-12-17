/**
 * Auto-generated code below aims at helping you parse
 * the standard input according to the problem statement.
 **/

const maxSpeed = parseInt(readline());
const lightCount = parseInt(readline());
const lightData = [];
for (let i = 0; i < lightCount; i++) {
    var inputs = readline().split(' ');
    const distance = parseInt(inputs[0]);
		const duration = parseInt(inputs[1]);
		
		let newLight = {
			distance: distance,
			duration: duration
		}
		lightData.push(newLight)
}

printErr('Max speed: ', maxSpeed);
printErr('# of lights: ', lightCount);
printErr('light #1: ', lightData[0].distance, lightData[0].duration)
// Write an action using print()
// To debug: printErr('Debug messages...');

printErr(getTimeToDistanceInSeconds(lightData[0].distance, maxSpeed) + ' seconds')
printErr(getDistanceTraveledInMeters(maxSpeed, 14.4) + ' meters')


print('50');


// helper functions
function getTimeToDistanceInSeconds(dist, rate) {
	// inputs: km and kph
	return dist / convertKphToMps(rate);
}

function getDistanceTraveledInMeters(rate, time) {
	// inputs: kph and seconds	
	return convertKphToMps(rate) * time;
}

// get more accurate results doing individual conversions, hmmm
function convertKphToMps(rate) {
	let kpm = rate /60;
	let mpm = kpm * 1000;
	let mps = mpm/60
	return mps;
}

// You enter a section of road and you plan to rest entirely on your cruise control to cross the area without having to stop or slow down.

// The goal is to find the maximum speed (off speeding) that will allow you to cross all the traffic lights to green.

// Warning: You can not cross a traffic light the second it turns red !

// Your vehicle enters the zone directly at the speed programmed on the cruise control which ensures that it does not change anymore.

// Input
// Line 1: An integer speed for the maximum speed allowed on the portion of the road (in km / h).

// Line 2: An integer lightCount for the number of traffic lights on the road.

// lightCount next lines: 
// - An integer distance representing the distance of the traffic light from the starting point (in meters).
// - An integer duration representing the duration of the traffic light on each color.

// A traffic light alternates a period of duration seconds in green and then duration seconds in red.
// All traffic lights turn green at the same time as you enter the area.
// Output
// Line 1: The integer speed (km / h) as high as possible that cross all the green lights without committing speeding.
// Constraints
// 1 ≤ speed ≤ 200
// 1 ≤ lightCount ≤ 9999
// 1 ≤ distance ≤ 99999
// 1 ≤ duration ≤ 9999
// Example
// Input
// 50
// 1
// 200 15
// Output
// 50