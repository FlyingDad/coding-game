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

// game loop -------------------------------------------------------
while (true) {
	var inputs = readline().split(' ');
	const x = parseInt(inputs[0]);
	const y = parseInt(inputs[1]);
	const nextCheckpointX = parseInt(inputs[2]); // x position of the next check point
	const nextCheckpointY = parseInt(inputs[3]); // y position of the next check point
	const nextCheckpointDist = parseInt(inputs[4]); // distance to the next checkpoint
	const nextCheckpointAngle = parseInt(inputs[5]); // angle between your pod orientation and the direction of the next checkpoint
	var inputs = readline().split(' ');
	const opponentX = parseInt(inputs[0]);
	const opponentY = parseInt(inputs[1]);

	// Write an action using print()
	// To debug: printErr('Debug messages...');

	// You have to output the target position
	// followed by the power (0 <= thrust <= 100)
	// i.e.: "x y thrust"

	// -------------------------------------------------------

	//printErr('boost used: ', boostUsed);

	let targetAngle = Math.abs(nextCheckpointAngle);

	//printErr('last angle: ', lastAngle);
	printErr('next angle: ', nextCheckpointAngle);
	printErr('distance: ', nextCheckpointDist);
	
	// game start initial boost
	// if (gameStarted === false) {
	// 	print(nextCheckpointX + ' ' + nextCheckpointY + ' BOOST');
	// 	boostUsed = true;
	// 	gameStarted = true;
	// }

	// new ----------------------------------------------------------------------

	// get our vector

	let myVector = getMyVector(lastPosition, x, y)

	// adjust checkpoints by offset if less than 5000
	if(nextCheckpointDist < 5000 && gameStarted && nextCheckpointAngle < 45) {
		let desiredCoords = calcCoordsToCheckpoint(x, y, nextCheckpointX, nextCheckpointY,nextCheckpointAngle, nextCheckpointDist, myVector)
		print(desiredCoords.x + ' ' + desiredCoords.y + calcSpeed(nextCheckpointDist));
	} else {
		print(nextCheckpointX + ' ' + nextCheckpointY + ' BOOST');
		gameStarted = true;
	}
	
	// switch (true) {
	// 	case nextCheckpointAngle > 120: 
	// 		printErr('> 120 deg');
	// 		print(nextCheckpointX + ' ' + nextCheckpointY + ' 15');
	// 		break;
	// 	case nextCheckpointAngle > 90: 
	// 		printErr('> 90 deg');
	// 		print(nextCheckpointX + ' ' + nextCheckpointY + ' 55');
	// 		break;
	// 	case nextCheckpointAngle > 60: 
	// 			printErr('> 60 deg');
	// 			if(nextCheckpointDist > 3000){
	// 				print(nextCheckpointX + ' ' + nextCheckpointY + ' 80');
	// 			}
	// 			else {
	// 				print(nextCheckpointX + ' ' + nextCheckpointY + ' 30');
	// 			}
				
	// 		break;
		// case nextCheckpointDist > 5000:
		// 	printErr('> 5000');
		// 	if(nextCheckpointDist < lastDistance){
		// 		print(nextCheckpointX + ' ' + nextCheckpointY + ' 100');
		// 	} else {
		// 		print(nextCheckpointX + ' ' + nextCheckpointY + ' 55');
		// 	}
			
		// 	break;
		// case nextCheckpointDist > 3500:
		// 	printErr('> 3500');
		// 	if(nextCheckpointAngle <= lastAngle) {
		// 		print(nextCheckpointX + ' ' + nextCheckpointY + ' 95');
		// 	} else {
		// 		print(nextCheckpointX + ' ' + nextCheckpointY + ' 15');
		// 	}
		// 	break;	
		// case nextCheckpointDist > 2500:
		// 	printErr('> 1500');
		// 	if(nextCheckpointAngle <= lastAngle) {
		// 		print(nextCheckpointX + ' ' + nextCheckpointY + ' 75');
		// 	} else {
		// 		print(nextCheckpointX + ' ' + nextCheckpointY + ' 50');
		// 	}
		// 	break;	
		// case nextCheckpointDist > 100:
		// 	printErr('> 100');
		// 	// if(nextCheckpointAngle <= lastAngle) {
		// 	// 	print(nextCheckpointX + ' ' + nextCheckpointY + ' 35');
		// 	// } else {
		// 		print(nextCheckpointX + ' ' + nextCheckpointY + ' 15');
		// 	// }
		// 	break;	
	// 	default:
	// 		printErr('default');
	// 		print(nextCheckpointX + ' ' + nextCheckpointY + ' 100');
	// }

	lastAngle = Math.abs(nextCheckpointAngle);
	lastDistance = nextCheckpointDist;
	lastPosition.x = x;
	lastPosition.y = y;
}

function calcSpeed(distance) {
	switch(true) {
		case distance < 1000:
			return ' 25';
		case distance < 2000: 
			return ' 60';
		default:
		return ' 100';
	}
}

function getMyVector(lastPosition, myX, myY){
	let normalizedCoords = normalizeCoords(lastPosition.x, lastPosition.y, myX, myY);
	let myVector = calcAngleToTarget(normalizedCoords);
	//printErr('V: ',myVector * 180/Math.PI);
	return myVector;
}

function calcCoordsToCheckpoint(myX, myY, nextX, nextY, angle, distance, myVector) {
	let checkpointCoords = {
		x: null,
		y: null
	}
	//printErr('calcAngle input: ', myX, myY, nextX, nextY, angle, distance, myVector * 180/Math.PI)
	let normalizedCoords = normalizeCoords(myX, myY, nextX, nextY);
	let targetAngle = calcAngleToTarget(normalizedCoords);
	printErr('My Vector: ', myVector * 180/Math.PI);
	printErr('Target angle: ', targetAngle * 180/Math.PI)
	printErr('Diff: ', (targetAngle - myVector) * 180/Math.PI);
	//add angle offset here -----
	targetAngle += (targetAngle - myVector);
	printErr('offset angle: ', targetAngle * 180/Math.PI);
	let targetCoords = calcTargetCoords(targetAngle, distance);
	checkpointCoords.x = targetCoords.x + myX;
	checkpointCoords.y = targetCoords.y + myY
	//printErr('adjusted coords: ', targetCoords.x + myX, targetCoords.y + myY)
	return checkpointCoords;
}

function normalizeCoords(myX, myY, nextX, nextY) {
	let newCoords = {
		x: 0,
		y: 0,
		nextX: null,
		nextY: null
	}
	newCoords.nextX = nextX - myX;
	newCoords.nextY = nextY - myY;
	//printErr('norm target: ', newCoords.nextX, newCoords.nextY);
	return(newCoords);
}

function calcAngleToTarget(coords){
  //printErr('recieved coords: ', coords.nextX, coords.nextY)
	let a = Math.atan2(coords.nextY, coords.nextX);
	//printErr('angles: ', a, a* (180 / Math.PI));
	return a;  // radians
	// printErr()
}

function calcTargetCoords(angle, distance) {
	let newRawCoords = {
		x: null,
		y: null
	}
	newRawCoords.x = Math.floor(distance * Math.cos(angle));
	newRawCoords.y = Math.floor(distance * Math.sin(angle));
	//printErr('target raw coords: ', newRawCoords.x, newRawCoords.y);
	return newRawCoords;
}
