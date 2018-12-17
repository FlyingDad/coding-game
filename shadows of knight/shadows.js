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
	// printErr('initial max x: ', moveGridX.max, W)
	print(determineXJump(bombDir) + ' ' + determineYJump(bombDir));
}
//-------------------------------------------------------

function determineXJump(bombDir) {
	printErr('batman: ' ,X0, Y0);
	printErr('bomb is ', bombDir);
	printErr('gridX min: ' + moveGridX.min + '  max ' + moveGridX.max)
	switch (bombDir) {
		case 'R':
		case 'UR':
		case 'DR':
			moveGridX.min = X0;  
			printErr('bomb right', );
			//printErr(moveGridX.max, X0)
			//printErr('going right: ' + Math.ceil((moveGridX.max - X0)/2))
			X0 += Math.ceil((moveGridX.max - X0)/2);
			return X0;
		case 'L':
		case 'DL':
		case 'UL':
			printErr('bomb left');
			moveGridX.max = X0;
			X0 -= Math.ceil((X0 - moveGridX.min)/2);
			return X0;
		default:
			printErr('bomb same x');
			return X0;
		// must be on same line
	}
}

function determineYJump(bombDir) {
	printErr('batman: ' ,X0, Y0)
	printErr('bomb is ', bombDir)
	printErr('gridY min: ' + moveGridX.min + '  max ' + moveGridX.max)
	switch (bombDir) {
		case 'U':
		case 'UR':
		case 'UL':
			printErr('bomb up');
			moveGridY.max = Y0;
			Y0 -= Math.ceil((Y0 - moveGridY.min)/2);
			return Y0;
		case 'D':
		case 'DL':
		case 'DR':
			printErr('bomb down');
			moveGridY.min = Y0;
			Y0 += Math.ceil((moveGridY.max - Y0)/2); 
			return Y0;
		default:
			printErr('bomb same, Y0 is ', Y0);
			return Y0;
		// must be on same line
	}
}


