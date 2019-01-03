/**
 * Auto-generated code below aims at helping you parse
 * the standard input according to the problem statement.
 **/

let gameStarted = false;
let boost1Used = false;
let boost2Used = false;
const checkPoints = [];

const laps = parseInt(readline());
const checkpointCount = parseInt(readline());
for (let i = 0; i < checkpointCount; i++) {
	var inputs = readline().split(' ');
	const checkpointX = parseInt(inputs[0]);
	const checkpointY = parseInt(inputs[1]);
	checkPoints.push([checkpointX, checkpointY]);
}

function Pod(params) {
	this.myX = params[0],
	this.myY = params[1],
	this.vX = params[2],
	this.vY = params[3],
	this.angle = params[4],
	this.nextCheckpointId = params[5],
	this.lastX =  0,
	this.lastY = 0;
}
const Pod1 = new Pod([0, 0, 0, 0, 0]);
const Pod2 = new Pod([0, 0, 0, 0, 0]);
// printErr('cps ', checkPoints[0][1]);
// printErr('init ', inputs)

// game loop
while (true) {
	for (let i = 0; i < 2; i++) {
		var inputs = readline().split(' ');
		if(i === 0) {
			Pod1.myX = parseInt(inputs[0]); // x position of your pod
			Pod1.myY = parseInt(inputs[1]); // y position of your pod
			Pod1.vX = parseInt(inputs[2]); // x speed of your pod
			Pod1.vY = parseInt(inputs[3]); // y speed of your pod
			Pod1.angle = parseInt(inputs[4]); // angle of your pod
			Pod1.nextCheckpointId = parseInt(inputs[5]); // next check point id of your pod
		} else {
			Pod2.myX = parseInt(inputs[0]); // x position of your pod
			Pod2.myY = parseInt(inputs[1]); // y position of your pod
			Pod2.vX = parseInt(inputs[2]); // x speed of your pod
			Pod2.vY = parseInt(inputs[3]); // y speed of your pod
			Pod2.angle = parseInt(inputs[4]); // angle of your pod
			Pod2.nextCheckpointId = parseInt(inputs[5]); // next check point id of your pod
		}
	
		// printErr('pod' + i + ': ', inputs);
	}

	for (let i = 0; i < 2; i++) {
		var inputs = readline().split(' ');
		// Pod2.myX = parseInt(inputs[0]); // x position of the opponent's pod
		// Pod2.myY = parseInt(inputs[1]); // y position of the opponent's pod
		// Pod2.vX = parseInt(inputs[2]); // x speed of the opponent's pod
		// Pod2.vY = parseInt(inputs[3]); // y speed of the opponent's pod
		// Pod2.angle = parseInt(inputs[4]); // angle of the opponent's pod
		// Pod2.nextCheckpointId = parseInt(inputs[5]); // next check point id of the opponent's pod
	}

	// printErr('pod2 ', inputs);

	calcPodMove(Pod1, '1');
	calcPodMove(Pod2, '2');
	// print(
	// 	checkPoints[Pod2.nextCheckpointId][0] +
	// 		' ' +
	// 		checkPoints[Pod2.nextCheckpointId][1] +
	// 		' ' +
	// 		10
	// );

	// print('8000 4500 100');
	// print('8000 4500 100');

	// ======================================================
	// insertion from old code ==============================
	// ======================================================
}

function calcPodMove(pod, id) {
	// printErr('pod pos ',pod.myX, pod.myY)
	let targetCoords = {
		nextX: checkPoints[pod.nextCheckpointId][0],
		nextY: checkPoints[pod.nextCheckpointId][1]
	}
	let nextCheckpointAngle = calcAngleToTarget(targetCoords) * (180 / Math.PI);
	let targetAngle = Math.abs(nextCheckpointAngle);
	let nextCheckpointDist = (calcDistToTarget(pod));
	// printErr('next cp angle: ', nextCheckpointAngle)
	// get our vector
	let myVector = getMyVector(pod);

	// printErr('Pod' + id + ': ', checkPoints[pod.nextCheckpointId][0],
	// checkPoints[pod.nextCheckpointId][1])

	// adjust checkpoints by offset if less than 7000

	printErr('dist/angle: ', nextCheckpointDist, targetAngle )
	if (nextCheckpointDist < 7000 && gameStarted && targetAngle < 65) {

		let desiredCoords = {
			x: checkPoints[pod.nextCheckpointId][0],
			y: checkPoints[pod.nextCheckpointId][1]
		}
		printOutput(desiredCoords, getSpeedReduction(nextCheckpointDist));

	} else {
		let desiredCoords = {
			x: checkPoints[pod.nextCheckpointId][0],
			y: checkPoints[pod.nextCheckpointId][1]
		}
		if (!gameStarted) {
			if(id == '1') {
				printOutput(desiredCoords, 'BOOST');
			} else {
				printOutput(desiredCoords, 'BOOST');
				gameStarted = true;
			}
		} else if (targetAngle > 90) {
			printOutput(desiredCoords, '50');
		} else if (targetAngle > 60) {
			printOutput(desiredCoords, '75');
		} else {
			printOutput(desiredCoords, '100');
		}
	}

	// lastAngle = Math.abs(nextCheckpointAngle);
	// lastDistance = nextCheckpointDist;
	pod.lastX = pod.myX;
	pod.lastY = pod.myY;
	// printErr(pod.lastY, pod.lastX)
}

function printOutput(coords, speed) {
	print(coords.x + ' ' + coords.y + ' ' + speed);
}

function getSpeedReduction(dist) {
	switch (true) {
		case dist < 2000:
			return ' 40';
		// case dist < 3000:
		// 	return ' 55';
		// case dist < 2000:
		// 	return ' 30';
		default:
			return ' 100';
	}
}


function getMyVector(pod) {
	let normalizedCoords = normalizeCoords(
		pod.lastX,
		pod.lastY,
		pod.myX,
		pod.myY
	);
	// printErr('Vin: ',normalizedCoords.nextX, normalizedCoords.nextY);
	let myVector = calcAngleToTarget(normalizedCoords);
	// printErr('V: ',myVector * 180/Math.PI);
	return myVector;
}

function normalizeCoords(myX, myY, nextX, nextY) {
	let newCoords = {
		x: 0,
		y: 0,
		nextX: null,
		nextY: null
	};
	newCoords.nextX = nextX - myX;
	newCoords.nextY = nextY - myY;
	// printErr('norm target: ',newCoords.x, newCoords.y,newCoords.nextX, newCoords.nextY);
	return newCoords;
}

function calcAngleToTarget(coords) {
	// printErr('recieved coords: ', coords.nextX, coords.nextY)
	let a = Math.atan2(coords.nextY, coords.nextX);
	// printErr('fn calc angleto target: ', a, a* (180 / Math.PI));
	return a; // radians
	// printErr()
}

function calcDistToTarget(pod){
	// printErr(pod.myX, pod.myY,checkPoints[pod.nextCheckpointId])
	const opposite = Math.abs(checkPoints[pod.nextCheckpointId][0] - pod.myX);
	const adjacent = Math.abs(checkPoints[pod.nextCheckpointId][1] - pod.myY);
	// printErr('opp, adj: ', opposite, adjacent)
	let dist = Math.sqrt((opposite * opposite) + (adjacent * adjacent));
	// printErr('target dist: ', dist)
	return dist;
	// return 10000;
}

