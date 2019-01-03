/**
 * Auto-generated code below aims at helping you parse
 * the standard input according to the problem statement.
 **/

let gameStarted = false;
let boostUsed = false;
let lastAngle = Infinity;
let lastDistance = Infinity;
let lastPosition = {
	x: null,
	y: null
};

function Pod(params) {
	this.myX = params[0],
	this.myY = params[1],
	this.vX = params[2],
	this.	vY = params[3],
	this.angle = params[4],
	this.nextCheckpointId = params[5]
}
const Pod1 = new Pod([0,0,0,0,0]);
const Pod2 = new Pod([0,0,0,0,0]);
// // Initializaiton Input
// Line 2: checkpointCount : the number of checkpoints in the circuit.
// Next checkpointCount lines : 2 integers checkpointX , checkpointY for the coordinates of checkpoint.
const laps = readline();
const checkPointCount = readline();
const rawCheckpoint = readline().split(',');
printErr(laps, checkPointCount, rawCheckpoint);

// Input for one game turn
// First 2 lines: Your two pods.
// Next 2 lines: The opponent's pods.
// Each pod is represented by: 6 integers, x & y for the position. vx & vy for the speed vector. angle for the rotation angle in degrees. nextCheckPointId for the number of the next checkpoint the pod must go through.
// game loop -------------------------------------------------------
while (true) {
	const pod1Data = readline().split(' ');
	printErr('pod1data ',pod1Data)
	Pod1.myX = pod1Data[0];
	Pod1.myY = pod1Data[1];
	Pod1.vX = pod1Data[3];
	Pod1.vY = pod1Data[4];
	Pod1.nextCheckpointId = pod1Data[5];

	const pod2Data = readline().split(' ');
	printErr('pod2data ',pod2Data)
	Pod2.myX = pod2Data[0];
	Pod2.myY = pod2Data[1];
	Pod2.vX = pod2Data[3];
	Pod2.vY = pod2Data[4];
	Pod2.nextCheckpointId = pod2Data[5];

	const EnemyPod1 = readline().split(' ');
	const EnemyPod2 = readline().split(' ');
	printErr('Pod1', Pod1.myX, Pod1.myY, Pod1.vX, Pod1.vY, Pod1.nextCheckpointId);
	printErr('Pod2', Pod2.myX, Pod2.myY, Pod2.vX, Pod2.vY, Pod2.nextCheckpointId);
	printErr(EnemyPod1);
	printErr(EnemyPod2);


	// var inputs = readline().split(' ');
	// const x = parseInt(inputs[0]);
	// const y = parseInt(inputs[1]);
	// const nextCheckpointX = parseInt(inputs[2]); // x position of the next check point
	// const nextCheckpointY = parseInt(inputs[3]); // y position of the next check point
	// const nextCheckpointDist = parseInt(inputs[4]); // distance to the next checkpoint
	// const nextCheckpointAngle = parseInt(inputs[5]); // angle between your pod orientation and the direction of the next checkpoint
	// var inputs = readline().split(' ');
	// const opponentX = parseInt(inputs[0]);
	// const opponentY = parseInt(inputs[1]);

	// Write an action using print()
	// To debug: printErr('Debug messages...');

	// You have to output the target position
	// followed by the power (0 <= thrust <= 100)
	// i.e.: "x y thrust"

	// -------------------------------------------------------
	// Output for one game turn
	// Two lines: 2 integers for the target coordinates of your pod followed by thrust , the acceleration to give your pod, or by SHIELD to activate the shields, or by BOOST for an acceleration burst. One line per pod.
	let nextCheckpointX = 1000;
	let nextCheckpointY = 1000;
	let nextCheckpointDist = 10000;
	let nextCheckpointAngle = 0;
	let targetAngle = Math.abs(nextCheckpointAngle);

	//printErr('last angle: ', lastAngle);
	printErr('next angle: ', nextCheckpointAngle);
	printErr('distance: ', nextCheckpointDist);

	// get our vector

	let myVector = getMyVector(lastPosition, Pod1.myX, Pod1.myY);

	// adjust checkpoints by offset if less than 5000
	if (nextCheckpointDist < 7000 && gameStarted && targetAngle < 65) {
		let desiredCoords = calcCoordsToCheckpoint(
			x,
			y,
			nextCheckpointX,
			nextCheckpointY,
			nextCheckpointAngle,
			nextCheckpointDist,
			myVector
		);

		print(
			desiredCoords.x +
				' ' +
				desiredCoords.y +
				getSpeedReduction(nextCheckpointDist)
		);
	} else {
		if (!gameStarted) {
			print(nextCheckpointX + ' ' + nextCheckpointY + ' BOOST');
			gameStarted = true;
		} else if (targetAngle > 90) {
			print(nextCheckpointX + ' ' + nextCheckpointY + ' 50');
		} else if (targetAngle > 60) {
			print(nextCheckpointX + ' ' + nextCheckpointY + ' 75');
		} else {
			print(nextCheckpointX + ' ' + nextCheckpointY + ' 100');
		}
	}

	lastAngle = Math.abs(nextCheckpointAngle);
	lastDistance = nextCheckpointDist;
	lastPosition.x = Pod1.myX;
	lastPosition.y = Pod1.myY;
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

function getMyVector(lastPosition, myX, myY) {
	let normalizedCoords = normalizeCoords(
		lastPosition.x,
		lastPosition.y,
		myX,
		myY
	);
	let myVector = calcAngleToTarget(normalizedCoords);
	//printErr('V: ',myVector * 180/Math.PI);
	return myVector;
}

function calcCoordsToCheckpoint(
	myX,
	myY,
	nextX,
	nextY,
	angle,
	distance,
	myVector
) {
	let checkpointCoords = {
		x: null,
		y: null
	};
	//printErr('calcAngle input: ', myX, myY, nextX, nextY, angle, distance, myVector * 180/Math.PI)
	let normalizedCoords = normalizeCoords(myX, myY, nextX, nextY);
	let targetAngle = calcAngleToTarget(normalizedCoords);
	printErr('My Vector: ', (myVector * 180) / Math.PI);
	printErr('Target angle: ', (targetAngle * 180) / Math.PI);
	printErr('Diff: ', ((targetAngle - myVector) * 180) / Math.PI);
	//add angle offset here -----
	targetAngle += targetAngle - myVector;
	printErr('offset angle: ', (targetAngle * 180) / Math.PI);
	let targetCoords = calcTargetCoords(targetAngle, distance);
	checkpointCoords.x = targetCoords.x + myX;
	checkpointCoords.y = targetCoords.y + myY;
	//printErr('adjusted coords: ', targetCoords.x + myX, targetCoords.y + myY)
	return checkpointCoords;
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
	//printErr('norm target: ', newCoords.nextX, newCoords.nextY);
	return newCoords;
}

function calcAngleToTarget(coords) {
	//printErr('recieved coords: ', coords.nextX, coords.nextY)
	let a = Math.atan2(coords.nextY, coords.nextX);
	//printErr('angles: ', a, a* (180 / Math.PI));
	return a; // radians
	// printErr()
}

function calcTargetCoords(angle, distance) {
	let newRawCoords = {
		x: null,
		y: null
	};
	newRawCoords.x = Math.floor(distance * Math.cos(angle));
	newRawCoords.y = Math.floor(distance * Math.sin(angle));
	//printErr('target raw coords: ', newRawCoords.x, newRawCoords.y);
	return newRawCoords;
}
