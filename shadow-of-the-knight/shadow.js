/**
 * Auto-generated code below aims at helping you parse
 * the standard input according to the problem statement.
 **/

var inputs = readline().split(' ');
const W = parseInt(inputs[0]); // width of the building.
const H = parseInt(inputs[1]); // height of the building.
const N = parseInt(readline()); // maximum number of turns before game over.
var inputs = readline().split(' ');
let X0 = parseInt(inputs[0]);
let Y0 = parseInt(inputs[1]);

let moveGridX = {
	min: 0,
	max: W - 1
};
let moveGridY = {
	min: 0,
	max: H - 1
};
printErr('min-max grid: ' ,moveGridX.max, moveGridY.max);
// game loop --------------------------------------------
while (true) {
	const bombDir = readline(); // the direction of the bombs from batman's current location (U, UR, R, DR, D, DL, L or UL)

	// Write an action using print()
	// To debug: printErr('Debug messages...');

	//determineXJump(bombDir);
	//determineYJump(bombDir);
	// the location of the next window Batman should jump to.
	print(determineXJump(bombDir) + ' ' + determineYJump(bombDir));
}
//-------------------------------------------------------

function determineYJump(bombDir) {
	printErr('batman: ' ,X0, Y0)
	printErr('bomb is ', bombDir)
	printErr('gridY min: ' + moveGridX.min + '  max ' + moveGridX.max)
	switch (bombDir) {
		case 'U':
		case 'UR':
		case 'UL':
			printErr('bomb up');
			moveGridY.max -= Math.floor(Y0/2);
			Y0 = moveGridY.min;
			return moveGridY.min;
		case 'D':
		case 'DL':
		case 'DR':
			printErr('bomb down');
			moveGridY.min += Math.floor(Y0/2);
			Y0 = moveGridY.max;
			return moveGridY.max;
		default:
			printErr('bomb same');
		// must be on same line
	}
}

function determineXJump(bombDir) {
	printErr('batman: ' ,X0, Y0);
	printErr('bomb is ', bombDir);
	printErr('gridX min: ' + moveGridX.min + '  max ' + moveGridX.max)
	switch (bombDir) {
		case 'R':
		case 'UR':
		case 'DR':
			moveGridX.min += Math.floor((moveGridX.max - moveGridX.min)/2);
			printErr('bomb right', );
			X0 = moveGridX.max;
			return moveGridX.max;
		case 'L':
		case 'DL':
		case 'UL':
			printErr('bomb left');
			moveGridX.max -= Math.floor(X0/2);
			X0 = moveGridX.min;
			return moveGridX.min;
		default:
			printErr('bomb same');
			return X0;
		// must be on same line
	}
}
