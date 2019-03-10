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
		};
		lightData.push(newLight);
}

// printErr('Max speed: ', maxSpeed);
// printErr('# of lights: ', lightCount);
//printErr('light #1: ', lightData[0].distance, lightData[0].duration)
// Write an action using print()
// To debug: printErr('Debug messages...');
//
//printErr(getTimeToDistanceInSeconds(lightData[0].distance, maxSpeed) + ' seconds')
//printErr(getDistanceTraveledInMeters(maxSpeed, 14.4) + ' meters')
let allGreen = false;
let testSpeed = maxSpeed;
while(allGreen === false){
	allGreen = true;
	for(let i = 0; i < lightData.length; i++) {
		// printErr('------------------------')
		//printErr('Speed: ', testSpeed);
		if(isLightGreenOrRed(lightData[i], testSpeed) == 'Red'){
			allGreen = false;
			// break;
		}
	}
	testSpeed--;
	if(testSpeed < 0) {
		allGreen = true;
	}
}

print(testSpeed + 1);


// helper functions

function isLightGreenOrRed(light, speed) {
	// get time to light at given speed
	let elapsedTime = getTimeToDistanceInSeconds(light.distance, speed);
	// divide elapsed time by light timer duration, and figure odd or even
	let lightState = Math.floor(elapsedTime / light.duration);
	let redOrGreen = lightState % 2;
	let color = redOrGreen === 0 ? 'Green' : 'Red';
	// if(speed <= 61 && speed >= 59){
	// 	printErr('Speed: ', speed);
	// 	printErr(`elapsedtime: ${elapsedTime}  lightState: ${lightState}  redOrGreen: ${redOrGreen}`);
	// 	printErr('light state: ', color);
	// 	printErr('------------------------')
	// }
	
	return color;
}

function getTimeToDistanceInSeconds(dist, rate) {
	// inputs: km and kph
	return Math.round(dist / convertKphToMps(rate));
}

function getDistanceTraveledInMeters(rate, time) {
	// inputs: kph and seconds	
	return (convertKphToMps(rate) * time);
}

// get more accurate results doing individual conversions, hmmm
function convertKphToMps(rate) {
	let kpm = rate /60;
	let mpm = kpm * 1000;
	let mps = mpm/60;
	return mps;
}