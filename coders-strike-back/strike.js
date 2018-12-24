/**
 * Auto-generated code below aims at helping you parse
 * the standard input according to the problem statement.
 **/

const checkPoints = []

const laps = parseInt(readline());
const checkpointCount = parseInt(readline());
for (let i = 0; i < checkpointCount; i++) {
	var inputs = readline().split(' ');
	const checkpointX = parseInt(inputs[0]);
	const checkpointY = parseInt(inputs[1]);
	checkPoints.push([checkpointX, checkpointY])
}

function Pod(params) {
	this.myX = params[0],
	this.myY = params[1],
	this.vX = params[2],
	this.vY = params[3],
	this.angle = params[4],
	this.nextCheckpointId = params[5]
}
const Pod1 = new Pod([0,0,0,0,0]);
const Pod2 = new Pod([0,0,0,0,0]);
printErr('cps ', checkPoints[0][1])
// printErr('init ', inputs)

// game loop
while (true) {
	for (let i = 0; i < 2; i++) {
		var inputs = readline().split(' ');
		Pod1.myX = parseInt(inputs[0]); // x position of your pod
		Pod1.myY = parseInt(inputs[1]); // y position of your pod
		Pod1.vX = parseInt(inputs[2]); // x speed of your pod
		Pod1.vY = parseInt(inputs[3]); // y speed of your pod
		Pod1.angle = parseInt(inputs[4]); // angle of your pod
		Pod1.nextCheckpointId = parseInt(inputs[5]); // next check point id of your pod
	}
	printErr('pod1 ', inputs);
	for (let i = 0; i < 2; i++) {
		var inputs = readline().split(' ');
		Pod2.myX = parseInt(inputs[0]); // x position of the opponent's pod
		Pod2.myY = parseInt(inputs[1]); // y position of the opponent's pod
		Pod2.vX = parseInt(inputs[2]); // x speed of the opponent's pod
		Pod2.vY = parseInt(inputs[3]); // y speed of the opponent's pod
		Pod2.angle = parseInt(inputs[4]); // angle of the opponent's pod
		Pod1.nextCheckpointId = parseInt(inputs[5]); // next check point id of the opponent's pod
	}

	printErr('pod2 ',inputs);

	// Write an action using print()
	// To debug: printErr('Debug messages...');

	// You have to output the target position
	// followed by the power (0 <= thrust <= 100)
	// i.e.: "x y thrust"
	print(checkPoints[Pod1.nextCheckpointId][0] + ' ' + checkPoints[Pod1.nextCheckpointId][0] + ' ' + 100);
	print(checkPoints[Pod2.nextCheckpointId][0] + ' ' + checkPoints[Pod2.nextCheckpointId][0] + ' ' + 100);
	// print('8000 4500 100');
	// print('8000 4500 100');
}
